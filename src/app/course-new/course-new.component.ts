import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'course',
  styles: [`
  `],
  template: `
    <h1>Create Course</h1>
    <div>
      Create
    </div>
  `
})
export class CourseNewComponent {
  localState: any;
  constructor(public route: ActivatedRoute) {

  }
}
