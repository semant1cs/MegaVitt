import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import * as multer from 'multer';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly _fileUploadService: FileUploadService) {}

  @Post('/avatar')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.diskStorage({
        destination: (req: any, file: Express.Multer.File, cb): void => {
          cb(null, req['dynamicDestination']);
        },
        filename: (req: any, file: Express.Multer.File, cb): void => {
          const filename: string = file.originalname.replace(/^.*(?=\.[^.]+$)/, 'avatar');
          cb(null, filename);
        },
      }),
    })
  )
  uploadAvatar() {
    return this._fileUploadService.uploadAvatar();
  }
}
