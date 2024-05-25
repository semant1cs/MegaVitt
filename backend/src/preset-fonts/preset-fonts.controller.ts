import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PresetFontsService } from './preset-fonts.service';
import { CreatePresetFontDto } from './dto/create-preset-font.dto';
import { UpdatePresetFontDto } from './dto/update-preset-font.dto';

@Controller('preset-fonts')
export class PresetFontsController {
  constructor(private readonly presetFontsService: PresetFontsService) {}

  @Post()
  create(@Body() createPresetFontDto: CreatePresetFontDto) {
    return this.presetFontsService.create(createPresetFontDto);
  }

  @Get()
  findAll() {
    return this.presetFontsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presetFontsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePresetFontDto: UpdatePresetFontDto) {
    return this.presetFontsService.update(+id, updatePresetFontDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presetFontsService.remove(+id);
  }
}
