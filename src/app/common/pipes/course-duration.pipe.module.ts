import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDurationPipe } from './course-duration.pipe';

@NgModule({
  declarations: [ CourseDurationPipe ],
  imports: [ CommonModule ],
  exports: [CourseDurationPipe],
  providers: [CourseDurationPipe]
})
export class CourseDurationPipeModule { }
