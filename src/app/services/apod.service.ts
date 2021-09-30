import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  key = 'DEMO_KEY';
  apod: any = {};
  apod$ = new EventEmitter<any>();

  constructor(public http: HttpClient) { 
  }

  getApod(stringDate?: string): void {
    let url = 'https://api.nasa.gov/planetary/apod?api_key=' + this.key;
    if(stringDate !== undefined || stringDate !== '') {
      url = 'https://api.nasa.gov/planetary/apod?date='+ stringDate +'&api_key='+ this.key;
    }
    this.http.get(url).subscribe(data => {
      console.log(data);
      this.apod = data;
      this.apod$.emit(this.apod);
    }, error => {
      console.log(error);
    }
    );
  }
}
