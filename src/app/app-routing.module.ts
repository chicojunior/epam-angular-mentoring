import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursePageComponent } from './course/course-page/course-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
