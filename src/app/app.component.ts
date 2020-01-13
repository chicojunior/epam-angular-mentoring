import { Component, OnInit } from '@angular/core';

import { AuthService, UtilsService } from '@app-common/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLogged: boolean;
  public isLoading: boolean;

  constructor(private authService: AuthService, private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.authService.isLogged.subscribe(res => this.isLogged = res);
    this.utilsService.loader.subscribe(showLoader => this.isLoading = showLoader);
  }

}
