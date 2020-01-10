import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { map } from 'rxjs/operators';

import { Course } from '@app-common/course.interface';
import { MESSAGES } from '@app-common/constants/course.constants';

import { CourseService } from '@app-common/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @Input() courses: Course[];
  @Output() courseDelete: EventEmitter<string> = new EventEmitter();

  public noDataMessage = MESSAGES.NO_DATA_MESSAGE;

  constructor(private courseService: CourseService) { }

  ngOnInit() {}

  deleteItem(courseId: string): void {
    this.courseDelete.emit(courseId);
  }

  editCourse(courseId: string) {
    // this.courseService
    //   .deleteCourse(courseId)
    //   .subscribe(res => this.courses = res);
  }

  loadMore(evt: MouseEvent) {
    evt.preventDefault();
    console.log(evt);
  }

}
