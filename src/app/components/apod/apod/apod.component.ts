import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
})
export class ApodComponent implements OnInit, OnDestroy, OnChanges {

  apod: any = {};

  constructor(public service: ApodService) {
    this.service.apod$.subscribe(apod => {
      this.apod = apod;
    });
  }

  ngOnInit() {
    if (this.service.apod === {}) {
      this.service.getApod();
    } else {
      this.apod = this.service.apod;
    }
  }

  ngOnDestroy(): void {
    console.log('destroyed: ' + this.constructor.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ' + changes);
  }



  // get year string from date
  handleChange(event) {
    console.log(event.target.value);
    const stringDate = moment(event.target.value).format('YYYY-MM-DD');
    this.service.getApod(stringDate);
  }


}
