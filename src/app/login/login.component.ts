import { Component, OnInit } from '@angular/core';

import { AuthService } from '../common/services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userEmail: string;
  public userPassword: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  login() {
    this.authService.login();
  }

}
