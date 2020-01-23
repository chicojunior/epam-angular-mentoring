import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

import { AuthService, UtilsService } from '@app-common/services';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { login } from '@app-common/state/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userEmail: string;
  public userPassword: string;
  public isLogged: boolean;

  constructor(
    private authService: AuthService,
    private utils: UtilsService,
    private store: Store<any>
  ) {
    this.authService.isLogged.subscribe(logged => {
      this.isLogged = logged;
    });
  }

  ngOnInit() {
    if (this.isLogged) {
      this.authService.goToCourses();
    }
  }

  login() {
    this.store.dispatch(login({ email: this.userEmail, password: this.userPassword }));
    // this.authService
    //   .login(this.userEmail, this.userPassword)
    //   .pipe(switchMap(() => this.authService.getUserInfo()))
    //   .subscribe();
  }
}
