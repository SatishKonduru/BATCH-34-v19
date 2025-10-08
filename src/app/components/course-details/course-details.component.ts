import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  courseList = [
    { id: 1, name: 'Angular', tutor: 'Satish' },
    { id: 2, name: 'React', tutor: 'RSK' },
    { id: 3, name: 'Angular Materail', tutor: 'Satish Konduru' },
    { id: 4, name: 'Bootstrap', tutor: 'Renu' },
    { id: 5, name: 'NodeJS', tutor: 'Nagesh' },
  ];

  courseIds: string[] = [];
  courseId: number;
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params) => {
      if (params) {
        this.courseId = parseInt(params.get('id'));
      }
    });
    this.courseIds = Object.keys(this.courseList[0]);
    console.log(this.courseIds);
  }

  onSelect(course: any) {
    this._router.navigate(['/selectedCourse', JSON.stringify(course)]);
  }
}
