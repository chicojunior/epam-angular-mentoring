import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CoursePageComponent } from './course-page/course-page.component';
import { CourseItemComponent } from './course-item/course-item.component';



@NgModule({
  declarations: [
    CoursePageComponent,
    CourseItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [CoursePageComponent]
})
export class CourseModule { }
