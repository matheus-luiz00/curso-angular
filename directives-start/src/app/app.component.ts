import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  numbersEven = [2, 4];
  numbersOdd = [1, 3, 5];
  value = 10;

  onlyOdd = false;
}
