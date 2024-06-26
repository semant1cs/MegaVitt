import User from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { Public } from '../utils/access';
import { Controller, HttpStatus, Post, HttpCode, Body, Get, Req, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { UserLoginResponse, UserRegisterResponse } from 'zod-contracts';
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
  signUp(@Body() dto: SignUpDto, @Req() request: Request, response: Response) {
    return this.authService.signUp(dto, request, response);
  }

  @Get('profile')
  @ApiBearerAuth()
  getProfile(@Req() req: Request) {
    return this.authService.getProfileUser(req.user['id']);
  }

  @Get('refresh')
  refreshToken(@Req() request: Request, @Res() response: Response) {
    const refreshToken = request.cookies.refresh_token;

    this.authService.refreshTokens(refreshToken, response, request, { fromAuth: true });
  }
}
