import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  private ITEMS_KEY: string = 'items';

  private items: CourseItem[];

  constructor() {
    if (!!localStorage.getItem(this.ITEMS_KEY)) {
      let items: CourseItem[] = JSON.parse(localStorage.getItem(this.ITEMS_KEY));
      this.items = items;
    }
    else {
       this.items = [
          new CourseItem(1, 'test name 1', 'desc1', new Date(2017, 1, 7), 200, ['Anton', 'Sveta']),
          new CourseItem(2, 'test name 2', 'desc2', new Date(2017, 1, 17), 170, ['Alex', 'Dmitry']),
        ];
    }
   }

  getCourseItems(): CourseItem[]{
    return this.items;
  }

  getCourseItem(id: number): CourseItem{
    return this.items.find(c => c.id === id);
  }

  updateItem(item: CourseItem) {
    let oldItem = this.getCourseItem(item.id);
    let index = this.items.indexOf(oldItem);
    this.items[index] = item;
    localStorage.setItem(this.ITEMS_KEY, JSON.stringify(this.items));
  }

  addItem(item: CourseItem) {
    let lastId = this.items[this.items.length - 1].id;
    item.id = ++lastId;
    this.items.push(item);
    localStorage.setItem(this.ITEMS_KEY, JSON.stringify(this.items));
  }

  deleteCourseItem(id: number){
    let item = this.getCourseItem(id);
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    localStorage.setItem(this.ITEMS_KEY, JSON.stringify(this.items));
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
