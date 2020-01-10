import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

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