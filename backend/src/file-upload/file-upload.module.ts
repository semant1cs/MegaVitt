import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { DynamicAvatarDestinationMiddleware } from './destination-middlewares/avatar-destination-middleware.service';

@Module({
  controllers: [FileUploadController],
  providers: [FileUploadService],
})
export class FileUploadModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(DynamicAvatarDestinationMiddleware).forRoutes('file-upload/avatar')
    }
}
