import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
];

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
];

const FEATURE_MODULES = [
  CourseDeleteDialogModule,
  CourseItemModule,
  CourseListModule
];

@NgModule({
  declarations: [CoursePageComponent],
  imports: [BASE_MODULES, MATERIAL_MODULES, FEATURE_MODULES],
  exports: [CoursePageComponent]
})
export class CoursePageModule {}
