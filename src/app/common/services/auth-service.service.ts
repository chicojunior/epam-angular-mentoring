import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';

import { IUser } from '../user.interface';
import { MOCK_USER } from '../mock/user';
import { UtilsService } from './utils.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserChecked: boolean;
  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  public isLogged = this.isLoggedSubject.asObservable();
  public isAuthenticated: boolean;

  constructor(private router: Router, private utilsService: UtilsService) {
    this.isUserChecked = false;
  }

  login(email?: string, password?: string): void {
    if (this.checkCredentials(email, password, MOCK_USER)) {
      this.utilsService.showLoader(true);
      this.cleanData();
      localStorage.setItem('user_data', JSON.stringify(MOCK_USER));
      this.isLoggedSubject.next(true);
      this.goToCourses();
      console.log('Logged in successfully!');
    } else {
      this.utilsService.showLoader(false);
      console.log('Wrong credentials!');
    }
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
