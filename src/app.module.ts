import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { ClassroomsModule } from './classrooms/classrooms.module';
import { VideosModule } from './videos/videos.module';

@Module({
  imports: [CoursesModule, EnrollmentsModule, ClassroomsModule, VideosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
