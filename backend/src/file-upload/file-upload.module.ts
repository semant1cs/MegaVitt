import {Module} from '@nestjs/common';
import {FileUploadService} from './file-upload.service';
import {FileUploadController} from './file-upload.controller';
import {UserModule} from 'src/user/user.module';
import {SiteModule} from "../site/site.module";

@Module({
  controllers: [FileUploadController],
  providers: [FileUploadService],
  imports: [UserModule, SiteModule],
})
export class FileUploadModule {

}
