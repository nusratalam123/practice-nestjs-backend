import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto} from './dto/create-resturant.dto';
import { UpdateResturantDto } from './dto/update-resturant.dto';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ResturantService {

  constructor(private readonly prisma: PrismaClientService) {}
  create(createResturantDto: CreateRestaurantDto) {
    console.log("serviceData",createResturantDto);
    return this.prisma.restaurantTable.create({ data: createResturantDto });
  }

  findAll() {
    return `This action returns all resturant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resturant`;
  }

  update(id: number, updateResturantDto: UpdateResturantDto) {
    return `This action updates a #${id} resturant`;
  }

  remove(id: number) {
    return `This action removes a #${id} resturant`;
  }
}
