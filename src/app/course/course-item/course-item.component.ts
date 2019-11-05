import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from 'src/app/common/course.interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() course: ICourse;
  @Output() deleteCourse: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteItem(course: ICourse) {
    this.deleteCourse.emit(course.id);
  }

}
