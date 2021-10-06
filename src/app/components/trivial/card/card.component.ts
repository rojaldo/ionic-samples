import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardInfo: Card;
  @Output() onCardClick = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() { }

  handleClick(answer: string): void {
    this.cardInfo.isAnswered = true;
    this.cardInfo.userAnswer = answer;
    if(this.cardInfo.correctAnswer === answer) {
      this.onCardClick.emit(true);
    }else {
      this.onCardClick.emit(false);
    }
  }

  getColor(answer: string): string {
    if (this.cardInfo.isAnswered) {
      if(this.cardInfo.correctAnswer === answer) {
        return 'success';
      }else if (this.cardInfo.correctAnswer !== answer && this.cardInfo.userAnswer === answer) {
        return 'danger';
      }
      return 'tertiary'
    }else {
      return 'primary'
    }
  }
}
