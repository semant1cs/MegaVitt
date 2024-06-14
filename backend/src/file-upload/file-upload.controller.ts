import {imageFileFilter} from 'src/utils/file-filters/image-filter/image-filter';
import {Body, Controller, Post, Req, UploadedFile, UseInterceptors} from '@nestjs/common';
import * as multer from 'multer';
import {FileUploadService} from './file-upload.service';
import {FileInterceptor} from '@nestjs/platform-express';
import {Request} from 'express';
import {ApiBody, ApiConsumes, ApiExtraModels, ApiParam, ApiTags} from '@nestjs/swagger';
import {UploadReviewFileDtoFileDto} from "./dto/upload-review-file.dto";

@Controller('file-upload')
@ApiTags('upload-files')
export class FileUploadController {
  constructor(private readonly _fileUploadService: FileUploadService) {}

  @Post('/avatar')
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
  @UseInterceptors(FileInterceptor('file'))
  uploadAvatar(@Req() request: Request, @UploadedFile() file) {
    return this._fileUploadService.uploadAvatar(request, file);
  }

  @Post('preview')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        siteId: {
          type: 'string',
          description: 'Уникальный идентификатор сайта',
        }
      },
      
    }
  })
  @UseInterceptors(FileInterceptor('file'))
  uploadPreview(@Req() request: Request, @Body() reviewDto: UploadReviewFileDtoFileDto, @UploadedFile() file) {
     return this._fileUploadService.uploadPreview(reviewDto, file, request);
  }
}
