import { Injectable } from '@nestjs/common';
import { CreatePresetFontDto } from './dto/create-preset-font.dto';
import { UpdatePresetFontDto } from './dto/update-preset-font.dto';

@Injectable()
export class PresetFontsService {
  create(createPresetFontDto: CreatePresetFontDto) {
    return 'This action adds a new presetFont';
  }

  findAll() {
    return `This action returns all presetFonts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} presetFont`;
  }

  update(id: number, updatePresetFontDto: UpdatePresetFontDto) {
    return `This action updates a #${id} presetFont`;
  }

  remove(id: number) {
    return `This action removes a #${id} presetFont`;
  }
}
