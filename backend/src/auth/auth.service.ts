import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';
import { ForbiddenException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { comparePassword, encodePassword } from 'src/utils/bcrypt';
import Role from 'src/role/entities/role.entity';
import { Request, Response, response } from 'express';
import { ConfigService } from '@nestjs/config';
import User from 'src/user/entities/user.entity';

type JwtPayload = {
  email: string;
  id: string;
  roles: Role[];
};

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  async signIn(signInDto: SignInDto, request: Request, response: Response) {
    const { email, password } = signInDto;
    const user: User = await this.userService.findOneByEmail(email, { exclude: ['roles'], include: { all: true } });

    if (!comparePassword(password, user?.password)) {
      throw new UnauthorizedException();
    }

    const tokens = await this.getTokens(user);

    await this.setTokensCookie(tokens.accessToken, tokens.refreshToken, response);

    response.send({ access_token: tokens.accessToken });
    return { access_token: tokens.accessToken };
  }

  async signUp(signUpDto: SignUpDto, request: Request, response: Response) {
    const { email, password, username } = signUpDto;

    const isUserExists = await this.IsUserExists(email);

    if (isUserExists) {
      throw new HttpException('Пользователь с такой почтой уже существует', 400);
    } else {
      const hashedPassword = encodePassword(password);
      await this.userService.create({ email: email, password: hashedPassword, username: username });
      return { email: email, password: password };
    }
  }

  private async getTokens(user: User) {
    const payload: JwtPayload = { email: user.email, id: user.id, roles: user.roles };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('JWT_SECRET_KEY'),
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('JWT_REFRESH_KEY'),
      }),
    ]);

    return { accessToken, refreshToken };
  }

  private async IsUserExists(email: string) {
    const user = await this.userService.findOneByEmail(email);

    return user !== undefined;
  }

  private async setTokensCookie(accessToken: string, refreshToken: string, response: Response) {
    if (response.cookie) {
      response.cookie('refresh_token', refreshToken);
      response.cookie('Authorization', accessToken);
    }
  }

  async refreshTokens(refreshToken: string, response: Response, request: Request, options: { fromAuth: boolean }) {
    let userInfo: User;

    if (!(refreshToken && request.cookies.Authorization)) {
      throw new HttpException('Перелогиньтесь', 400);
    }

    if (refreshToken === undefined) {
      userInfo = await this.jwtService.verifyAsync(request.cookies.Authorization, {
        secret: this.configService.get('JWT_SECRET_KEY'),
      });
    } else {
      userInfo = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get('JWT_REFRESH_KEY'),
      });
    }

    const user = await this.userService.findOneByEmail(userInfo.email, { include: { all: true }, exclude: ['roles'] });
    const tokens = await this.getTokens(user);

    await this.setTokensCookie(tokens.accessToken, tokens.refreshToken, response);

    if (options.fromAuth) response.send({ access_token: tokens.accessToken });

    return { access_token: tokens.accessToken };
  }

  async getProfileUser(id: string) {
    return await this.userService.findOneById(id, {
      attributes: { exclude: ['password'] },
      include: ['roles', 'presetFonts', 'presetColors', 'sites'],
    });
  }
}
