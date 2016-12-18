import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  styles: [`
  `],
  template: `
    <h1>Courses</h1>
    <div>
      List courses
    </div>
  `
})
export class CoursesComponent {
  localState: any;
  constructor(public route: ActivatedRoute) {

  }
}
