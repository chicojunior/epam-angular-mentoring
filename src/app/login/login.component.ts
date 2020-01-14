import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

import { AuthService, UtilsService } from '@app-common/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userEmail: string;
  public userPassword: string;
  public isLogged: boolean;

  constructor(private authService: AuthService, private utils: UtilsService) {
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
    this.utils.showLoader(true);
    this.authService
      .login(this.userEmail, this.userPassword)
      .subscribe(
        res => this.cancelLoader(),
        err => this.cancelLoader()
      );
  }

  private cancelLoader() {
    this.utils.showLoader(false);
  }
}
