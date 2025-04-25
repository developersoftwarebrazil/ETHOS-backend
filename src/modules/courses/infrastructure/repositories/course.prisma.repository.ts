import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/prisma.service';
import { CourseRepository } from '../../domain/repositories/course.repository';
import { Course } from '../../domain/entities/course.entity';
@Injectable()
export class CoursePrismaRepository implements CourseRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(course: Course): Promise<Course> {
    return this.prisma.course.create({
      data: {
        id: course.id,
        name: course.name,
        description: course.description,
      },
    });
  }

  async findAll(): Promise<Course[]> {
    return this.prisma.course.findMany();
  }
 async findById(id: string): Promise<Course | null> {
    return this.prisma.course.findUnique({ where: { id } });
  }

  async update(id: string, course: Partial<Course>): Promise<Course> {
    return this.prisma.course.update({
      where: { id },
      data: course,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.course.delete({ where: { id } });
  }
}
