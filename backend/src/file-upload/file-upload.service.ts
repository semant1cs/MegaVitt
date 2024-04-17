import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import path from 'path';
import User from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class FileUploadService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  async uploadAvatar(request: Request) {
    const jwtToken = request.headers.authorization.split(' ')[1];
    const userJwtInfo = await this.jwtService.verify(jwtToken);
    const userId = userJwtInfo.id;
    const user: User = await this.userService.findUserByPK(userId);

    if (!user) throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
    return await this.userService.updateAvatar(user, `${userId}/avatar`);
  }
}
