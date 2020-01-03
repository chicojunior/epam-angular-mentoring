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

  user: IUser;

  constructor(private authService: AuthService) {
    this.user = authService.getUserInfo();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      params: req.params.set('access_token', this.user.access_token)
    });
    return next.handle(cloneReq);
  }


}
