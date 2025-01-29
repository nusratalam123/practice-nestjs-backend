import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { PrismaClientService } from './prisma-client/prisma-client.service';
import { CommentsModule } from './comments/comments.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { ResturantModule } from './resturant/resturant.module';


@Module({
  imports: [PostsModule, CommentsModule, UserModule, AuthModule, ProjectModule, ResturantModule],
  controllers: [],
  providers: [PrismaClientService],
})
export class AppModule {}
