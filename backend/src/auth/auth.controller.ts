import User from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { Controller, HttpStatus, Post, HttpCode, Body, Get, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { SignInDto } from './dto/sign-in.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @Public()
  login(@Body() logInDto: LoginDto) {
    return this.authService.Login(logInDto);
  }

  @Post('signIn')
  @HttpCode(HttpStatus.OK)
  @Public()
  signIn(@Body() SignInDto: SignInDto) {
    return this.authService.SignIn(SignInDto);
  }

  @Get('profile')
  @ApiBearerAuth()
  getProfile(@Request() req): Promise<User> {
    return req.user;
  }
}
