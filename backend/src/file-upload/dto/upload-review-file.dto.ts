import {ApiProperty} from "@nestjs/swagger";

export class UploadReviewFileDtoFileDto {
  @ApiProperty({ example: '12345678', description: 'Уникальный идентификатор сайта' })
  readonly siteId: number;
}
