import { Component, OnInit } from '@angular/core';
import { TrivialService } from 'src/app/services/trivial.service';
import { Card } from '../../model/card';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.scss'],
})
export class TrivialComponent implements OnInit {

  data: any = {};
  cards: Card[] = [];
  score = 0;

  constructor(public service: TrivialService) { }

  ngOnInit() {
    this.addCards();
  }

  addCards() {
    this.service.getCards().subscribe(
      (data) => {
        this.data = data;
        console.log(data);

        for (const jsonCard of this.data.results) {
          const card = new Card(jsonCard);
          this.cards.push(card);
        }
      }
    );
  }

  handleScore(event: boolean) {
    if (event) {
      this.score = this.score + 2;
    } else {
      this.score--;
    }

  }

  doInfinite(event: any) {
    this.addCards();
  }

}
