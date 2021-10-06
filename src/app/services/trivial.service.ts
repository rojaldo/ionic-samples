import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrivialService {

  constructor(public http: HttpClient) { 
  }

  getCards(): Observable<any> {
    return this.http.get('https://opentdb.com/api.php?amount=10');
  }
}