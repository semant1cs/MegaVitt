import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import Role from './entities/role.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import User from 'src/user/entities/user.entity';
import UserRole from './entities/user-role.entity';

@Module({
  imports: [SequelizeModule.forFeature([Role, User, UserRole])],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
