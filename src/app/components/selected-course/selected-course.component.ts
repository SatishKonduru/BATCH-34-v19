import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-selected-course',
  imports: [MatButtonModule],
  templateUrl: './selected-course.component.html',
  styleUrl: './selected-course.component.css',
})
export class SelectedCourseComponent implements OnInit {
  myCourse: any;
  private _activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (p) => (this.myCourse = JSON.parse(p.get('course')))
    );
  }
  goBack() {
    this._router.navigate(['/courseDetails', this.myCourse.id]);
  }
}
