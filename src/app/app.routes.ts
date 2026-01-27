import { computed, Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { DocsComponent } from './components/docs/docs.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { HOME } from '@angular/cdk/keycodes';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { editProfileGuard } from './guards/edit-profile.guard';
import { AboutComponent } from './pages/about/about.component';
import { LetComponent } from './components/let/let.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'createUser',
    loadComponent: () =>
      import('./components/create-user/create-user.component').then(
        (c) => c.CreateUserComponent,
      ),
  },
  {
    path: 'userSearch',
    loadComponent: () =>
      import('./components/user-search/user-search.component').then(
        (c) => c.UserSearchComponent,
      ),
  },
  {
    path: 'allUsers',
    loadComponent: () =>
      import('./components/all-users/all-users.component').then(
        (c) => c.AllUsersComponent,
      ),
  },
  {
    path: 'tdfRegister',
    loadComponent: () =>
      import('./forms/tdf-register/tdf-register.component').then(
        (c) => c.TdfRegisterComponent,
      ),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./components/user/user.component').then((c) => c.UserComponent),
  },
  {
    path: 'userDetails/:id',
    loadComponent: () =>
      import('./components/user-details/user-details.component').then(
        (c) => c.UserDetailsComponent,
      ),
  },
  {
    path: 'let',
    // component: LetComponent
    loadComponent: () =>
      import('./components/let/let.component').then((c) => c.LetComponent),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path: 'courseDetails',
    component: CourseDetailsComponent,
  },
  {
    path: 'courseDetails/:id',
    component: CourseDetailsComponent,
  },
  {
    path: 'docs',
    component: DocsComponent,
  },
  {
    path: 'selectedCourse/:course',
    component: SelectedCourseComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canDeactivate: [editProfileGuard],
  },
  // The following route configuration leads to Eager Loading
  // {
  //   path: 'about',
  //   component: AboutComponent,
  // },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
