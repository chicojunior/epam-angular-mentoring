import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Course } from '@app-common/course.interface';
import { CourseService } from '@app-common/services';
import { CourseState } from '@app-common/state/course/course.reducer';
import { addCourse, updateCourse } from '@app-common/state/actions';

import { ValidateDate } from '@app-common/validators/date.validator';

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
  ) {}

  ngOnInit() {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      creationDate: ['', [Validators.required, ValidateDate]],
      duration: [0, Validators.required]
    });

    this.courseForm.valueChanges.subscribe(() => {
      console.log(this.courseForm.getRawValue());
    });

    this.route.params.subscribe(params => {
      if (params.id) {
        this.pageTitle = 'Edit Course';
        this.id = params.id;
        this.buttonAction = 'Update';
        this.courseService.getCourseById(params.id).subscribe(res => {
          this.course = res;
          this.loadForm();
        });
      } else {
        this.pageTitle = 'New Course';
        this.buttonAction = 'Save';
      }
    });
  }

  loadForm() {
    this.courseForm.patchValue({ ...this.course });
  }

  submit(): void {
    this.course = {
      ...this.course,
      ...this.courseForm.value
    };
    this.course.creationDate = new Date(this.course.creationDate).toISOString();
    this.id
      ? this.store.dispatch(updateCourse({ payload: this.course }))
      : this.store.dispatch(addCourse({ payload: this.course }));

    this.goToCoursesList();
  }

  cancel() {
    this.goToCoursesList();
  }

  setCourseDuration(duration: number) {
    this.courseForm.controls.duration.setValue(duration);
  }

  setCourseDate(courseDate: string) {
    this.courseForm.controls.creationDate.setValue(new Date(courseDate));
  }

  private goToCoursesList() {
    this.router.navigate(['/courses']);
  }
}
