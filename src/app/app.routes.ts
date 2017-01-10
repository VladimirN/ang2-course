import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { CoursesComponent } from './courses';
import { CourseNewComponent } from './course-new';
import { CourseEditComponent } from './course-edit';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/new', component: CourseNewComponent },
  { path: 'courses/:id', component: CourseEditComponent },
  { path: '**',    component: NoContentComponent },
];
