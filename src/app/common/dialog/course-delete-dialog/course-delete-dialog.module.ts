import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { CourseDeleteDialogComponent } from './course-delete-dialog.component';

@NgModule({
  declarations: [CourseDeleteDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [CourseDeleteDialogComponent],
  entryComponents: [CourseDeleteDialogComponent]
})
export class CourseDeleteDialogModule { }
