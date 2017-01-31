/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import { BreadcrumbsService, BreadcrumbsItem } from './../../services/breadcrumbs.service';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;
  let breadcrumbsService: BreadcrumbsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsComponent ],
       providers: [ BreadcrumbsService ]
    })
    .compileComponents();
  }));

  beforeEach(inject([BreadcrumbsService], (service: BreadcrumbsService) => {
        breadcrumbsService = service;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should show link if there is link set', () => {
    let title = 'Title';
    let link = 'Link';
    breadcrumbsService.addBreadcrumbs(new BreadcrumbsItem(title, link));

    fixture.detectChanges();
    expect(getByCss('span a').innerText).toBe(title);
    expect(getByCss('span a').pathname).toBe('/' + link);
  });

  it('should don`t show link if there is no link', () => {
    let title = 'Title';
    breadcrumbsService.addBreadcrumbs(new BreadcrumbsItem(title));

    fixture.detectChanges();
    expect(getByCss('span div').innerText).toBe(title);
    expect(getByCss('span a')).toBeNull();
  });

  function getByCss(selector: string) {
    let element = fixture.debugElement.query(By.css(selector));
    return element && element.nativeElement;
  }
});
