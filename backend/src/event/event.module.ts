import { forwardRef, Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import Event from './entities/event.entity';


@Module({
  controllers: [EventController],
  imports: [SequelizeModule.forFeature([Event])],
  providers: [EventService],
  exports: [EventService]
})
export class EventModule {}
