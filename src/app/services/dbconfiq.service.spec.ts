import { TestBed } from '@angular/core/testing';

import { DbconfiqService } from './dbconfiq.service';

describe('DbconfiqService', () => {
  let service: DbconfiqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbconfiqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
