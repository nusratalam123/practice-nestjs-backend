import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PostService } from './posts.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('create')
  async createPost(@Body() data: { 
    title: string; 
    content: string; 
    author: { 
      connect: { 
        id: number 
      } 
    }; 
    categories?: string[]; 
    tags?: string[] 
  }) {
    return this.postService.createPost(data);
  }

  @Get('all')
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Get('single/:id')
  async getPostById(@Param('id') id: string) {
    return this.postService.getPostById(Number(id));
  }

  @Put('update/:id')
  async updatePost(@Param('id') id: string, @Body() data: { title?: string; content?: string; isPublished?: boolean }) {
    return this.postService.updatePost(Number(id), data);
  }

  @Delete('delete/:id')
  async deletePost(@Param('id') id: string) {
    return this.postService.deletePost(Number(id));
  }
}
