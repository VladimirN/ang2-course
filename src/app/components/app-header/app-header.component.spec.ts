import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppHeaderComponent } from './app-header.component';
import { LoginService } from './../../services/login.service';
import { User } from '../../models/user';

import { Router } from '@angular/router';
import { AppActions } from '../../app.actions';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;
  let loginServiceFake;
  let routerFake;
  let appActions: AppActions;

  beforeEach(async(() => {
    loginServiceFake = {
      logout: jasmine.createSpy('')
    };
    routerFake = {
      navigate: jasmine.createSpy('')
    };

    TestBed.configureTestingModule({
      imports: [ StoreModule.provideStore({}) ],
      declarations: [ AppHeaderComponent ],
      providers: [
                {provide: LoginService, useValue: loginServiceFake},
                {provide: Router, useValue: routerFake},
                AppActions,
                {provide: 'USER_REDUCER', useValue: jasmine.createSpy('')},
            ]
    })
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

  it('should bind new user name to span', () => {
    const NEW_USER = 'NEW_USER';
    component.user = new User(NEW_USER);

    fixture.detectChanges();

    expect(getSpan().innerText).toBe(NEW_USER);
  });

  it('should call logout if user click Logout button', () => {
    const NEW_USER = 'NEW_USER';
    component.user = new User(NEW_USER);
    fixture.detectChanges();

    getLogoutButton().dispatchEvent(new Event('click'));

    expect(loginServiceFake.logout).toHaveBeenCalledTimes(1);
  });

  function getSpan() {
    return getByCss('.user-span');
  }

  function getLogoutButton() {
    return getByCss('button');
  }

  function getByCss(selector: string) {
    let element = fixture.debugElement.query(By.css(selector));
    return element && element.nativeElement;
  }
});
