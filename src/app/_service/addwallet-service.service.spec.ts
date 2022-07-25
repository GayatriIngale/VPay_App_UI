import { TestBed } from '@angular/core/testing';

import { AddwalletServiceService } from './addwallet-service.service';

describe('AddwalletServiceService', () => {
  let service: AddwalletServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddwalletServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
