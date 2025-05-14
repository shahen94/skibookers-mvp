import { Logger, ShutdownSignal, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

// ─────────────────────────────────────────────────────────────────────────────

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);
  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.enableShutdownHooks([
    ShutdownSignal.SIGINT,
    ShutdownSignal.SIGTERM,
    ShutdownSignal.SIGQUIT,
  ]);

  const port = process.env.PORT || 3000;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
