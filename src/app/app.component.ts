import { Component, OnInit } from '@angular/core';

import { AuthService } from './common/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLogged: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLogged.subscribe(res => this.isLogged = res);
  }

}
