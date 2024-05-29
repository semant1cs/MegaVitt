import { Injectable } from '@nestjs/common';
import { CreatePresetFontDto } from './dto/create-preset-font.dto';
import { UpdatePresetFontDto } from './dto/update-preset-font.dto';
import { InjectModel } from '@nestjs/sequelize';
import PresetFont from './entities/preset-font.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PresetFontsService {
  constructor(
    @InjectModel(PresetFont) private presetFontModel: typeof PresetFont,
    private userService: UserService
  ) {}
  async create(createPresetFontDto: CreatePresetFontDto, request) {
    const userId = request.user.id;
    const user = await this.userService.findOneById(userId, {
      attributes: { exclude: ['password'] },
      include: ['roles', 'presetFonts'],
    });
    const presetFont = await this.presetFontModel.create(createPresetFontDto);

    user.$add('presetFonts', presetFont);

    presetFont.userId = userId;
    presetFont.save();

    return presetFont;
  }

  async findAll() {
    return await this.presetFontModel.findAll();
  }

  async findOne(id: string) {
    return this.presetFontModel.findByPk(id);
  }

  async update(id: string, updatePresetFontDto: UpdatePresetFontDto) {
    await this.presetFontModel.update(updatePresetFontDto, { where: { id } });
    const presetFont = await this.findOne(id);
    return presetFont;
  }

  async remove(id: string) {
    const presetFont = await this.findOne(id);
    const countRemoved = await this.presetFontModel.destroy({ where: { id } });
    if (countRemoved !== 0) return presetFont;
  }
}
