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
  public isAuthenticated: boolean;

  constructor(private router: Router) {
    this.isUserChecked = false;
  }

  login(email?: string, password?: string): Observable<boolean> {
    let load: any;
    if (this.checkCredentials(email, password, MOCK_USER)) {
      this.cleanData();
      localStorage.setItem('user_data', JSON.stringify(MOCK_USER));
      this.isLoggedSubject.next(true);
      this.goToCourses();
      console.log('Logged in successfully!');
      load = true;
    } else {
      console.log('Wrong credentials!');
      load = false;
    }

    return load;
  }

  logout() {
    this.cleanData();
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

  isUserAuthenticated(): Observable<boolean> {
    return this.isLogged;
  }

  getUserInfo(): IUser {
    return JSON.parse(localStorage.getItem('user_data'));
  }

  cleanData(): void {
    localStorage.removeItem('user_data');
    this.isLoggedSubject.next(false);
  }


}
