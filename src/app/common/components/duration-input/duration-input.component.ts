import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {

  courseDuration: number;

  @Output() courseDurationOutput: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  setCourseDuration() {
    this.courseDurationOutput.emit(this.courseDuration);
  }
}
