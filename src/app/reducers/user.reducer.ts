import { ActionReducer, Action } from '@ngrx/store';
import { User } from '../models/user';
import { AppActions } from '../app.actions';

export function userReducer(state: User = null, action: Action) {
    switch (action.type) {
        case AppActions.LOG_IN:
            return action.payload;
        case AppActions.LOG_OUT:
            return null;
        default:
            return state;
    }
}
