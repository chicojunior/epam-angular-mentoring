import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService, UtilsService } from '@app-common/services';
import { Store } from '@ngrx/store';

import { login } from '@app-common/state/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLogged: boolean;
  public loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private store: Store<any>,
    private fb: FormBuilder
  ) {
    this.authService.isLogged.subscribe(logged => {
      this.isLogged = logged;
    });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (this.isLogged) {
      this.authService.goToCourses();
    }
  }

  login() {
    this.store.dispatch(login({ ...this.loginForm.value }));
  }
}
