import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { db } from '../../../server/db/db'

import { ClassesService } from './classes.service';
import { ClassesResponse } from './classes.service';

describe('ClassesService', () => {
  beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [ClassesService],
    imports: [HttpClientTestingModule],
  });
  const service = TestBed.get(ClassesService);
  const httpMock = TestBed.get(HttpTestingController);
});

  it('should be created', () => {
    const service: ClassesService = TestBed.get(ClassesService);
    expect(service).toBeTruthy();
  });

  it('should get the list of classes from the server', () => {
    inject([HttpTestingController, ClassesService],
    (httpMock: HttpTestingController, service: ClassesService) => {

    const mockResponse: ClassesResponse = {
        success: true,
        classes: db
      };
    // We call the service
    service.getClasses().subscribe((data: any) => {
      expect(data.success).toBe(true);
      expect(data.classes.length).toBe(8);
    });
    // We set the expectations for the HttpClient mock
    const req = httpMock.expectOne('http://localhost:3001/classes');
    expect(req.request.method).toEqual('GET');
    // Then we set the fake data to be returned by the mock
    req.flush({data: mockResponse});
    })
  });

});
