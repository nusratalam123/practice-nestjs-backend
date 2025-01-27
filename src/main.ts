import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientService } from './prisma-client/prisma-client.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaClientService);
  prismaService.enableShutdownHooks(app);
 // Define the port number
 const port = process.env.PORT || 3000; // Use environment variable or default to 3000

 await app.listen(port);

 // Log the running port
 console.log(`Backend is running on http://localhost:${port}`);
}
bootstrap();
