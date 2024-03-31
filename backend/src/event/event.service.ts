import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import Event from './entities/event.entity';
import { InjectModel } from '@nestjs/sequelize';
import { raw } from 'express';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private _eventRepository: typeof Event) {}
  public async create(createEventDto: CreateEventDto) {
    const newEvent = await this._eventRepository.create(createEventDto);
    return newEvent;
  }

  public async findAll() {
    return await this._eventRepository.findAll();
  }

  public findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  public update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
