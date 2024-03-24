import User from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { Controller, HttpStatus, Post, HttpCode, Body, Get, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LogInDto } from './dto/sign-in.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() LogInDto: LogInDto) {
    return this.authService.signIn(LogInDto.email, LogInDto.password);
  }

  @Get('profile')
  getProfile(@Request() req): Promise<User> {
    return req.user;
  }
}
