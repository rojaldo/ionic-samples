import { Component, OnDestroy, OnInit } from '@angular/core';

enum State {
  INITIAL,
  FIRSTFIGURE,
  SECONDFIGURE,
  RESULT,
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

  display = '';
  currentState = State.INITIAL;
  firstFigure = 0;
  SecondFigure = 0;
  result = 0;
  operator = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  processNumber(value: number): void {
    switch (this.currentState) {
      case State.INITIAL:
        this.firstFigure = value;
        this.display = this.display + value;
        this.currentState = State.FIRSTFIGURE;
        break;
      case State.FIRSTFIGURE:
        this.firstFigure = this.firstFigure * 10 + value;
        this.display = this.display + value;
        break;
      case State.SECONDFIGURE:
        this.SecondFigure = this.SecondFigure * 10 + value;
        this.display = this.display + value;
        break;
      case State.RESULT:
        this.firstFigure = value;
        this.SecondFigure = 0;
        this.result = 0;
        this.operator = '';
        this.display = '' + value;
        this.currentState = State.FIRSTFIGURE;
        break;

      default:
        break;
    }

  }

  resolve(): number {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.SecondFigure;
      case '-':
        return this.firstFigure - this.SecondFigure;
      case '*':
        return this.firstFigure * this.SecondFigure;
      case '/':
        return this.firstFigure / this.SecondFigure;
      default:
        return 0;
    }
  }

  processSymbol(value: string): void {
    switch (this.currentState) {
      case State.INITIAL:

        break;
      case State.FIRSTFIGURE:
        if (value === '+' || value === '-' || value === '*' || value === '/') {
          this.operator = value;
          this.currentState = State.SECONDFIGURE;
          this.display = this.display + value;
        }
        break;
      case State.SECONDFIGURE:
        if (value === '=') {
          this.result = this.resolve();
          this.display = this.display + value + this.result;
          this.currentState = State.RESULT;
        }
        break;
      case State.RESULT:
        if (value === '+' || value === '-' || value === '*' || value === '/') {
          this.operator = value;
          this.firstFigure = this.result;
          this.SecondFigure = 0;
          this.result = 0;
          this.display = '' + this.firstFigure + value;
          this.currentState = State.SECONDFIGURE;
        }
        break;

      default:
        break;
    }

  }

  onKeyPressed(value: any): void {
    if (typeof value === 'number') {
      this.processNumber(value);
    }
    else if (typeof value === 'string') {
      this.processSymbol(value);
    }
    // this.display = this.display + value;
  }

}
