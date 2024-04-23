import * as fs from 'fs';
import * as path from 'path';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DynamicAvatarDestinationMiddleware implements NestMiddleware {
  constructor(
    private _jwtService: JwtService,
    private configService: ConfigService
  ) {}

  async use(req: any, res: any, next: (error?: any) => void): Promise<void> {
    const jwtToken: string = req.cookies.Authorization;
    const userId = await this._jwtService.verify(jwtToken, { secret: this.configService.get('JWT_SECRET_KEY') }).id;

    const filePath: string = path.resolve('src', 'files', userId);

    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }

    req['dynamicDestination'] = filePath;
    next();
  }
}
