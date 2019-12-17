import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICourse } from '@app-common/course.interface';
import { CourseService } from '@app-common/services';


@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
  public pageTitle = '';
  public course: ICourse = {
    id: '',
    title: '',
    creationDate: new Date(),
    duration: 0,
    description: '',
    topRated: false
  };

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.pageTitle = 'Edit Course';
        this.course = this.courseService.getCourseById(params.id);
      } else {
        this.pageTitle = 'New Course';
      }
    });
  }
}
