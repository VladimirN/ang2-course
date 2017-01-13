import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { CoursesComponent } from './courses';
import { CourseNewComponent } from './course-new';
import { CourseEditComponent } from './course-edit';

import { DataResolver } from './app.resolver';

import { LoggedInGuard } from './login/logged-in.guard';


export const ROUTES: Routes = [
  { path: '',      component: CoursesComponent, canActivate: [LoggedInGuard] },
  { path: 'login',  component: LoginComponent },
  { path: 'courses', component: CoursesComponent, canActivate: [LoggedInGuard] },
  { path: 'courses/new', component: CourseNewComponent, canActivate: [LoggedInGuard] },
  { path: 'courses/:id', component: CourseEditComponent, canActivate: [LoggedInGuard] },
  { path: '**',    component: CoursesComponent, canActivate: [LoggedInGuard] },
];
