import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service'; 

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaClientService) {}

  // Create a new comment
  async createComment(data: Prisma.CommentCreateInput) {
  return this.prisma.comment.create({data});
}

  // Fetch all comments for a post
  async getComments() {
    return this.prisma.comment.findMany({});
  }
}
