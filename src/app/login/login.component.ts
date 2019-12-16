import { Component, OnInit } from '@angular/core';

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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLogged
      .subscribe(logged => {
        this.isLogged = logged;
      });
    if (this.authService.isAuthenticated()) {
      this.authService.goToCourses();
    }
  }

  login() {
    this.authService.login(this.userEmail, this.userPassword);
  }

}
