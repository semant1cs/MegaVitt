import { ConfigService } from '@nestjs/config';
import { UserService } from '../../../user/user.service';
import { RoleService } from '../../../role/role.service';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY, Roles } from '../decorators/role.decorator';
import Role from '../../../role/entities/role.entity';
import { JwtService } from '@nestjs/jwt';
import User from 'src/user/entities/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    @Inject(UserService) private userSerivce: UserService,
    private configService: ConfigService
  ) {}

  async canActivate(context: ExecutionContext) {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      if (!requiredRoles) {
        return true;
      }
      const req = context.switchToHttp().getRequest();
      const token = req.cookies.Authorization;

      if (!token) {
        throw new UnauthorizedException({ message: 'Пользователь не авторизован' });
      }

      const userId = this.jwtService.verify(token, { secret: this.configService.get('JWT_SECRET_KEY') }).id;
      const user = await this.userSerivce.findUserByPK(userId);
      return this.isRoleInclude(user, requiredRoles).then((isInclude) => isInclude);
    } catch (e) {
      console.log(e);
      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
    }
  }

  async isRoleInclude(user, requiredRoles) {
    return user.roles?.some((role) => requiredRoles.includes(role.value));
  }
}
