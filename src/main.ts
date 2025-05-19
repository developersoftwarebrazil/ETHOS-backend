// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

export async function createNestApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  await app.init(); // importante no contexto serverless
  return app;
}

if (require.main === module) {
  createNestApp().then((app) => {
    app.listen(3000, () => {
      console.log('🚀 Application is running on http://localhost:3000');
    });
  });
}
