import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';
import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { comparePassword, encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;
    const user = await this.userService.findOneByEmail(email);

    if (!comparePassword(password, user?.password)) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.email, id: user.id, roles: user.roles };
    const access_token = await this.jwtService.signAsync(payload);

    return { access_token: access_token };
  }

  async signUp(signUpDto: SignUpDto) {
    const { email, password, username } = signUpDto;

    const isUserExists = await this.IsUserExists(email);

    if (isUserExists) {
      throw new HttpException('Пользователь с такой почтой уже существует', 400);
    } else {
      const hashedPassword = encodePassword(password);
      await this.userService.create({ email: email, password: hashedPassword, username: username });
      return this.signIn({ email: email, password: password });
    }
  }

  private async IsUserExists(email: string) {
    const user = await this.userService.findOneByEmail(email);

    return user !== undefined;
  }
}
