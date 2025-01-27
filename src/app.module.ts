import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { PrismaClientService } from './prisma-client/prisma-client.service';

@Module({
  imports: [PostsModule],
  controllers: [],
  providers: [PrismaClientService],
})
export class AppModule {}
