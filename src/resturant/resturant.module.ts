import { Module } from '@nestjs/common';
import { ResturantService } from './resturant.service';
import { ResturantController } from './resturant.controller';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';

@Module({
  controllers: [ResturantController],
  providers: [ResturantService,PrismaClientService],
})
export class ResturantModule {}
