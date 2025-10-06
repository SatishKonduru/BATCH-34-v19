import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  imports: [],
  templateUrl: './selected-course.component.html',
  styleUrl: './selected-course.component.css',
})
export class SelectedCourseComponent implements OnInit {
  myCourse: any;
  private _activatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (p) => (this.myCourse = JSON.parse(p.get('course')))
    );
  }
}
