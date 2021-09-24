import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  paymentDate = '';
  amount = 0;
  height = 0;
  miles = 0;

  car = {
    name: 'Toyota',
    model: 'Fortuner',
    year: 2020,
  };

  onNameChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.name = value;
  }

  onDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.paymentDate = value;
  }

  onAmountChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.amount = parseFloat(value);
  }

  onHeightChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.height = parseFloat(value);
  }

  onMilesChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.miles = parseFloat(value);
  }
}
