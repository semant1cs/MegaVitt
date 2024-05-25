import { ApiProperty } from '@nestjs/swagger';

export class CreateTemplateDto {
  @ApiProperty({ example: 'Шаблон #33333', description: 'Название шаблона' })
  readonly title: string;

  @ApiProperty({ example: 'Для красивого сайта', description: 'Описание шаблона' })
  readonly description: string;
}
