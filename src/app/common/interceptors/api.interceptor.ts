import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService, UtilsService } from '@app-common/services';
import { IUser } from '@app-common/user.interface';

export class ApiInterceptor implements HttpInterceptor {
  token: string;

  constructor(private authService: AuthService, private utils: UtilsService) {
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
