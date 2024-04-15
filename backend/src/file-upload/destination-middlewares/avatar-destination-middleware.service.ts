import * as fs from 'fs';
import * as path from 'path';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class DynamicAvatarDestinationMiddleware implements NestMiddleware {
  constructor(private _jwtService: JwtService) {
  }

  use(req: any, res: any, next: (error?: any) => void): void {
    const jwtToken: string = (req.headers.authorization as string).split(' ')[1];
    const userId: string = this._jwtService.verify(jwtToken).id;
    const filePath: string = path.resolve('src', 'files', userId);

    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }

    req['dynamicDestination'] = filePath;
    next();
  };
}
