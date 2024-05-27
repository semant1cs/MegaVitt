import { ApiProperty } from '@nestjs/swagger';

export class CreatePresetColorDto {
  @ApiProperty({ example: 'Для основной страницы', description: 'Название пресета цветов для сайта' })
  readonly name: string;
}
