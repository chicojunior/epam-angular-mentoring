import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})
export class DateInputComponent implements ControlValueAccessor {

  @Input() value: string;

  onChange = (dateChanged: string) => {};
  onTouched = () => {};

  constructor() {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(date: string): void {
    this.value = this.formatDate(date);
    this.onChange(this.value);
  }

  valueChange(value: string) {
    this.writeValue(value);
  }

  formatDate(date: string) {
    const mDate = moment(date);
    let formatedDate = date;
    if (mDate.isValid()) {
      formatedDate = mDate.format('DD/MM/YYYY');
    }
    return formatedDate;
  }
}
