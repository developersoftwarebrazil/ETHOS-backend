import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config as dotenvConfig } from 'dotenv';

async function bootstrap() {
  // Carrega variáveis de ambiente do .env
  dotenvConfig();

  const app = await NestFactory.create(AppModule);

  // CORS habilitado
  app.enableCors({
    origin: '*', // ou defina uma lista segura como: ['http://localhost:3000']
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('ETHOS API')
    .setDescription('Documentação da API da plataforma ETHOS')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // acessível em /docs

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 Swagger available at http://localhost:${PORT}/docs`);
}
bootstrap();
