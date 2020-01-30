import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: Router, useValue: {} }
    ],
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
