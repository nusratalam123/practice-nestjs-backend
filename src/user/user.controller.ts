import { Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.userService.create(createUserDto);
  }

  @Get('all')
  findAll() {
    return this.userService.findAll();
  }

  @Get('single/:id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: Prisma.UserUpdateInput) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
