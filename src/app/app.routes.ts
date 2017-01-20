import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login';
import { CoursesComponent } from './pages/courses';
import { CourseDetailComponent } from './pages/course-detail';

import { DataResolver } from './app.resolver';

import { LoggedInGuard } from './guards/logged-in.guard';


export const ROUTES: Routes = [
  { path: '',      component: CoursesComponent, canActivate: [LoggedInGuard] },
  { path: 'login',  component: LoginComponent },
  { path: 'courses', component: CoursesComponent, canActivate: [LoggedInGuard] },
  { path: 'courses/:id', component: CourseDetailComponent, canActivate: [LoggedInGuard] },
  { path: '**',    component: CoursesComponent, canActivate: [LoggedInGuard] },
];
