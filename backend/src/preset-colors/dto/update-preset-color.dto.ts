import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePresetColorDto } from './create-preset-color.dto';

export class UpdatePresetColorDto extends PartialType(CreatePresetColorDto) {
  @ApiProperty({ example: '#FFAA55', description: 'Основной цвет страницы' })
  readonly mainColor: string;

  @ApiProperty({ example: '#66FF00', description: 'Цвет фона' })
  readonly backgroundColor: string;
}
