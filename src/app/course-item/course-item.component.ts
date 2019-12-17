import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { Course } from '@app-common/course.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {

  @Input() course: Course;
  @Output() deleteCourse: EventEmitter<string> = new EventEmitter();
  @Output() editCourse: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {}

  deleteItem(course: Course): void {
    this.deleteCourse.emit(course.id);
  }

  editItem(course: Course): void {
    this.router.navigate(['courses', course.id]);
  }

}
