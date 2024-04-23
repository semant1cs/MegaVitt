import User from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { Public } from '../utils/access';
import { Controller, HttpStatus, Post, HttpCode, Body, Get, Req, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { UserLoginResponse, UserRegisterResponse } from 'contracts';
import { Request, Response } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signIn')
  @HttpCode(HttpStatus.OK)
  @Public()
  signIn(@Body() dto: SignInDto, @Req() request: Request, @Res() response: Response): Promise<UserLoginResponse> {
    return this.authService.signIn(dto, request, response);
  }

  @Post('signUp')
  @HttpCode(HttpStatus.OK)
  @Public()
  signUp(@Body() dto: SignUpDto, @Req() request: Request, response: Response): Promise<UserRegisterResponse> {
    return this.authService.signUp(dto, request, response);
  }

  @Get('profile')
  @ApiBearerAuth()
  getProfile(@Req() req: Request) {
    return req.user;
  }

  @Get('refresh')
  refreshToken(@Req() request: Request, @Res() response: Response) {
    const refreshToken = request.headers.cookie.split(' ')[0].replace('refresh_token=', '');
    if (refreshToken.charAt(-1) === ';') refreshToken.slice(0, -1);

    this.authService.refreshTokens(refreshToken, response, { fromAuth: true });
  }
}
