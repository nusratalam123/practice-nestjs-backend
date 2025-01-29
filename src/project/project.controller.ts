import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Prisma } from '@prisma/client';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('create')
  create(@Body() data: Prisma.ProjectCreateInput) {

    return this.projectService.create(data);
  }

  @Get('all')
  findAll() {
    return this.projectService.findAll();
  }

  @Get('single/:id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  }

  @Get('active-project')
  getActiveProject() {
    return this.projectService.findActiveProjects();
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(+id);
  }
}
