import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService, CourseItem } from './../services/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'course-detail',
  styles: [`
  `],
  providers: [CourseService],
  template: `
    <h1>Create or Edit Course </h1>
    <form novalidate *ngIf="item">
      <div>
        <label> Title </label>
        <input type="text" name="name" [(ngModel)]="item.name" required />
      </div>
      <div>
        <label> Description </label>
        <input type="text" name="description" [(ngModel)]="item.description" required />
      </div>
      <div>
        <label> Date </label>
        <input type="text" name="createDate" [(ngModel)]="item.createDate" required />
      </div>
      <div>
        <label> Duration </label>
        <input type="text" name="duration" [(ngModel)]="item.duration" required />
        <label>{{item.duration | timeStampPipe}}</label>
      </div>
      <div>
        <label> Authors </label>
        <select size="5">
          <option *ngFor="let author of allAuthors">{{author}}</option>
        </select>
        <div style="display: inline-block;">
          <div>
            <button (click)="add()"> -> </button>
          </div>
          <div>
            <button (click)="delete()"> <- </button>
          </div>
        </div>
        <select size="5">
          <option *ngFor="let author of item.authors">{{author}}</option>
        </select>
      </div>

      <button type="submit">Save </button>
      <button (click)="back()">Cancel </button>

    </form>
  `
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  item: CourseItem;
  allAuthors: Array<string> = [
      'Miller', 'Brow', 'Smith', 'Johnson', 'Williams'
    ];
  sub: Subscription;

  constructor(private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.sub = this.route.params
      .subscribe(params => {
          if (params['id'] === 'new')
          {
            this.item = new CourseItem(0, '', '', null, null, new Array<string>());
          }
          else
          {
            let itemId = +params['id'];
            this.item = this.courseService.getCourseItem(itemId);
          }
        }
      );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
