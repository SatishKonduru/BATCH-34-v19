import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    RouterModule,
    CourseDetailsComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  showDetails = signal(false);
}
