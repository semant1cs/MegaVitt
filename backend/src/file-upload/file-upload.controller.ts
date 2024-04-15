import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, } from '@nestjs/common';
import * as multer from 'multer';
import { FileUploadService } from './file-upload.service';
import { UpdateFileUploadDto } from './dto/update-file-upload.dto';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly _fileUploadService: FileUploadService) {
  }

  @Post('/avatar')
  @UseInterceptors(FileInterceptor('file', {
    storage: multer.diskStorage({
      destination: (req: any, file: Express.Multer.File, cb): void => {
        cb(null, req['dynamicDestination']);
      },
      filename: (req: any, file: Express.Multer.File, cb): void => {
        const filename: string = file.originalname.replace(/^.*(?=\.[^.]+$)/, 'avatar');
        cb(null, filename);
      },
    }),
  }))
  uploadAvatar() {
    return this._fileUploadService.uploadAvatar();
  }

  @Get()
  findAll() {
    return this._fileUploadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._fileUploadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileUploadDto: UpdateFileUploadDto) {
    return this._fileUploadService.update(+id, updateFileUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._fileUploadService.remove(+id);
  }
}
