import { Action } from '@ngrx/store';
import { User } from '../models/user';
import { AppActions } from '../app.actions';

export const loginReducers = {
    user
};

function user(state: User, action: Action) {
    switch (action.type) {
        case AppActions.LOG_IN:
            return action.payload;
        case AppActions.LOG_OUT:
            return null;
        default:
            return state;
    }
}
