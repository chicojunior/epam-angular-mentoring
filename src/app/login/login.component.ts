import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

import { AuthService } from '@app-common/services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userEmail: string;
  public userPassword: string;
  public isLogged: boolean;

  constructor(private authService: AuthService, private loader: NgxSpinnerService) {
    this.authService.isLogged
      .subscribe(logged => {
        this.isLogged = logged;
      });
   }

  ngOnInit() {
    if (this.isLogged) {
      this.authService.goToCourses();
    }
  }

  login() {
    this.authService.login(this.userEmail, this.userPassword);
  }

}
