import { PartialType } from '@nestjs/swagger';
import { CreatePresetFontDto } from './create-preset-font.dto';

export class UpdatePresetFontDto extends PartialType(CreatePresetFontDto) {}
