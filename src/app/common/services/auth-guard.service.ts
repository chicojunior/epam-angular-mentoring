import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  isAuthenticated: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLogged.subscribe(res => this.isAuthenticated = res);
   }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isAuthenticated) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
