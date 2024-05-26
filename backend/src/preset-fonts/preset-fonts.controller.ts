import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { PresetFontsService } from './preset-fonts.service';
import { CreatePresetFontDto } from './dto/create-preset-font.dto';
import { UpdatePresetFontDto } from './dto/update-preset-font.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('preset-fonts')
@ApiTags('presets-fonts')
export class PresetFontsController {
  constructor(private readonly presetFontsService: PresetFontsService) {}

  @Post()
  create(@Body() createPresetFontDto: CreatePresetFontDto, @Req() request) {
    return this.presetFontsService.create(createPresetFontDto, request);
  }

  @Get()
  findAll() {
    return this.presetFontsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presetFontsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePresetFontDto: UpdatePresetFontDto) {
    return this.presetFontsService.update(id, updatePresetFontDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presetFontsService.remove(id);
  }
}
