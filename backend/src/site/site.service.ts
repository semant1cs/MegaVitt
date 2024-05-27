import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { InjectModel } from '@nestjs/sequelize';
import Site from './entities/site.entity';
import { EventService } from '../event/event.service';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class SiteService {
  constructor(
    @InjectModel(Site) private _siteRepository: typeof Site,
    private _eventService: EventService
  ) {
  }
  public async create(createSiteDto: CreateSiteDto, user: any) {
    const site_id = uuidv4();
    const event_id = uuidv4();
    const site = await this._siteRepository.create({ owner_id: user.sub, event_id: event_id});
    const event = await this._eventService.create({name: '', event_id: event_id, site_id: site_id});

   return site;
  }

  public async findAll() {
    return await this._siteRepository.findAll({include: {all: true}})
  }

  public async findSite(id: number): Promise<Site> {
    const site: Site = await this._siteRepository.findByPk(id);
    if (!site) throw new HttpException('Сайт не найден', HttpStatus.NOT_FOUND)
    return site
  }

  public async updatePreview(site: Site, imagePath: string) {
    return site.update({preview: imagePath})
  }

  remove(id: number) {
    return `This action removes a #${id} site`;
  }
}
