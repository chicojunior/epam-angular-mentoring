import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { OrderByModule } from '@app-common/pipes/order-by/order-by.module';

import { CourseItemModule } from '../course-item/course-item.module';

import { CourseListComponent } from './course-list.component';



@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    OrderByModule,
    CourseItemModule
  ],
  exports: [CourseListComponent]
})
export class CourseListModule { }
