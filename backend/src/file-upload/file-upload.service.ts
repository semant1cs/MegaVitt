import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {JwtService} from '@nestjs/jwt';
import {Request} from 'express';
import User from 'src/user/entities/user.entity';
import {UserService} from 'src/user/user.service';
import {UploadReviewFileDtoFileDto} from "./dto/upload-review-file.dto";
import {SiteService} from "../site/site.service";
import Site from "../site/entities/site.entity";
import * as path from 'path'
import * as fs from "fs";

@Injectable()
export class FileUploadService {
  constructor(
    private userService: UserService,
    private _siteService: SiteService
  ) {}

  async uploadAvatar(request: Request, file: any): Promise<User> {
    if (!file)  throw new HttpException('Изображение не было получено', HttpStatus.BAD_REQUEST)
    const user: User = await this.userService.findUser(request);
    const fileName: string = await this.createFile(file,user)
    return await this.userService.updateAvatar(user, `${user.id}/${fileName}`);
  }

  async uploadPreview(reviewDto: UploadReviewFileDtoFileDto, image: any, request: Request) {
    if (!image)  throw new HttpException('Изображение не было получено', HttpStatus.BAD_REQUEST)

    const site: Site = await this._siteService.findSite(reviewDto.siteId);
    const user: User = await this.userService.findUser(request);
    const fileName: string = await this.createFile(image, user, site)

    return this._siteService.updatePreview(site, `${user.id}/${site.id}/${fileName}`)
  }

  async createFile(file, user: User, site?: Site){
    try {
      let filePath: string;
      let fileName: string;

      if (site) {
          filePath = path.resolve('src', 'files', user.id, site.id);
          fileName = `preview.${file.originalname.match('[^.]+$')[0]}`
      } else {
          filePath = path.resolve('src', 'files', user.id);
          fileName = `avatar.${file.originalname.match('[^.]+$')[0]}`;
      }

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.join(filePath, fileName), file.buffer)

      return fileName;
    } catch (err) {
      throw new HttpException('Ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
    }

  }
}
