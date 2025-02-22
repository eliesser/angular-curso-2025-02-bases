import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter-page.component.html',
})
export class CounterPageComponent {
  counter = 10;

  changeCounterBy(value: number) {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
