import { Injectable } from '@angular/core';

import { IUser } from '../user.interface';
import { MOCK_USER } from '../mock/user';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  public isLogged = this.isLoggedSubject.asObservable();

  constructor(private router: Router) { }

  login() {
    localStorage.setItem('user_data', JSON.stringify(MOCK_USER));
    console.log('Logged in successfully!');
    this.isLoggedSubject.next(true);
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('user_data');
    this.isLoggedSubject.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLogged;
  }

  getUserInfo(): IUser {
    return JSON.parse(localStorage.getItem('user_data'));
  }


}
