import { TestBed } from '@angular/core/testing';

import { ClassesService } from './classes.service';

describe('ClassesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassesService = TestBed.get(ClassesService);
    expect(service).toBeTruthy();
  });
});

// TestBed.configureTestingModule({
//   imports: [HttpModule],
//   providers: [
//     { provide: HttpClient, useValue: 'http://localhost:3000/api/register' },
//     AuthService,
//     { provide: XHRBackend, useClass: MockBackend },
//   ]
