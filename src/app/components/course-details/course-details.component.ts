import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  // constructor(private _router: Router){}
  private _router = inject(Router);
  courseList = [
    { id: 1, name: 'Angular', tutor: 'Satish' },
    { id: 2, name: 'React', tutor: 'RSK' },
    { id: 3, name: 'Angular Materail', tutor: 'Satish Konduru' },
    { id: 4, name: 'Bootstrap', tutor: 'Renu' },
    { id: 5, name: 'NodeJS', tutor: 'Nagesh' },
  ];

  courseIds: string[] = [];
  ngOnInit() {
    this.courseIds = Object.keys(this.courseList[0]);
    console.log(this.courseIds);
  }

  onSelect(course: any) {
    this._router.navigate(['/selectedCourse', JSON.stringify(course)]);
  }
}
