import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const { endpoint } = environment;

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  headers = new HttpHeaders();
  constructor(private http: HttpClient) {}

  public makeRequest(method: string, path: string, data?: any, id?: any,fecha?: Date) : Observable<any>  {
    // const { params, data } = payload;
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
    let options = { headers: httpHeaders };
    if (method == "GET") {
      let resp = this.http
        .get(`${path}`, options)
        .pipe(catchError(this.handleError));
      return resp;
    }else if (method == "POST") {
      let resp = this.http
          .post(`${path}`, data, options)
          .pipe(catchError(this.handleError));
      return resp;
    }else if (method == "PUT") {
      let resp = this.http
          .put(`${endpoint}/${path}`, data, options)
          .pipe(catchError(this.handleError));
      return resp;
    }else if(method == "DELETE"){
      let resp = this.http
          .delete(`${path}/${id}`, options)
          .pipe(catchError(this.handleError));
      return resp;
    }
    let resp = console.log("Error, no se encontro el metodo");
    return throwError(resp);
  }

  public get(path: string, params?: any): Observable<any> {
    console.log('GET request initiated');
    console.log(`Path: ${path}`);
    console.log('Params:', params);
    return this.makeRequest('GET', path, params);
  }

  public post(path: string, data: any): Observable<any> {
    console.log('POST request initiated');
    console.log(`Path: ${path}`);
    console.log('Payload:', data);

    return this.makeRequest('POST', path, { data });
  }

  public put(path: string, data: any): Observable<any> {
    console.log('PUT request initiated');
    console.log(`Path: ${path}`);
    console.log('Payload:', data);

    return this.makeRequest('PUT', path, { data });
  }

  public delete(path: string, params: any): Observable<any> {
    console.log('DELETE request initiated');
    console.log(`Path: ${path}`);
    console.log('Payload:', params);

    return this.makeRequest('DELETE', path, params);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}, ` +
          `body was: ${error.error.message}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
