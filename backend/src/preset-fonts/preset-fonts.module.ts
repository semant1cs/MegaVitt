import { Module } from '@nestjs/common';
import { PresetFontsService } from './preset-fonts.service';
import { PresetFontsController } from './preset-fonts.controller';

@Module({
  controllers: [PresetFontsController],
  providers: [PresetFontsService],
})
export class PresetFontsModule {}
