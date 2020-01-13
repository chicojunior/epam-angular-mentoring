import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxSpinnerModule } from 'ngx-spinner';

import { ApiInterceptor } from '@app-common/interceptors/api.interceptor';

import { AppRoutingModule } from './app-routing.module';

import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { CoursePageModule } from './course-page/course-page.module';
import { CourseAddModule } from './course-add/course-add.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';
import { LoaderModule } from './loader/loader.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

const BASE_MODULES = [
  AppRoutingModule,
  BrowserAnimationsModule,
  BrowserModule,
];

const FEATURE_MODULES = [
  HeaderModule,
  FooterModule,
  BreadcrumbModule,
  LoginModule,
  CoursePageModule,
  CourseAddModule,
  LoaderModule,
];

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    ...BASE_MODULES,
    ...FEATURE_MODULES,
    NgxSpinnerModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
