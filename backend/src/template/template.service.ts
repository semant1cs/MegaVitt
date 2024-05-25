import { Injectable } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import Template from './entities/template.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TemplateService {
  constructor(@InjectModel(Template) private templateModel: typeof Template) {}

  async create(createTemplateDto: CreateTemplateDto) {
    const template = await this.templateModel.create(createTemplateDto);
    return template;
  }

  async findAll() {
    return await this.templateModel.findAll();
  }

  async findOne(id: string) {
    return this.templateModel.findByPk(id);
  }

  async update(id: string, updateTemplateDto: UpdateTemplateDto) {
    await this.templateModel.update(updateTemplateDto, { where: { id } });
    const template = await this.findOne(id);
    return template;
  }

  async remove(id: string) {
    const template = await this.findOne(id);
    await this.templateModel.destroy({ where: { id } });
    return template;
  }
}
