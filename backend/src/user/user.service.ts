import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private UserRepository: typeof User) {}

  async create(dto: CreateUserDto): Promise<User> {
    return await this.UserRepository.create(dto);
  }

  async findOneById(id: string) {
    const user = await this.UserRepository.findOne({ where: { id: id } });
    if (user) return user;
    throw new HttpException('Пользователя не существует', 400);
  }

  async findOneByEmail(email: string) {
    const user = await this.UserRepository.findOne({ where: { email: email } });
    if (user) return user;
  }

  findAll(): Promise<User[]> {
    return this.UserRepository.findAll();
  }
}
