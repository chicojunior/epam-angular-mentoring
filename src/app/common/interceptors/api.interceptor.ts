import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '@app-common/services';
import { IUser } from '@app-common/user.interface';

export class ApiInterceptor implements HttpInterceptor {
  token: string;

  constructor(private authService: AuthService) {
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
