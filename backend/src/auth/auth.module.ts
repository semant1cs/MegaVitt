import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => PassportModule),
    JwtModule.register({
      secret: 'asdasdasdsa',
      signOptions: { expiresIn: '24h' },
    }),
  ],
})
export class AuthModule {}
