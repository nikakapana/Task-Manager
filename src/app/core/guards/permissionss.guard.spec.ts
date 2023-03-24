import { TestBed } from '@angular/core/testing';

import { PermissionssGuard } from './permissionss.guard';

describe('PermissionssGuard', () => {
  let guard: PermissionssGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissionssGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
