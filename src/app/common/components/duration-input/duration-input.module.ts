import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CourseDurationPipeModule } from '../../pipes/course-duration.pipe.module';

import { DurationInputComponent } from './duration-input.component';

@NgModule({
  declarations: [DurationInputComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    CourseDurationPipeModule
  ],
  exports: [DurationInputComponent]
})
export class DurationInputModule { }
