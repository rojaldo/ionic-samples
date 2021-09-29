import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
})
export class BeersComponent implements OnInit {

  beers: any[] = [];

  constructor(public service: BeersService) { }

  ngOnInit() {
    this.service.getBeers().subscribe(
      (data) => {
        console.log(data);
        this.beers = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
