import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursePageComponent } from './course-page/course-page.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
