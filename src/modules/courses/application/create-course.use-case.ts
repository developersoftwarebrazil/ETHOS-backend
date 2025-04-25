import { Injectable } from '@nestjs/common';
import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/entities/course.entity';

@Injectable()
export class CreateCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(name: string, description: string): Promise<Course> {
    const course = new Course(crypto.randomUUID(), name, description);
    return this.courseRepository.create(course);
  }
}
