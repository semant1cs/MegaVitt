import { imageFileFilter } from 'src/utils/file-filters/image-filter/image-filter';
import { Controller, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import * as multer from 'multer';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

@Controller('file-upload')
@ApiTags('upload-files')
export class FileUploadController {
  constructor(private readonly _fileUploadService: FileUploadService) {}

  @Post('/avatar')
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
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
  uploadAvatar(@Req() request: Request) {
    return this._fileUploadService.uploadAvatar(request);
  }
}
