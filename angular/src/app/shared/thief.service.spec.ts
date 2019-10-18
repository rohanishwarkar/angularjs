import { TestBed, inject } from '@angular/core/testing';

import { ThiefService } from './thief.service';

describe('ThiefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThiefService]
    });
  });

  it('should be created', inject([ThiefService], (service: ThiefService) => {
    expect(service).toBeTruthy();
  }));
});
