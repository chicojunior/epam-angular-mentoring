import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { CourseDeleteDialogModule } from '../common/dialog/course-delete-dialog/course-delete-dialog.module';

import { CourseItemModule } from '../course-item/course-item.module';
import { CourseListModule } from '../course-list/course-list.module';

import { CoursePageComponent } from './course-page.component';

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
    CourseListModule
  ]
})
export class CoursePageModule { }
