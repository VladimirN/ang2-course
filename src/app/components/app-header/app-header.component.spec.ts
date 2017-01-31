/* tslint:disable:no-unused-variable */
/*
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppHeaderComponent } from './app-header.component';
import { LoginService } from './../../services/login.service';

import { Router } from '@angular/router';
import { Store, Action, combineReducers } from '@ngrx/store';
import { AppActions } from '../../app.actions';
import { AppState } from '../../app.state';
import { PageComponent } from '../../components/page.component';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;
  let loginServiceFake;
  let routerFake;
  let appActions: AppActions;
  let storeFake;

  beforeEach(async(() => {
    loginServiceFake = {
        logout: jasmine.createSpy('')
    };
    routerFake = {
      navigate: jasmine.createSpy('')
    };
    storeFake = {
        select: jasmine.createSpy(''),
        replaceReducer: jasmine.createSpy('')
    };

    TestBed.configureTestingModule({
      declarations: [ AppHeaderComponent ],
       providers: [
                {provide: LoginService, useValue: loginServiceFake},
                {provide: Router, useValue: routerFake},
                AppActions,
                {provide: Store, useValue: storeFake},
                {provide: 'USER_REDUCER', useValue: jasmine.createSpy('')},
            ]
    })
    .overrideComponent(AppHeaderComponent, {
        set: {
            templateUrl: 'app/components/app-header/app-header.component.html'
    }})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
