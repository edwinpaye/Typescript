import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LIST } from './mocks.json';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private urlEndpoint: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getList(): Observable<any[]>{
    // return of(LIST);
    return this.http.get<any[]>(this.urlEndpoint).pipe(
      map( response => response as any[] )
    );
  } 

}
