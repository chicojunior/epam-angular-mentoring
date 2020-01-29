import {Component, OnInit, EventEmitter, Output, forwardRef, HostBinding, Input, OnChanges} from '@angular/core';
import { FormControl, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { ValidateDate } from '@app-common/validators/date.validator';

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

  onChange = (date: string) => {};
  onTauched = () => {};

  constructor() { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTauched = fn;
  }

  writeValue(date: string): void {
    this.value = date;
    this.onChange(this.value);
  }

  valueChange(value: string) {
    this.writeValue(value);
  }
}
