import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';

import { IUser } from '../user.interface';
import { MOCK_USER } from '../mock/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserChecked: boolean;
  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  public isLogged = this.isLoggedSubject.asObservable();

  constructor(private router: Router) {
    this.isUserChecked = false;
  }

  login(email?: string, password?: string) {
    if (this.checkCredentials(email, password, MOCK_USER)) {
      localStorage.setItem('user_data', JSON.stringify(MOCK_USER));
      this.isLoggedSubject.next(true);
      this.goToCourses();
      console.log('Logged in successfully!');
    } else {
      console.log('Wrong credentials!');
    }
  }

  logout() {
    localStorage.removeItem('user_data');
    this.isLoggedSubject.next(false);
    this.router.navigate(['/login']);
  }

  goToCourses() {
    this.router.navigate(['/courses']);
  }

  checkCredentials(email: string, password: string, user: IUser): boolean {
    if (email === user.email && password === user.password) {
      this.isUserChecked = true;
    }

    return this.isUserChecked;
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLogged;
  }

  getUserInfo(): IUser {
    return JSON.parse(localStorage.getItem('user_data'));
  }


}
