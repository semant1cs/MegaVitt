import { Module } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import Site from './entities/site.entity';
import User from '../user/entities/user.entity';
import { EventModule } from '../event/event.module';

@Module({
  controllers: [SiteController],
  imports: [SequelizeModule.forFeature([Site, User]), EventModule],
  providers: [SiteService],
})
export class SiteModule {}
