import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = ' Welcome to Trevors Counter App';
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
