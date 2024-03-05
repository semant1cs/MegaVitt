import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

interface LoginAttributes {
  body: { email: string; password: string };
}

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('auth/login')
  async login(@Request() req: LoginAttributes) {
    return this.authService.login(req.body);
  }
}
