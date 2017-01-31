import { Directive, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[only-date]'
})
export class DateDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('keypress', ['$event']) onKeyPress($event) {
      let key = $event.key || String.fromCharCode($event.which);
      let length = this.el.nativeElement.value.length;
      if (length === 2 || length === 5) {
        if (key !== '.') {
            $event.preventDefault();
        }
      }
      else if (length > 9) {
        $event.preventDefault();
      }
      else {
        let regex = /[0-9]|\./;
        if (!regex.test(key)) {
            $event.preventDefault();
        }
      }
  }
}
