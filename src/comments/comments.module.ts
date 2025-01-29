import { Module } from '@nestjs/common';
import {  CommentService } from './comments.service';
import { CommentController } from './comments.controller';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';

@Module({
  controllers: [CommentController],
  providers: [CommentService, PrismaClientService],
})
export class CommentsModule {}
