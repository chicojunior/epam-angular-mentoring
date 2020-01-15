import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app-common/services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogged: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService
      .getUserInfo()
      .subscribe(res => console.log(res));
    this.authService.isLogged
      .subscribe(logged => {
        this.isLogged = logged;
      });
  }

  logout() {
    this.authService.logout();
  }

}
