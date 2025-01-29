import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientService } from './prisma-client/prisma-client.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaClientService);
  prismaService.enableShutdownHooks(app);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    })
  );

  // // ✅ Set Global Prefix to Avoid Unexpected HTML Pages
  // app.setGlobalPrefix('api'); // Example: All routes will now be /api/...


  // Define the port number
  const port = process.env.PORT || 3000; // Use environment variable or default to 3000

  await app.listen(port);

  // Log the running port
  console.log(`Backend is running on http://localhost:${port}`);
  return app;
}

// Export the app for Vercel
export default bootstrap()
  .then((app) => app.getHttpAdapter().getInstance())
  .catch((err) => console.error(err));