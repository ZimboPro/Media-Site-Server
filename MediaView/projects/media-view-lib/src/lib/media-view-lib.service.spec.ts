import { TestBed } from '@angular/core/testing';

import { MediaViewLibService } from './media-view-lib.service';

describe('MediaViewLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaViewLibService = TestBed.get(MediaViewLibService);
    expect(service).toBeTruthy();
  });
});
