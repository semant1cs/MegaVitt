import { HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
export const imageFileFilter = (req: Request, file: Express.Multer.File, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new HttpException('Для загрузки доступны только изображения', HttpStatus.BAD_REQUEST), false);
  }
  callback(null, true);
};
