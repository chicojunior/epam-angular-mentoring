import { Component, OnInit, Input } from '@angular/core';

import { ICourse } from '@app-common/course.interface';
import { MESSAGES } from '@app-common/constants/course.constants';

import { CourseService } from '@app-common/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @Input() courses: ICourse[];

  public noDataMessage = MESSAGES.NO_DATA_MESSAGE;

  constructor(private courseService: CourseService) { }

  ngOnInit() {}

  deleteCourse(courseId: string) {
    this.courseService
      .deleteCourse(this.courses, courseId)
      .subscribe(res => {
        if (res) {
          this.courses = res;
        }
      });
  }

  loadMore(evt: MouseEvent) {
    evt.preventDefault();
    console.log(evt);
  }

}
