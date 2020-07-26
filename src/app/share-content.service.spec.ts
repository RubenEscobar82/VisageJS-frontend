import { TestBed } from '@angular/core/testing';

import { ShareContentService } from './share-content.service';

describe('ShareContentService', () => {
  let service: ShareContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
