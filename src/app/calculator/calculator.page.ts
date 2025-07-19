import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage {
  display: string = '';
  history: string[] = [];

  get historyText(): string {
    return this.history.slice(-3).reverse().join('\n');
  }

  buttonLayout: string[][] = [
    ['C', '⌫', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=',]
  ];

  onButtonClick(value: string) {
    if (value === 'C') {
      this.display = '';
    } else if (value === '⌫') {
      this.display = this.display.slice(0, -1);
    } else if (value === '%') {
      try {
        this.display = (parseFloat(this.display) / 100).toString();
      } catch {
        this.display = 'Error';
      }
    } else if (value === '=') {
      try {
        const result = eval(this.display);
        this.history.push(`${this.display} = ${result}`);
        this.display = result.toString();
      } catch {
        this.display = 'Error';
      }
    } else {
      this.display += value;
    }
  }
}
