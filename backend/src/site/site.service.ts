import { Inject, Injectable } from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { InjectModel } from '@nestjs/sequelize';
import Site from './entities/site.entity';
import { EventService } from '../event/event.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SiteService {
  constructor(
    @InjectModel(Site) private siteModel: typeof Site,
    private eventService: EventService
  ) {}
  public async create(createSiteDto: CreateSiteDto, user: any) {
    const userId = user.id;
    const site_id = uuidv4();
    const event_id = uuidv4();

    const site = await this.siteModel.create({
      id: site_id,
      ownerId: userId,
      name: createSiteDto.name,
      link: createSiteDto.link,
    });

    const event = await this.eventService.create({ id: event_id, name: '' });
    site.$set('event', event);

    return site;
  }

  public async findAll() {
    return await this.siteModel.findAll({ include: { all: true } });
  }

  public findOne(id: number) {
    return `This action returns a #${id} site`;
  }

  public update(id: number, updateSiteDto: UpdateSiteDto) {
    return `This action updates a #${id} site`;
  }

  remove(id: number) {
    return `This action removes a #${id} site`;
  }
}
