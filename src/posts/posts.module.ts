import { Module } from '@nestjs/common';
import { PostService } from './posts.service';
import { PostController } from './posts.controller';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';

@Module({

  controllers: [PostController],
  providers: [PostService,PrismaClientService],
})
export class PostsModule {}
