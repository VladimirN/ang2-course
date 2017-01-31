import { Injectable, Inject, OnInit, OnDestroy } from '@angular/core';
import { Store, combineReducers } from '@ngrx/store';
import { Subscription } from 'rxjs';

export abstract class PageComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];

    constructor(private _store: Store<any>,
                @Inject('USER_REDUCER') private _reducers: any) {
    }

    ngOnInit() {
        this._store.replaceReducer(combineReducers(this._reducers));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.subscriptions = null;
    }

    protected _subscription(subscription: Subscription) {
        this.subscriptions.push(subscription);
    }

    protected _subscriptions(subscriptions: Subscription[]) {
        this.subscriptions.push(...subscriptions);
    }
}
