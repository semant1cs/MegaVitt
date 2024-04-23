import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    private configService: ConfigService,
    private authService: AuthService
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const token = await this.extractTokenFromHeader(request, response);

    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('JWT_SECRET_KEY'),
      });

      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private async extractTokenFromHeader(request: Request, response: Response): Promise<string | undefined> {
    const cookies = request.headers.cookie?.split(' ');

    if (cookies === undefined) return undefined;
    if (cookies.length === 2) return request.headers.cookie?.split(' ')[1].replace('Authorization=', '');
    const refreshToken = request.headers.cookie?.split(' ')[0].replace('refresh_token=', '');

    const tokens = await this.authService.refreshTokens(refreshToken, response, { fromAuth: false });

    return tokens.access_token;
  }
}
