import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService, CourseItem } from './../../services/course.service';
import { NameFilterPipe } from './../../pipes/name-filter.pipe';

@Component({
  selector: 'courses',
  styles: [ './courses.component.css' ],
  templateUrl: './courses.component.html',
  providers: [CourseService, NameFilterPipe]
})
export class CoursesComponent {
  items: CourseItem[] = [];
  filteredItems: CourseItem[];
  courseNameFilter: string = '';

  constructor(
    private router: Router,
    private courseService: CourseService,
    private filterPipe: NameFilterPipe) {
  }

  ngOnInit() {
    this.items = this.courseService.getCourseItems();
    this.filteredItems = this.items;
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

  filter(filterValue: string){
    this.filteredItems = this.filterPipe.transform(this.items, filterValue);
  }
}
