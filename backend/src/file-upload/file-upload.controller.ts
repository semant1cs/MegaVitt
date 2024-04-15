import { imageFileFilter } from 'src/utils/file-filters/image-filter/image-filter';
import { Controller, Post, UseInterceptors } from '@nestjs/common';
import * as multer from 'multer';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly _fileUploadService: FileUploadService) {}

  @Post('/avatar')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.diskStorage({
        destination: (req: Request, file: Express.Multer.File, cb): void => {
          cb(null, req['dynamicDestination']);
        },
        filename: (req: Request, file: Express.Multer.File, cb): void => {
          const filename: string = file.originalname.replace(/^.*(?=\.[^.]+$)/, 'avatar');
          cb(null, filename);
        },
      }),
      fileFilter: imageFileFilter,
    })
  )
  uploadAvatar() {
    return this._fileUploadService.uploadAvatar();
  }
}
