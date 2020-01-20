import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NgxSpinnerModule } from 'ngx-spinner';

import { ApiInterceptor } from '@app-common/interceptors/api.interceptor';
import { environment } from 'src/environments/environment';

import { effects } from '@app-common/state/effects';
import { reducers } from '@app-common/state/reducers';

import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { CourseAddModule } from './course-add/course-add.module';
import { CoursePageModule } from './course-page/course-page.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { LoaderModule } from './loader/loader.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const BASE_MODULES = [AppRoutingModule, BrowserAnimationsModule, BrowserModule];

const NGRX_MODULES = [
  StoreModule.forRoot(reducers),
  EffectsModule.forRoot(effects),
  !environment.production ? StoreDevtoolsModule.instrument() : []
];

const FEATURE_MODULES = [
  HeaderModule,
  FooterModule,
  BreadcrumbModule,
  LoginModule,
  CoursePageModule,
  CourseAddModule,
  LoaderModule
];

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    ...BASE_MODULES,
    ...FEATURE_MODULES,
    ...NGRX_MODULES,
    NgxSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
