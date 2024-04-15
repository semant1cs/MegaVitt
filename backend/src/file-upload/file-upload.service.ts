import { Injectable } from '@nestjs/common';
import { UpdateFileUploadDto } from './dto/update-file-upload.dto';

@Injectable()
export class FileUploadService {
  uploadAvatar(): string {
    return 'Аватар успешно загружен';
  }

  findAll() {
    return `This action returns all fileUpload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileUpload`;
  }

  update(id: number, updateFileUploadDto: UpdateFileUploadDto) {
    return `This action updates a #${id} fileUpload`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileUpload`;
  }
}
