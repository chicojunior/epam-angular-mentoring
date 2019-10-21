import { Component, OnInit } from '@angular/core';

import { ICourse } from '../../common/course.interface';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})

export class CoursePageComponent implements OnInit {

  courses: ICourse[] = [];

  constructor() { }

  ngOnInit() {
  }

}
