import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import User from './entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import Role from 'src/role/entities/role.entity';
import UserRole from 'src/role/entities/user-role.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User, Role, UserRole]), forwardRef(() => AuthModule)],
  exports: [UserService],
})
export class UserModule {}
