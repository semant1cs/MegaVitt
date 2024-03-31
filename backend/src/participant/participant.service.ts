import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';

@Injectable()
export class ParticipantService {
  public create(createParticipantDto: CreateParticipantDto) {
    return 'This action adds a new participant';
  }

  public findAll() {
    return `This action returns all participant`;
  }

  public findOne(id: number) {
    return `This action returns a #${id} participant`;
  }

  public update(id: number, updateParticipantDto: UpdateParticipantDto) {
    return `This action updates a #${id} participant`;
  }

  public remove(id: number) {
    return `This action removes a #${id} participant`;
  }
}
