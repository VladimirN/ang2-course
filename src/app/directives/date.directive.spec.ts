/* tslint:disable:no-unused-variable */
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed, fakeAsync, async, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DateDirective } from './date.directive';
import { Component } from '@angular/core';

@Component({
    template: `
        <input type="text" [value]="itemName" only-date />
    `
})
class TestHostComponent {
    itemName: string = '01.01.2000';
}

describe('Directive: Date', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostInstance: TestHostComponent;
  const defaultValue = '01.01.2000';

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [TestHostComponent, DateDirective]
      }).compileComponents();
  }));

  beforeEach(async(() => {
      fixture = TestBed.createComponent(TestHostComponent);
      hostInstance = fixture.componentInstance;
      fixture.detectChanges();
  }));

  it('should create an instance', () => {
    let directive = new DateDirective(null);
    expect(directive).toBeTruthy();
  });

  it('should show default itemName in textbox', () => {
    expect(getInput().value).toBe(defaultValue);
  });

  it('should allow digit keys for 1 place', () => {
      hostInstance.itemName = '';
      let element = getInput();
      fixture.detectChanges();

      let cancelled = !element.dispatchEvent(new KeyboardEvent('keypress', { key: '1', cancelable: true }));
      expect(cancelled).toBeFalsy();

      cancelled = !element.dispatchEvent(new KeyboardEvent('keypress', { key: 'Q', cancelable: true }));
      expect(cancelled).toBeTruthy();
  });

  it('should allow digit keys for 2 place', () => {
      hostInstance.itemName = '1';
      let element = getInput();
      fixture.detectChanges();

      let cancelled = !element.dispatchEvent(new KeyboardEvent('keypress', { key: '8', cancelable: true }));
      expect(cancelled).toBeFalsy();

      cancelled = !element.dispatchEvent(new KeyboardEvent('keypress', { key: 'A', cancelable: true }));
      expect(cancelled).toBeTruthy();
  });


  it('should allow . key for 3 place', () => {
      hostInstance.itemName = '12';
      let element = getInput();
      fixture.detectChanges();

      let cancelled = !element.dispatchEvent(new KeyboardEvent('keypress', { key: '.', cancelable: true }));
      expect(cancelled).toBeFalsy();

      cancelled = !element.dispatchEvent(new KeyboardEvent('keypress', { key: '2', cancelable: true }));
      expect(cancelled).toBeTruthy();
  });


  function getInput() {
      return getByCss('input');
  }

  function getByCss(selector: string) {
    let element = fixture.debugElement.query(By.css(selector));
    return element && element.nativeElement;
  }
});
