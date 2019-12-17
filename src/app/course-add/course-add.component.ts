import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '@app-common/course.interface';
import { CourseService } from '@app-common/services';


@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
  public pageTitle = '';
  public course = new Course();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {
    this.course.init();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.pageTitle = 'Edit Course';
        this.courseService
          .getCourseById(params.id)
          .subscribe(res => this.course = res);
      } else {
        this.pageTitle = 'New Course';
      }
    });
  }

  cancel() {
    this.router.navigate(['/courses']);
  }
}
