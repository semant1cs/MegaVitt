import { Module, forwardRef } from '@nestjs/common';
import { PresetFontsService } from './preset-fonts.service';
import { PresetFontsController } from './preset-fonts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import PresetFont from './entities/preset-font.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [PresetFontsController],
  providers: [PresetFontsService],
  imports: [SequelizeModule.forFeature([PresetFont]), forwardRef(() => UserModule)],
})
export class PresetFontsModule {}
