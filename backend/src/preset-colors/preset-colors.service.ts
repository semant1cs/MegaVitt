import { Injectable } from '@nestjs/common';
import { CreatePresetColorDto } from './dto/create-preset-color.dto';
import { UpdatePresetColorDto } from './dto/update-preset-color.dto';

@Injectable()
export class PresetColorsService {
  create(createPresetColorDto: CreatePresetColorDto) {
    return 'This action adds a new presetColor';
  }

  findAll() {
    return `This action returns all presetColors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} presetColor`;
  }

  update(id: number, updatePresetColorDto: UpdatePresetColorDto) {
    return `This action updates a #${id} presetColor`;
  }

  remove(id: number) {
    return `This action removes a #${id} presetColor`;
  }
}
