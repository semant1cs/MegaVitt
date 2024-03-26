import { Module } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import Site from './entities/site.entity';
import User from '../user/entities/user.entity';

@Module({
  controllers: [SiteController],
  imports: [SequelizeModule.forFeature([Site, User])],
  providers: [SiteService],
})
export class SiteModule {}
