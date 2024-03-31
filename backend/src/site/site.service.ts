import { Injectable } from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';

@Injectable()
export class SiteService {
  public create(createSiteDto: CreateSiteDto) {
    return 'This action adds a new site';
  }

  public  findAll() {
    return `This action returns all site`;
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
