import { LoginDto } from './dto/login.dto';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';
import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import User from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async Login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userService.findOneByEmail(email);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async SignIn(signInDto: SignInDto) {
    const { email, password, username } = signInDto;

    if (await this.IsUserExists(email)) {
      console.log(1);
      throw new HttpException('Пользователь с такой почтой уже существует', 400);
    } else {
      console.log(2);
      await this.userService.create({ email: email, password: password, username: username });
      return this.Login({ email: email, password: password });
    }
  }

  private async IsUserExists(email: string) {
    const user = await this.userService.findOneByEmail(email);

    return user !== undefined;
  }
}
