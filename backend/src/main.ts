import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.APP_PORT || 3001;

  const config = new DocumentBuilder()
    .setTitle('Mega Vitt API')
    .setDescription('API для веб-сервиса по созданию мероприятий')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(PORT, () => {
    console.log(`SWAGGER AVAILABLE ON http://localhost:${PORT}/api/docs/`);
  });
}
bootstrap();
