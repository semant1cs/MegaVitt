import { Module } from '@nestjs/common';
import { PresetColorsService } from './preset-colors.service';
import { PresetColorsController } from './preset-colors.controller';

@Module({
  controllers: [PresetColorsController],
  providers: [PresetColorsService],
})
export class PresetColorsModule {}
