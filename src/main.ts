import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: JSON.parse(process.env.CORS_ORIGIN),
      methods: 'GET, PUT, POST, DELETE',
      optionsSuccessStatus: 200,
    },
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT);
}
bootstrap();
