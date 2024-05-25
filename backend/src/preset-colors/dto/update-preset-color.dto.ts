import { PartialType } from '@nestjs/swagger';
import { CreatePresetColorDto } from './create-preset-color.dto';

export class UpdatePresetColorDto extends PartialType(CreatePresetColorDto) {}
