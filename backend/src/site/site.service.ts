import { Inject, Injectable } from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { InjectModel } from '@nestjs/sequelize';
import Site from './entities/site.entity';
import { EventService } from '../event/event.service';
import { use } from 'passport';

@Injectable()
export class SiteService {
  constructor(
    @InjectModel(Site) private _siteRepository: typeof Site,
    private _eventService: EventService
  ) {
  }
  public async create(createSiteDto: CreateSiteDto, user: any) {
    console.log({...createSiteDto, owner_id: user.sub});
    const site = await this._siteRepository.create({...createSiteDto, owner_id: user.sub});
    //console.log(site);
   // return site;

  }

  public async findAll() {
    return await this._siteRepository.findAll({include: {all: true}})
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
