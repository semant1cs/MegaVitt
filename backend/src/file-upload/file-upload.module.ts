import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { DynamicAvatarDestinationMiddleware } from './destination-middlewares/avatar-destination-middleware.service';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [FileUploadController],
  providers: [FileUploadService],
  imports: [UserModule],
})
export class FileUploadModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DynamicAvatarDestinationMiddleware).forRoutes('file-upload/avatar');
  }
}
