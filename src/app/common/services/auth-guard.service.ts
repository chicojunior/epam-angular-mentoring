import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
