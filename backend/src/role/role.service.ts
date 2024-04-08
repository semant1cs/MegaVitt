import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import Role from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}
  public async create(createRoleDto: CreateRoleDto) {
    return await this.roleRepository.create(createRoleDto);
  }
}
