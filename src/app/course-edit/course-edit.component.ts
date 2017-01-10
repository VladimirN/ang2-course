import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'course',
  styles: [`
  `],
  template: `
    <h1>Edit Course</h1>
    <div>
      Edit
    </div>
  `
})
export class CourseEditComponent {
  localState: any;
  constructor(public route: ActivatedRoute) {

  }
}
