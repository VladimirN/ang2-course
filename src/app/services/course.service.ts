import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  constructor() { }

  getCourseItems(): CourseItem[]{
    return [
      new CourseItem('test name 1', new Date(2017, 1, 7), 200, ['A1', 'A2']),
      new CourseItem('test name 2', new Date(2017, 1, 17), 170, ['A3', 'A4']),
    ];
  }
}

export class CourseItem {
  constructor(
    public name: string,
    public createDate: Date,
    public duration: number,
    public authors: Array<string>
    ) { }
}
