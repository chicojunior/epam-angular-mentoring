import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICourse } from 'src/app/common/course.interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {

  @Input() course: ICourse;
  @Output() deleteCourse: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  deleteItem(course: ICourse) {
    this.deleteCourse.emit(course.id);
  }

}
