import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from '../../course.interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courseList: ICourse[], param: string): ICourse[] {
    return courseList.sort((a, b) => a[param] < b[param] ? -1 : a[param] > b[param] ? 1 : 0);
  }

}
