import { Injectable } from '@angular/core';
import { Store, Action, combineReducers } from '@ngrx/store';

@Injectable()
export class AppActions {
    static LOG_IN = 'LOG_IN';
    static LOG_OUT = 'LOG_OUT';

    constructor(private _store: Store<any>) {
    }

    dispatch(type: string, payload?: any) {
        this._store.dispatch({
            type,
            payload
        });
    }
}
