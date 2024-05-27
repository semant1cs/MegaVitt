import { ApiProperty } from '@nestjs/swagger';

export class CreatePresetFontDto {
  @ApiProperty({ example: 'Мой шрифтик', description: 'Название пресета шрифта' })
  readonly name: string;

  @ApiProperty({ example: 'Times New Roman', description: ' Название шрифта' })
  readonly fontName: string;
}
