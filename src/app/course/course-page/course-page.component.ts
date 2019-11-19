import { Component, OnInit, Input } from '@angular/core';

import { ICourse } from '../../common/course.interface';

import { COURSES } from '../../common/constants/course-page.constants';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses: ICourse[] = [];
  public courseInput: string;
  public noDataMessage = 'no data, feel free to add new course';

  constructor() {
    this.courses = COURSES;
  }

  ngOnInit() {}

  searchCourse(searchText: string): void {
    this.courses = this.isNotEmptyString(searchText) ? this.includesText(COURSES, searchText) : COURSES;
  }

  deleteCourse(courseId: number) {
    console.log(courseId);
  }

  loadMore(evt: MouseEvent) {
    evt.preventDefault();
    console.log(evt);
  }

  isNotEmptyString(str: string): boolean {
    return str.trim().length !== 0;
  }

  private includesText(list: ICourse[], text: string): ICourse[] {
    return list.filter(item => item.title.includes(text));
  }

}
