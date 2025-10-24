import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent implements OnInit {
  courseList = [];
  // constructor(private _courseService: CourseService) {}
  private _courseService = inject(CourseService);
  ngOnInit(): void {
    this.getCourseNames();
  }

  getCourseNames() {
    this._courseService.courseNames().subscribe({
      next: (res: any) => {
        this.courseList = res;
      },
      error: (err: any) => {
        console.error('Error while getting Courses: ', err);
      },
    });
  }
}
