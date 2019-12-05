import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { LoginModule } from './login/login.module';
import { CourseAddModule } from './course-add/course-add.module';

import { AppComponent } from './app.component';
import { CoursePageModule } from './course-page/course-page.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    AppRoutingModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoursePageModule,
    CourseAddModule,
    FooterModule,
    HeaderModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
