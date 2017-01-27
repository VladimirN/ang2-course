import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BreadcrumbsService {
    private _items: BreadcrumbsItem[] = [];
    public items$: BehaviorSubject<BreadcrumbsItem[]> = new BehaviorSubject<BreadcrumbsItem[]>(this._items);

    addBreadcrumbs(item: BreadcrumbsItem) {
        this._items = [...this._items, item];
        this.items$.next(this._items);
    }

    updateLastBreadcrumbs(item: BreadcrumbsItem) {
        this._items[this._items.length - 1] = item;
        this.items$.next(this._items);
    }

    clearBreadcrumbs() {
        this._items = [];
        this.items$.next(this._items);
    }
}

export class BreadcrumbsItem {
  constructor(public title: string, public link?: string) { }
}
