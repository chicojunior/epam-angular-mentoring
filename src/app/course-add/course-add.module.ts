import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthorsInputModule } from '../common/components/authors-input/authors-input.module';
import { DateInputModule } from '../common/components/date-input/date-input.module';
import { DurationInputModule } from '../common/components/duration-input/duration-input.module';

import { CourseAddComponent } from './course-add.component';

@NgModule({
  declarations: [CourseAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AuthorsInputModule,
    DateInputModule,
    DurationInputModule
  ],
  exports: [CourseAddComponent]
})
export class CourseAddModule { }
