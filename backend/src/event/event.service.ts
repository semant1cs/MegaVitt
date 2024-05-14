import { HttpException, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import Event from './entities/event.entity';
import { InjectModel } from '@nestjs/sequelize';
import { raw } from 'express';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private eventModel: typeof Event) {}
  public async create(createEventDto: CreateEventDto) {
    const newEvent = await this.eventModel.create(createEventDto);
    return newEvent;
  }

  public async findAll() {
    return await this.eventModel.findAll();
  }

  public async findOne(id: string) {
    return await this.eventModel.findByPk(id);
  }

  public update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  public async remove(id: string) {
    const event = await this.findOne(id);
    if (!event) throw new HttpException('Мероприятие не найдено', 400);
    await this.eventModel.destroy({ where: { id } });
    return event;
  }
}
