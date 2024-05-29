import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import User from './entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import Site from '../site/entities/site.entity';
import Role from 'src/role/entities/role.entity';
import UserRole from 'src/role/entities/user-role.entity';
import { RoleModule } from 'src/role/role.module';
import PresetColor from 'src/preset-colors/entities/preset-color.entity';
import PresetFont from 'src/preset-fonts/entities/preset-font.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRole, Site, PresetFont]),
    forwardRef(() => AuthModule),
    forwardRef(() => RoleModule),
  ],
  exports: [UserService],
})
export class UserModule {}
