import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AuthService } from '@app-common/services';
import { tokenSelector } from '@app-common/state/auth/auth.reducer';


export class ApiInterceptor implements HttpInterceptor {
  token: string;
  storeToken$: Observable<string>;

  constructor(private authService: AuthService, private store: Store<any>) {
    this.authService.token.subscribe(res => this.token = res);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      headers: req.headers.set('Authorization', this.token)
    });
    return next.handle(cloneReq);
  }
}
