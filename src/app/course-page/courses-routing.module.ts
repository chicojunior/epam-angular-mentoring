import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursePageComponent } from './course-page.component';
import { CourseAddComponent } from '../course-add/course-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CoursePageComponent
  },
  {
    path: 'courses/new',
    component: CourseAddComponent
  },
  {
    path: 'courses/:id',
    component: CourseAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
