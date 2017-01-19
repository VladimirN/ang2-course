// import { createSelector } from 'reselect';
// import { ActionReducer } from '@ngrx/store';
// import { environment } from '../../environments/environment';
// import { Course } from '../models/course';

// import { compose } from '@ngrx/core/compose';
// import { storeFreeze } from 'ngrx-store-freeze';
// import { combineReducers } from '@ngrx/store';

// import * as fromCourses from './courses';

// export interface State {
//   books: fromCourses.State;
// }

// const reducers = {
//   books: fromCourses.reducer,
// };

// const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
// const productionReducer: ActionReducer<State> = combineReducers(reducers);

// export function reducer(state: any, action: any) {
//   if (environment.production) {
//     return productionReducer(state, action);
//   }
//   else {
//     return developmentReducer(state, action);
//   }
// }

// export const getCoursesState = (state: State) => state.courses;

//  export const getCourseEntities = createSelector(getCoursesState, fromCourses.getEntities);
//  export const getCourseIds = createSelector(getCoursesState, fromCourses.getIds);
//  export const getSelectedCourseId = createSelector(getCoursesState, fromCourses.getSelectedId);
//  export const getSelectedCourse = createSelector(getCoursesState, fromCourses.getSelected);
