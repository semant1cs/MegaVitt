import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PresetColorsService } from './preset-colors.service';
import { CreatePresetColorDto } from './dto/create-preset-color.dto';
import { UpdatePresetColorDto } from './dto/update-preset-color.dto';

@Controller('preset-colors')
export class PresetColorsController {
  constructor(private readonly presetColorsService: PresetColorsService) {}

  @Post()
  create(@Body() createPresetColorDto: CreatePresetColorDto) {
    return this.presetColorsService.create(createPresetColorDto);
  }

  @Get()
  findAll() {
    return this.presetColorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presetColorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePresetColorDto: UpdatePresetColorDto) {
    return this.presetColorsService.update(+id, updatePresetColorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presetColorsService.remove(+id);
  }
}
