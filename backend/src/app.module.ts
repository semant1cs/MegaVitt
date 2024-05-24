import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ParticipantModule } from './participant/participant.module';
import { EventModule } from './event/event.module';
import { TicketModule } from './ticket/ticket.module';
import { SiteModule } from './site/site.module';
import Event from './event/entities/event.entity';
import User from './user/entities/user.entity';
import Ticket from './ticket/entities/ticket.entity';
import Participant from './participant/entities/participant.entity';
import UserRole from './role/entities/user-role.entity';
import Role from './role/entities/role.entity';
import { RoleModule } from './role/role.module';
import Site from './site/entities/site.entity';
import { FileUploadModule } from './file-upload/file-upload.module';
import { DynamicAvatarDestinationMiddleware } from './file-upload/destination-middlewares/avatar-destination-middleware.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        retryAttempts: 3,
        retryDelay: 3000,
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [Event, User, Ticket, Participant, UserRole, Role, Site],
        autoLoadModels: true,
      }),
    }),
    ServeStaticModule.forRoot({ rootPath: path.join(__dirname, '..', 'src', 'files') }),
    UserModule,
    AuthModule,
    ParticipantModule,
    EventModule,
    TicketModule,
    SiteModule,
    RoleModule,
    FileUploadModule,
  ],
  controllers: [],
  providers: [DynamicAvatarDestinationMiddleware],
})
export class AppModule {}
