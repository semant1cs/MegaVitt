import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ZodValidationPipe } from 'nestjs-zod';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get('APP_PORT') || 3001;
  const config = new DocumentBuilder().setTitle('Mega Vitt API').setVersion('0.1').build();
  const document = SwaggerModule.createDocument(app, config);

  app.useGlobalPipes(new ZodValidationPipe()).enableCors();
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(PORT, () => console.log(`SWAGGER AVAILABLE ON http://localhost:${PORT}/api/docs/`));
}
bootstrap();
