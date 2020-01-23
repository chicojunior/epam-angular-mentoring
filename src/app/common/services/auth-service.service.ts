import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';

import { IUser } from '../user.interface';
import { UtilsService } from './utils.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserChecked: boolean;
  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  private tokenSubject: BehaviorSubject<string> = new BehaviorSubject('');
  private userSubject: BehaviorSubject<any> = new BehaviorSubject({});

  public isLogged = this.isLoggedSubject.asObservable();
  public isAuthenticated: boolean;
  public token: Observable<string> = this.tokenSubject.asObservable();
  public user: Observable<any> = this.userSubject.asObservable();

  constructor(
    private router: Router,
    private utilsService: UtilsService,
    private http: HttpClient
  ) {
    this.isUserChecked = false;
  }

  login(email: string, password: string): Observable<string> {
    return this.http
      .post(`${environment.BASE_URL}/login`, { email, password })
      .pipe(
        map(
          token => {
            this.updateToken(token as string);
            this.isLoggedSubject.next(true);
            this.goToCourses();
            console.log('Logged in successfully!');
            return token as string;
          },
          error => {
            console.log('Error', error);
            return error;
          }
        )
      );
  }

  updateToken(token: string) {
    this.tokenSubject.next(token);
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

  getUserInfo(): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/users`).pipe(
      map(
        userList => this.userSubject.next(userList[0]),
        error => console.log('Error', error)
      )
    );
  }

  cleanData(): void {
    localStorage.removeItem('user_data');
    this.isLoggedSubject.next(false);
  }
}
