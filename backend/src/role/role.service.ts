import { HttpException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import Role from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleModel: typeof Role) {}
  public async create(createRoleDto: CreateRoleDto) {
    const isRoleExists = (await this.roleModel.findOne({ where: { value: createRoleDto.value } })) !== null;

    if (isRoleExists) throw new HttpException('Такая роль уже существует', 400);
    return await this.roleModel.create(createRoleDto);
  }

  public async getRoleById(id: string) {
    return await this.roleModel.findByPk(id);
  }

  public async getRoleByName(value: string) {
    const role = await this.roleModel.findOne({ where: { value: value } });
    if (!role) throw new HttpException(`Роли с названием ${value} не существет`, 400);
    return role;
  }

  public async getRoles() {
    return await this.roleModel.findAll();
  }
}
