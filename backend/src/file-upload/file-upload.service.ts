import { Injectable } from '@nestjs/common';

@Injectable()
export class FileUploadService {
  uploadAvatar(): string {
    return 'Аватар успешно загружен';
  }
}
