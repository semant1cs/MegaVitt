import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { SiteService } from './site.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';

@Controller('sites')
@ApiTags('sites')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  // @Post()
  // @ApiBearerAuth()
  // create(@Body() createSiteDto: CreateSiteDto, @Request() req) {
  //   return this.siteService.create(createSiteDto, req.user);
  // }

  // @Get()
  // findAll() {
  //   return this.siteService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.siteService.findOne(+id);
  // }

  // @Patch(':id')
  // @ApiBearerAuth()
  // update(@Param('id') id: string, @Body() updateSiteDto: UpdateSiteDto) {
  //   return this.siteService.update(+id, updateSiteDto);
  // }

  // @Delete(':id')
  // @ApiBearerAuth()
  // remove(@Param('id') id: string) {
  //   return this.siteService.remove(+id);
  // }
}
