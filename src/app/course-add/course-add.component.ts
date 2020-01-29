import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Course } from '@app-common/course.interface';
import { CourseService } from '@app-common/services';
import { CourseState } from '@app-common/state/course/course.reducer';
import { addCourse, updateCourse } from '@app-common/state/actions';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
  public pageTitle = '';
  public id: string;
  public course: Course = new Course();
  public courseForm: FormGroup;
  public buttonAction = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private store: Store<CourseState>,
    private fb: FormBuilder
  ) {
    this.course.init();
  }

  ngOnInit() {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(500)]]
    });
    this.route.params.subscribe(params => {
      if (params.id) {
        this.pageTitle = 'Edit Course';
        this.id = params.id;
        this.buttonAction = 'Update';
        this.courseService
          .getCourseById(params.id)
          .subscribe(res => (this.course = res));
      } else {
        this.pageTitle = 'New Course';
        this.buttonAction = 'Save';
      }
    });
  }

  submit(): void {
    this.id ? this.updateCourse() : this.saveCourse();
    this.goToCoursesList();
  }

  updateCourse(): void {
    this.store.dispatch(updateCourse({ payload: this.course }));
  }

  saveCourse(): void {
    this.store.dispatch(addCourse({ payload: this.course }));
  }

  cancel() {
    this.goToCoursesList();
  }

  setCourseDuration(duration: number) {
    this.course.duration = duration;
  }

  setCourseDate(courseDate: Date) {
    this.course.creationDate = courseDate;
  }

  private goToCoursesList() {
    this.router.navigate(['/courses']);
  }
}
