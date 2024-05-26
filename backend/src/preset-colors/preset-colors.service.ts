import { Injectable } from '@nestjs/common';
import { CreatePresetColorDto } from './dto/create-preset-color.dto';
import { UpdatePresetColorDto } from './dto/update-preset-color.dto';
import { InjectModel } from '@nestjs/sequelize';
import PresetColor from './entities/preset-color.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PresetColorsService {
  constructor(
    @InjectModel(PresetColor) private presetColorModel: typeof PresetColor,
    private userService: UserService
  ) {}

  async create(createPresetFontDto: CreatePresetColorDto, request) {
    const userId = request.user.id;
    const user = await this.userService.findOneById(userId, {
      attributes: { exclude: ['password'] },
      include: ['roles', 'presetColors'],
    });
    const presetColor = await this.presetColorModel.create(createPresetFontDto);

    user.$add('presetColors', presetColor);

    presetColor.userId = userId;
    presetColor.save();

    return presetColor;
  }

  async findAll() {
    return await this.presetColorModel.findAll();
  }

  async findOne(id: string) {
    return this.presetColorModel.findByPk(id);
  }

  async update(id: string, updatePresetColorDto: UpdatePresetColorDto) {
    await this.presetColorModel.update(updatePresetColorDto, { where: { id } });
    const presetColor = await this.findOne(id);
    return presetColor;
  }

  async remove(id: string) {
    const presetColor = await this.findOne(id);
    const countRemoved = await this.presetColorModel.destroy({ where: { id } });
    if (countRemoved !== 0) return presetColor;
  }
}
