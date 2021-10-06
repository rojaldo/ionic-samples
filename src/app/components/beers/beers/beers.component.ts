import { Component, OnDestroy, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
})
export class BeersComponent implements OnInit, OnDestroy {

  beers: any[] = [];
  showBeers: any[] = [];
  range = { lower: 3, upper: 5 };

  constructor(public service: BeersService) { }

  ngOnInit() {
    this.service.getBeers().subscribe(
      (data) => {
        console.log(data);
        this.beers = data;
        this.showBeers = this.filterBeers();

      },
      (error) => {
        console.log(error);
      }
    );
    const checkName = async () => {
      const stringRange = await Storage.get({ key: 'range' });
      // string to object
      this.range = JSON.parse(stringRange.value);
  
    };
  }

  ngOnDestroy(): void {
    const setName = async () => {
      await Storage.set({
        key: 'range',
        value: JSON.stringify(this.range),
      });
    };
    console.log(setName);
  }


  filterBeers(): any[] {
    return this.beers.filter((beer, index) => {
      return beer.abv >= this.range.lower && beer.abv <= this.range.upper;
    }).sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

  }

  handleChange(event) {
    console.log(event.target.value);
    if (event.target.value !== this.range) {
      this.range = event.target.value;
      this.showBeers = this.filterBeers();

      
    }
  }

}
