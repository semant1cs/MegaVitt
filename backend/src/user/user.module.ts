import { Global, Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import User from './entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import Site from '../site/entities/site.entity';
import Role from 'src/role/entities/role.entity';
import UserRole from 'src/role/entities/user-role.entity';
import { RoleModule } from 'src/role/role.module';

@Global()
@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRole, Site]),
    forwardRef(() => AuthModule),
    forwardRef(() => RoleModule),
  ],
  exports: [UserService],
})
export class UserModule {}
