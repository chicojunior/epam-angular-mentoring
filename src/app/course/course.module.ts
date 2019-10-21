import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursePageComponent } from './course-page/course-page.component';
import { CourseItemComponent } from './course-item/course-item.component';



@NgModule({
  declarations: [
    CoursePageComponent,
    CourseItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CoursePageComponent]
})
export class CourseModule { }
