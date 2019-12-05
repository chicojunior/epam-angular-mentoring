import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CourseDurationPipeModule } from '../common/pipes/course-duration.pipe.module';
import { BorderHighlightModule } from '../common/directives/border-highlight/border-highlight.module';

import { CourseItemComponent } from './course-item.component';

@NgModule({
  declarations: [CourseItemComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CourseDurationPipeModule,
    BorderHighlightModule
  ],
  exports: [CourseItemComponent]
})
export class CourseItemModule { }
