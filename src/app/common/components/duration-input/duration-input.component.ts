import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {

  @Input() courseDurationInput: number;
  @Output() courseDurationOutput: EventEmitter<number> = new EventEmitter();

  public courseDuration: FormControl;

  constructor() {}

  ngOnInit() {
    console.log(this.courseDurationInput);
    this.courseDuration = new FormControl(this.courseDurationInput, Validators.required);
  }

  setCourseDuration() {
    this.courseDurationOutput.emit(this.courseDuration.value);
  }
}
