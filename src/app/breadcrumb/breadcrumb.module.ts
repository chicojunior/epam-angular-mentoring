import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng7MatBreadcrumbModule } from 'ng7-mat-breadcrumb';

import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    Ng7MatBreadcrumbModule
  ],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule { }
