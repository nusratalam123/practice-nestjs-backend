import { Injectable } from '@nestjs/common';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaClientService } from '../prisma-client/prisma-client.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectService {

  constructor(private readonly prisma: PrismaClientService) {}
 
  async create(data: Prisma.ProjectCreateInput) {
    console.log(data);
    const result = await this.prisma.project.create({ data:data });
    return result;
  }

  async findAll() {
    return this.prisma.project.findMany();
  }

  async findOne(id: number) {
    return this.prisma.project.findUnique({ where: { id } });
  }

  // findByStatus(status: string) {
  //   return this.prisma.project.findMany({ where: { status } });
  // }

  async findActiveProjects() {
    const result = await this.prisma.project.findMany({
      where: {
        status: 'active',
      },
    })
    return result;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.prisma.project.update({ where: { id }, data: updateProjectDto });
  }

  async remove(id: number) {
    return this.prisma.project.delete({ where: { id } });
  }
}
