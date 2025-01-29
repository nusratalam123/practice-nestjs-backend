import { Injectable } from '@nestjs/common';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaClientService) {}
 async create(createUserDto: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: createUserDto });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
