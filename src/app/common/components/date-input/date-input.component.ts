import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {

  courseDate: Date;

  @Output() courseDateOutput: EventEmitter<Date> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setCourseDate() {
    this.courseDateOutput.emit(new Date(this.courseDate));
  }

}
