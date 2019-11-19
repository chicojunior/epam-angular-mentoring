import { Directive, ElementRef, Input, AfterViewInit, Renderer2 } from '@angular/core';

import * as moment from 'moment';

@Directive({
  selector: '[appBorderHighlight]'
})
export class BorderHighlightDirective implements AfterViewInit {

  @Input('appBorderHighlight') creationDate: Date;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.setBoderColor();
  }

  setBoderColor() {
    const diffBetweenDays = this.getDaysDiff();

    if (diffBetweenDays <= 0 && diffBetweenDays >= -14 ) {
      this.renderer.addClass(this.el.nativeElement, 'course-status--fresh');
    } else if (diffBetweenDays > 0) {
      this.renderer.addClass(this.el.nativeElement, 'course-status--upcoming');
    }
  }

  getDaysDiff(): number {
    const today = moment().startOf('day');
    const cDate = moment(this.creationDate, 'YYYY-MM-DD');
    return Math.floor(moment.duration(cDate.diff(today)).asDays());
  }

}
