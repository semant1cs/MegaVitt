import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import path from 'path';
import User from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import {logger} from "sequelize/types/utils/logger";

@Injectable()
export class FileUploadService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private configService: ConfigService
  ) {}

  async uploadAvatar(request: Request) {
    const jwtToken = request.cookies.Authorization;
    const userJwtInfo = await this.jwtService.verify(jwtToken, { secret: this.configService.get('JWT_SECRET_KEY') });
    const userId = userJwtInfo.id;
    const user: User = await this.userService.findUserByPK(userId);
    if (!user) throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
    return await this.userService.updateAvatar(user, `${userId}/avatar.${request.file.filename.match('[^.]+$')[0]}`);
  }
}
