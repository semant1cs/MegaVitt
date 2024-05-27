import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import Template from './entities/template.entity';

@Module({
  controllers: [TemplateController],
  providers: [TemplateService],
  imports: [SequelizeModule.forFeature([Template])],
})
export class TemplateModule {}
