import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-apod',
  templateUrl: './date-apod.component.html',
  styleUrls: ['./date-apod.component.scss'],
})
export class DateApodComponent implements OnInit {

  @Output() dateChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  handleChange(event) {
    console.log(event.target.value);
    const stringDate = moment(event.target.value).format('YYYY-MM-DD');
    this.dateChange.emit(stringDate);
  }

}
