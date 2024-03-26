import { ApiProperty } from '@nestjs/swagger';

export class CreateSiteDto {
  @ApiProperty({ example: 'Мой сайт', description: 'Название сайта' })
  readonly name: string;
}
