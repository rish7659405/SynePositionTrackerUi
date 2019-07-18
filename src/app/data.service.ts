import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {OpenPositionInterface} from './Modals/openPositionInterface'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  restItems: any;
  apiURL = 'http://localhost:8080/getOpenPositions';
  apiURL2 = 'http://localhost:8080/getSubmissionsbyId';

  constructor(private http: HttpClient) {}



  getOpenPositions(): Observable<OpenPositionInterface> {
    return this.http.get<OpenPositionInterface>(this.apiURL )
    .pipe(
    
    )
  }

  getSubmissionsForPosition(positionId): Observable<any> {
    return this.http.get<any>(this.apiURL2 + '/' + positionId)
    .pipe(
     
    )
  }
}
