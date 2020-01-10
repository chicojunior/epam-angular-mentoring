import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../../course.interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courseList: Course[], param: keyof Course): Course[] {
    return courseList.sort((a, b) => a[param] < b[param] ? -1 : a[param] > b[param] ? 1 : 0);
  }

}
