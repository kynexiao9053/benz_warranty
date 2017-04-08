import { TestBed, inject } from '@angular/core/testing';

import { DocServiceService } from './doc-service.service';

describe('DocServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocServiceService]
    });
  });

  it('should ...', inject([DocServiceService], (service: DocServiceService) => {
    expect(service).toBeTruthy();
  }));
});
