import { Module, forwardRef } from '@nestjs/common';
import { PresetColorsService } from './preset-colors.service';
import { PresetColorsController } from './preset-colors.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import PresetColor from './entities/preset-color.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [PresetColorsController],
  providers: [PresetColorsService],
  imports: [SequelizeModule.forFeature([PresetColor]), forwardRef(() => UserModule)],
})
export class PresetColorsModule {}
