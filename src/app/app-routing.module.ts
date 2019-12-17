import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '@app-common/services/auth-guard.service';

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
    component: CoursePageComponent,
    canActivate: [AuthGuardService],
    data: {
      title: 'courses',
      breadcrumb: [
        {
          label: 'Courses',
          url: 'courses'
        }
      ]
    }
  },
  {
    path: 'courses/new',
    component: CourseAddComponent,
    canActivate: [AuthGuardService],
    data: {
      title: 'new-courses',
      breadcrumb: [
        {
          label: 'Courses',
          url: 'courses'
        },
        {
          label: 'New Course',
          url: 'courses/new'
        }
      ]
    }
  },
  {
    path: 'courses/:id',
    component: CourseAddComponent,
    canActivate: [AuthGuardService],
    data: {
      title: 'new-courses',
      breadcrumb: [
        {
          label: 'Courses',
          url: 'courses'
        },
        {
          label: 'Edit Course',
          url: 'courses/:id'
        }
      ]
    }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
