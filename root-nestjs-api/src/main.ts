import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.port;

  app.setGlobalPrefix('api');
  await app.listen(PORT || 3000, () => {
    console.log(`Running on PORT ${PORT || 3000}`);
  });
}
bootstrap();
