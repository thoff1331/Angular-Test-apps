import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  name = 'Trevors Counter App';
  count = 0;

  increase() {
    this.count = this.count + 1;
  }
  decrease() {
    this.count === 0 ? null : (this.count = this.count - 1);
  }
  reset() {
    this.count = 0;
  }
}
