import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

  display = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onKeyPressed(value: any): void {
    console.log(typeof value);
    this.display = this.display + value;
  }

}
