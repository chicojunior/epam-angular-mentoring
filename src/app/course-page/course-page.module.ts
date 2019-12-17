import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { CourseDeleteDialogModule } from '@app-common/dialog/course-delete-dialog/course-delete-dialog.module';

import { CourseItemModule } from '../course-item/course-item.module';
import { CourseListModule } from '../course-list/course-list.module';
import { CoursePageComponent } from './course-page.component';
import { CoursesRoutingModule } from './courses-routing.module';


@NgModule({
  declarations: [CoursePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CourseDeleteDialogModule,
    CourseItemModule,
    CourseListModule,
    CoursesRoutingModule,
    HttpClientModule
  ],
  exports: [CoursePageComponent]
})
export class CoursePageModule { }
