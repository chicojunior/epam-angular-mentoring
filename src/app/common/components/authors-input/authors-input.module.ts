import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AuthorsInputComponent } from './authors-input.component';



@NgModule({
  declarations: [AuthorsInputComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [AuthorsInputComponent]
})
export class AuthorsInputModule { }
