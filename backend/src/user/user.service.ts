import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private UserRepository: typeof User) {}
  async findOne(email: string) {}

  async create(dto: CreateUserDto) {
    const newUser = this.UserRepository.create(dto);
    return newUser;
  }
}
