import User from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { Controller, HttpStatus, Post, HttpCode, Body, Get, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UserLoginResponse, UserRegisterResponse } from 'contracts';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @Public()
  login(@Body() dto: LoginDto): Promise<UserLoginResponse> {
    return this.authService.Login(dto);
  }

  @Post('signIn')
  @HttpCode(HttpStatus.OK)
  @Public()
  signIn(@Body() dto: SignInDto): Promise<UserRegisterResponse> {
    return this.authService.SignIn(dto);
  }

  @Get('profile')
  @ApiBearerAuth()
  getProfile(@Request() req): Promise<User> {
    return req.user;
  }
}
