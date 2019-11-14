import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(value: number): string {
    return this.timeConvert(value);
  }

  timeConvert(duration: number): string {
    const hours = (duration / 60);
    const remainingHours = Math.floor(hours);
    const minutes = (hours - remainingHours) * 60;
    const remainingMinutes = Math.round(minutes);
    return `${remainingHours}h ${remainingMinutes}min`;
  }

}
