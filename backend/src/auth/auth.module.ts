import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [forwardRef(() => UserModule)],
})
export class AuthModule {}
