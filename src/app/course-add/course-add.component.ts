import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '@app-common/services';
import { ICourse } from '@app-common/course.interface';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
  public id: string;
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
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getCourseById();
    }
  }

  getCourseById() {
    this.course = this.courseService.getCourseById(this.id);
  }
}
