import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateSiteDto} from './dto/create-site.dto';
import {InjectModel} from '@nestjs/sequelize';
import Site from './entities/site.entity';
import {EventService} from '../event/event.service';
import {v4 as uuidv4} from 'uuid'
import User from "../user/entities/user.entity";
import * as path from "path";
import * as fs from "fs";
import Event from "../event/entities/event.entity";

@Injectable()
export class SiteService {
  constructor(
    @InjectModel(Site) private _siteRepository: typeof Site,
    private _eventService: EventService
  ) {
  }

  public async create(createSiteDto: CreateSiteDto, user: User) {
    const site_id = uuidv4();
    const event_id = uuidv4();

    const fileName: string = await this.createHtml(createSiteDto.html, user, event_id);

    const site: Site = await this._siteRepository.create({
      owner_id: user.id,
      name: createSiteDto.name,
      build_ref: fileName,
      site_id: site_id
    });


    //const event: Event = await this._eventService.create({name: '', event_id: event_id, site_id: site_id});

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

  public async createHtml(html: string, user: User, siteId: string) {
    const resultHtml: string = `<html><body>${html}</body></html>`
    const filePath: string = path.resolve('src', 'files', user.id, siteId);
    const fileName: string = 'site.html';

    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, {recursive: true});
    }
    fs.writeFileSync(path.join(filePath, fileName), resultHtml)
    return `${user.id}/${siteId}/${fileName}`;
  }
}
