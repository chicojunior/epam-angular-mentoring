import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { ValidateDate } from '@app-common/validators/date.validator';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {

  // courseDate_: Date;
  courseDate: FormControl;

  @Output() courseDateOutput: EventEmitter<Date> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.courseDate = new FormControl('', [Validators.required, ValidateDate]);
  }

  setCourseDate() {
    this.courseDateOutput.emit(new Date(this.courseDate.value));
  }

}
