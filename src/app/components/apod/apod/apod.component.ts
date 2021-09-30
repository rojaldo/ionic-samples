import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
})
export class ApodComponent implements OnInit {

  apod = {};

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

  // get year string from date
  handleChange(event) {
    console.log(event.target.value);
    const stringDate = moment(event.target.value).format('YYYY-MM-DD');
    this.service.getApod(stringDate);
  }


}
