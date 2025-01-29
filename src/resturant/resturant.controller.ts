import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResturantService } from './resturant.service';
import {  CreateRestaurantDto } from './dto/create-resturant.dto';
import { UpdateResturantDto } from './dto/update-resturant.dto';
import { Prisma } from '@prisma/client';

@Controller('resturant')
export class ResturantController {
  constructor(private readonly resturantService: ResturantService) {}

  @Post('create')
  create(@Body() createResturantDto: CreateRestaurantDto) {
    const resData=this.resturantService.create(createResturantDto);
    console.log("controllerData",resData);
    return resData;
  }

  @Get()
  findAll() {
    return this.resturantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resturantService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResturantDto: UpdateResturantDto) {
    return this.resturantService.update(+id, updateResturantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resturantService.remove(+id);
  }
}
