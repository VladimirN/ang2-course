import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService, CourseItem } from './../services/course.service';

@Component({
  selector: 'courses',
  styles: [ './courses.component.css' ],
  templateUrl: './courses.component.html',
  providers: [CourseService]
})
export class CoursesComponent {
  items: CourseItem[] = [];
  constructor(private router: Router, private courseService: CourseService) {
  }

  ngOnInit() {
    this.items = this.courseService.getCourseItems();
  }

  addCourse() {
    this.router.navigate(['./courses/new']);
  }

  editCourse(id: number) {
    this.router.navigate(['./courses/' + id]);
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourseItem(id);
  }
}
