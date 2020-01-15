import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LIST } from './mocks.json';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  getList(): Observable<any[]>{
    return of(LIST);
  } 

}
