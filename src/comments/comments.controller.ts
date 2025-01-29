import { Controller, Post, Body,  Get, UseGuards } from '@nestjs/common';
import { CommentService } from './comments.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createComment(@Body() data: Prisma.CommentCreateInput) {
    return this.commentService.createComment(data);
  }

  @Get('all')
  async getComments() {
    return this.commentService.getComments();
  }
}
