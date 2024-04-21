import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('participants')
@Controller('participants')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  // @Post()
  // @ApiBearerAuth()
  // create(@Body() createParticipantDto: CreateParticipantDto) {
  //   return this.participantService.create(createParticipantDto);
  // }

  // @Get()
  // findAll() {
  //   return this.participantService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.participantService.findOne(+id);
  // }

  // @Patch(':id')
  // @ApiBearerAuth()
  // update(@Param('id') id: string, @Body() updateParticipantDto: UpdateParticipantDto) {
  //   return this.participantService.update(+id, updateParticipantDto);
  // }

  // @Delete(':id')
  // @ApiBearerAuth()
  // remove(@Param('id') id: string) {
  //   return this.participantService.remove(+id);
  // }
}
