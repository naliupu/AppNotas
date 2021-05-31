import { HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { NotasService } from './notas.service';

describe('NotasService', () => {
  let service: NotasService;
  let httpTestingController: HttpTestingController;

  const mockResponseSummary = null

  const dataNota = [
    {
      id: 1,
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
      providers: [ NotasService ]
    });
    service = TestBed.inject(NotasService);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(NotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('GET', () => {
    const service: NotasService = TestBed.inject(NotasService)
    service.GetNotes()
      .subscribe(result => {
        expect(result).toEqual(mockResponseSummary)
        console.log(result)
      });
    // const httpMock = TestBed.inject(HttpTestingController);
    // const req = httpMock.expectOne('http://localhost:60691/api/Notas/');
    // expect(req.request.method).toBe('POST');
    // req.flush(mockResponseSummary);
    // httpMock.verify();
  });

//   it('POST', () => {
//     const service: NotasService = TestBed.inject(NotasService)
//     service.SaveNote(nota)
//       .subscribe(result => {
//         expect(result).toEqual(mockResponseSummary)
//         console.log(result)
//       });
//   });

//   it('POST', () => {
//     const service: NotasService = TestBed.inject(NotasService)
//     service.SearchByDateNote()
//       .subscribe(result => {
//         expect(result).toEqual(mockResponseSummary)
//         console.log(result)
//       });
//   });
});
