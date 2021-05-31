import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiServiceService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: ApiServiceService;

  let httpTestingController: HttpTestingController;
  const mockResponse = null
  const data = [
    {
      title: "Titulo nota",
      content: "Mi primera nota",
      priority: 2,
      creationDate: 21/5/2021,
      updateDate: 21/5/2021
    },
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      providers: [ApiServiceService]
    });
    service = TestBed.inject(ApiServiceService);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should method get', () => {
  //   const service: ApiServiceService = TestBed.inject(ApiServiceService)
  //   service.get('https://api.poc.financierairis.com/onboarding/v0/savings-account/documents-upload')
  //     .subscribe(result => {
  //       expect(result).toEqual(mockResponse)
  //     });
  //   const httpMock = TestBed.inject(HttpTestingController);
  //   const req = httpMock.expectOne('https://public-auth.poc.financierairis.com/oauth2/token');
  //   expect(req.request.method).toBe('POST');
  //   req.flush(mockResponse);
  //   httpMock.verify();
  // });

  it('should method put', () => {
    const service: ApiServiceService = TestBed.inject(ApiServiceService)
    service.put('http://localhost:60691/api/Notas/', data)
      .subscribe(result => {
        expect(result).toEqual(mockResponse)
        console.log(result)
      });
    // const httpMock = TestBed.inject(HttpTestingController);
    // const req = httpMock.expectOne('http://localhost:60691/api/Notas/');
    // expect(req.request.method).toBe('POST');
    // req.flush(mockResponse);
    // httpMock.verify();
  });

  it('should method post', () => {
    const service: ApiServiceService = TestBed.inject(ApiServiceService)
    service.post('http://localhost:60691/api/Notas/', data)
      .subscribe(result => {
        expect(result).toEqual(mockResponse)
        console.log(result)
      });
    // const httpMock = TestBed.inject(HttpTestingController);
    // const req = httpMock.expectOne('http://localhost:60691/api/Notas/');
    // expect(req.request.method).toBe('POST');
    // req.flush(mockResponse);
    // httpMock.verify();
  });

  it('should handle an error on create...', async(() => {
    console.log('handle an error on create...');
    const mockData: string = 'Test incident data';
    const errMsg = 'Invalid request parameters';
    const mockErrorResponse: HttpErrorResponse = new HttpErrorResponse({
      error: {}, status: 500, url: 'http://localhost:60691/api/Notas/', statusText: 'Something bad happened; please try again later.'
    });
    // service.createIncident(mockData).subscribe((resp) => {
    //   console.log('handleError on create: expected error response:');
    //   console.log(JSON.stringify(resp));
    //   fail('handleError: expected error...');
    // }, (error) => {
    //   console.log(JSON.stringify(error));
    //   expect(error).toEqual(mockErrorResponse.statusText);
    // });
    const request: TestRequest = httpTestingController.expectOne(mockErrorResponse.url);
    expect(request.request.method).toBe('POST');
    request.flush(errMsg, mockErrorResponse);
  }));
});
