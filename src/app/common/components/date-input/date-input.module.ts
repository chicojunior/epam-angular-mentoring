import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { DateInputComponent } from './date-input.component';



@NgModule({
  declarations: [DateInputComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [DateInputComponent]
})
export class DateInputModule { }
