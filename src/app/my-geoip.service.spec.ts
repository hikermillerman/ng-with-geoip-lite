import { TestBed } from '@angular/core/testing';

import { MyGeoipService } from './my-geoip.service';

describe('MyGeoipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyGeoipService = TestBed.get(MyGeoipService);
    expect(service).toBeTruthy();
  });
});
