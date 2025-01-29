import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClientService } from '../prisma-client/prisma-client.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaClientService) {}

  async createPost(data: Prisma.PostCreateInput) {
    return this.prisma.post.create({ data });
  }

  async getAllPosts() {
    return this.prisma.post.findMany({
      include: {
        author: true,
        comments: true,
      },
    });
  }

  async getPostById(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
        comments: true,
      },
    });
  }

  async updatePost(id: number, data: Prisma.PostUpdateInput) {
    return this.prisma.post.update({
      where: { id },
      data,
    });
  }

  async deletePost(id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
