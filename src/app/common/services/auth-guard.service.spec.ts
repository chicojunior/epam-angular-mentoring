import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: Router, useValue: {} }
    ]
  }));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
