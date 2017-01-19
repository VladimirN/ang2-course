import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  private items: CourseItem[] = [
      new CourseItem(1, 'test name 1', 'desc1', new Date(2017, 1, 7), 200, ['A1', 'A2']),
      new CourseItem(2, 'test name 2', 'desc2', new Date(2017, 1, 17), 170, ['A3', 'A4']),
    ];

  constructor() { }

  getCourseItems(): CourseItem[]{
    return this.items;
  }

  getCourseItem(id: number): CourseItem{
    return this.items.find(c => c.id === id);
  }

  deleteCourseItem(id: number){
    let item = this.items.find(c => c.id === id);
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}

export class CourseItem {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public createDate: Date,
    public duration: number,
    public authors: Array<string>
    ) { }
}
