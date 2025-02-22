import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter-page.component.html',
})
export class CounterPageComponent {
  counter = 10;

  counterSignal = signal(10);

  changeCounterBy(value: number) {
    this.counter += value;
    this.counterSignal.update((prev) => prev + value);
  }

  resetCounter() {
    this.counter = 0;

    this.counterSignal.set(0);
  }
}
