import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  protected loaderSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loader: Observable<boolean> = this.loaderSubject.asObservable();

  constructor() { }

  public showLoader(show: boolean) {
    this.loaderSubject.next(show);
  }

  public generateRandomUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
      .replace(/[xy]/g, (c) => {
        // tslint:disable-next-line: no-bitwise
        const r = Math.random() * 16 | 0;
        // tslint:disable-next-line: no-bitwise
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
  }
}
