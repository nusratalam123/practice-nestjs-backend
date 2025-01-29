import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaClientModule } from '../prisma-client/prisma-client.module';

@Module({
  imports: [PrismaClientModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
