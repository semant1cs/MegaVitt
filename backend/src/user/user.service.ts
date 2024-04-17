import { RoleService } from './../role/role.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import Role from 'src/role/entities/role.entity';
import { AddRoleDto } from './dto/add-role.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RoleService
  ) {}

  public async create(dto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByName('user');

    if (role === null) throw new HttpException('Роль обычного пользователя не задана (user)', HttpStatus.BAD_REQUEST);

    return this.setRole(user, role);
  }

  private async setRole(user: User, role: Role) {
    await user.$set('roles', [role.id]);
    user.roles = [role];

    return user;
  }

  private async addRole(user: User, role: Role) {
    await user.$add('roles', [role.id]);
    return user;
  }

  public async giveRole(dto: AddRoleDto) {
    const user = await this.findUserByPK(dto.userId);
    const role = await this.roleService.getRoleByName(dto.value);
    if (role && user) return await this.addRole(user, role);
    throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
  }

  public async findUserByPK(id: string) {
    return this.userRepository.findByPk(id);
  }

  public async findOneById(id: string) {
    const user = await this.userRepository.findOne({ where: { id: id }, include: { all: true } });
    if (!user) throw new HttpException('Пользователя не существует', 400);
    return user;
  }

  public async findOneByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email: email }, include: { all: true } });
    if (user) return user;
  }

  public findAll(): Promise<User[]> {
    return this.userRepository.findAll({ include: { all: true } });
  }
}
