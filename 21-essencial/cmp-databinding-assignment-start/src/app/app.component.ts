import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers: number[] = []; // Lista para almacenar los números generados
  num: any;

  // Método que se ejecuta cuando `GameControl` emite un número
  onIntervalFired(firedNumber: number) {
    this.numbers.push(firedNumber); // Agrega el número al array
  }
}
