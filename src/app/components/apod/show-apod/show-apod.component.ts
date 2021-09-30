import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-show-apod',
  templateUrl: './show-apod.component.html',
  styleUrls: ['./show-apod.component.scss'],
})
export class ShowApodComponent implements OnInit, OnChanges {

  @Input() date = '';
  apod: any = {};

  constructor(public service: ApodService) {
    this.service.apod$.subscribe(
      (apod) => {
        this.apod = apod;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.date);
    this.service.getApod(this.date);

  }


}
