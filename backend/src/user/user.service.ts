import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private UserRepository: typeof User) {}
  async create(dto: CreateUserDto): Promise<User> {
    const newUser = await this.UserRepository.create(dto);
    return newUser;
  }

  async findOneById(id: string): Promise<User> {
    const user = await this.UserRepository.findOne({ where: { id: id } });
    return user;
  }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.UserRepository.findOne({ where: { email: email } });
    return user;
  }

  findAll(): Promise<User[]> {
    const users = this.UserRepository.findAll();
    return users;
  }
}
