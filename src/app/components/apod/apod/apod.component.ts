import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';
import { Geolocation } from '@capacitor/geolocation';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
})
export class ApodComponent implements OnInit, OnDestroy, OnChanges {

  apod: any = {};
  location = 'Location: ';
  stringDate = '';

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
    console.log('init: ' + this.constructor.name);

    
  }

  ngOnDestroy(): void {
    console.log('destroyed: ' + this.constructor.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ' + changes);
  }

  handleChange(stringDate) {
    console.log('handleChange: ' + stringDate);
    this.stringDate = stringDate;
  }


}
