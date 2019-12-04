import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursePageComponent } from './course/course-page/course-page.component';
import { LoginComponent } from './login/login.component';
import { CourseAddComponent } from './course-add/course-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add-course',
    component: CourseAddComponent
  },
  {
    path: 'courses',
    component: CoursePageComponent,
    children: [
      { path: 'new', component: CourseAddComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
