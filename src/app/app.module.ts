import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { CoursePageModule } from './course-page/course-page.module';
import { CourseAddModule } from './course-add/course-add.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [ AppComponent, PageNotFoundComponent ],
  imports: [
    AppRoutingModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    BrowserModule,
    HeaderModule,
    FooterModule,
    LoginModule,
    CoursePageModule,
    CourseAddModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
