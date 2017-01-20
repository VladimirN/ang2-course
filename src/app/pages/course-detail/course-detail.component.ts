import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CourseService, CourseItem } from './../../services/course.service';
import { ErrorSummaryComponent, SummaryError } from './../../components/error-summary';
import { Subscription } from 'rxjs';

@Component({
  selector: 'course-detail',
  styles: [`
  `],
  providers: [CourseService, DatePipe],
  template: `
    <h1>Create or Edit Course </h1>

    <error-summary [errors]="formErrors"></error-summary>

    <form novalidate *ngIf="item" [formGroup]="courseForm" (ngSubmit)="onSubmit()">
      <div>
        <label> Title </label>
        <input type="text" formControlName="name" />
      </div>
      <div>
        <label> Description </label>
        <input type="text" formControlName="description" />
      </div>
      <div>
        <label> Date </label>
        <input type="text" formControlName="createDate" only-date />
      </div>
      <div>
        <label> Duration </label>
        <input type="number" #duratoinInput formControlName="duration" />
        <label>{{ duratoinInput.value | timeStampPipe }}</label>
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
      <button (click)="back($event)">Cancel </button>

    </form>
  `
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  item: CourseItem;
  allAuthors: Array<string> = [
      'Miller', 'Brow', 'Smith', 'Johnson', 'Williams'
    ];
  sub: Subscription;
  courseForm: FormGroup;
  formErrors: any;

  constructor(private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private datePipe: DatePipe) {
  }

  ngOnInit(){
    this.courseForm = this.fb.group({});

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
          this.initializeForm();
        }
      );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  initializeForm(){
    let self = this;

    this.courseForm = this.fb.group({
            'id': [
                this.item.id
            ],
            'name': [
                this.item.name,
                [
                    Validators.required
                ]
            ],
            'createDate': [
                this.datePipe.transform(this.item.createDate, 'dd.MM.yyyy'),
                [
                    Validators.required,
                    Validators.pattern('\\d\\d.\\d\\d.\\d\\d\\d\\d')
                ]
            ],
            'description': [
                this.item.description,
                [
                    Validators.required
                ],
            ],
            'duration': [
                this.item.duration,
                [
                    Validators.required,
                    Validators.pattern('[0-9]+')
                ]
            ]
        });
  }

  back($event){
    if (this.courseForm.dirty) {
        if (confirm('Do you want to leave without save?')) {
            this.gotoList();
        }
    }
    else {
        this.gotoList();
    }
    $event.preventDefault();
  }

  gotoList() {
      this.router.navigate(['./courses']);
  }

  onSubmit() {
      this.formErrors = [];

      if (this.courseForm.valid) {
          let item = Object.assign({}, this.item, this.courseForm.value);
          this.courseService.updateItem(item);
          this.gotoList();
      }
      else {
          this.showErrorSummary();
      }

      return false;
  }

  showErrorSummary() {
      // tslint:disable-next-line:forin
      for (let ctrlName in this.courseForm.controls) {
          let ctrl = this.courseForm.controls[ctrlName];
          if (ctrl.errors) {
              this.formErrors.push(new SummaryError(
                  ctrlName,
                  JSON.stringify(ctrl.errors)
              ));
          }
      }
    }
}
