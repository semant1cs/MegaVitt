import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from '../utils/access/guards/auth.guard';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => PassportModule),
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '30m' },
      secret: process.env.SECRET_JWT_KEY,
    }),
    ConfigModule,
  ],
  exports: [AuthService],
})
export class AuthModule {}
