import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import path from 'path';
import { UserService } from 'src/user/user.service';

@Injectable()
export class FileUploadService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  async uploadAvatar(request: Request): Promise<string> {
    const jwtToken = request.headers.authorization.split(' ')[1];
    const userJwtInfo = this.jwtService.verify(jwtToken);
    const userId = userJwtInfo.id;
    const user = await this.userService.findUserByPK(userId);

    // console.log(user);

    // await user.$set('avatar', 'asd');

    return 'Аватар успешно загружен';
  }
}
