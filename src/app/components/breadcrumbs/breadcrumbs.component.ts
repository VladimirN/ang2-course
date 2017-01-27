import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { BreadcrumbsService, BreadcrumbsItem } from './../../services/breadcrumbs.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'breadcrumbs',
  templateUrl: `
        Breadcrumbs:
        <span *ngFor="let item of items$ | async">
          <div *ngIf="item.link">
            <a [href]="item.link">{{item.title}}</a>
          </div>
          <div *ngIf="!item.link">
            {{item.title}}
          </div> >
        </span>
    `
})
export class BreadcrumbsComponent {
    items$: Observable<BreadcrumbsItem[]>;

    constructor(private breadcrumbsService: BreadcrumbsService) {
        this.items$ = breadcrumbsService.items$;
    }
}

