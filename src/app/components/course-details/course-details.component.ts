import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  // constructor(private _router: Router){}
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  private _courseService = inject(CourseService);
  courseList = [];

  courseIds: string[] = [];
  courseId: number;
  ngOnInit() {
    this.getCourseDetails();
    this._activatedRoute.paramMap.subscribe((params) => {
      if (params) {
        this.courseId = parseInt(params.get('id'));
      }
    });
    // this.courseIds = Object.keys(this.courseList[0]);
    // console.log(this.courseIds);
  }

  getCourseDetails() {
    this._courseService.courseNames().subscribe({
      next: (res: any) => {
        this.courseList = res;
        this.courseIds = Object.keys(this.courseList[0]);
      },
      error: (err: any) => {
        console.error('Error while getting Courses: ', err);
      },
    });
  }
  onSelect(course: any) {
    this._router.navigate(['/selectedCourse', JSON.stringify(course)]);
  }
}
