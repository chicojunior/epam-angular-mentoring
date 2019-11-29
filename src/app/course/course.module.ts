import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { CourseDurationPipeModule } from '../common/pipes/course-duration.pipe.module';
import { OrderByModule } from '../common/pipes/order-by/order-by.module';
import { BorderHighlightModule } from '../common/directives/border-highlight/border-highlight.module';

import { CoursePageComponent } from './course-page/course-page.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseDeleteDialogComponent } from './course-delete-dialog/course-delete-dialog.component';



@NgModule({
  declarations: [
    CoursePageComponent,
    CourseItemComponent,
    CourseDeleteDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    CourseDurationPipeModule,
    BorderHighlightModule,
    OrderByModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [CoursePageComponent],
  entryComponents: [CourseDeleteDialogComponent]
})
export class CourseModule { }
