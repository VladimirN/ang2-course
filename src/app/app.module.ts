import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { AppActions } from './app.actions';
import { AppState, InternalStateType } from './app.service';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { LoginComponent } from './pages/login';
import { CoursesComponent } from './pages/courses';
import { CourseDetailComponent } from './pages/course-detail';
import { TimeStampPipePipe } from './pipes/time-stamp.pipe';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { LoggedInGuard } from './guards/logged-in.guard';
import { LoginService } from './services/login.service';
import { CourseService } from './services/course.service';
import { ErrorSummaryComponent } from './components/error-summary/error-summary.component';
import { DateDirective } from './directives/date.directive';

import { StoreModule } from '@ngrx/store';

// Application wide providers
const APP_PROVIDERS = [
  AppState,
  AppActions,
  LoginService,
  CourseService,
  LoggedInGuard
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailComponent,
    LoginComponent,
    TimeStampPipePipe,
    NameFilterPipe,
    ErrorSummaryComponent,
    DateDirective,
    AppHeaderComponent
],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    StoreModule.provideStore({}),
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}

