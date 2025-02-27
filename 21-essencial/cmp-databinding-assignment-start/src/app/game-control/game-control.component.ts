import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  // Evento que enviará números incrementales al componente padre (AppComponent)
  @Output() intervalFired = new EventEmitter<number>();

  private interval: any; // Referencia al intervalo que ejecutará la lógica de incremento
  private lastNumber = 0; // Variable que almacenará el último número generado

  // Función para iniciar el juego
  onStartGame() {
    this.interval = setInterval(() => {
      this.lastNumber++; // Incrementa el número en 1
      this.intervalFired.emit(this.lastNumber); // Emite el número al componente padre
    }, 1000); // Se ejecuta cada 1 segundo
  }

  // Función para detener el juego
  onStopGame() {
    clearInterval(this.interval); // Detiene el intervalo para evitar que siga generando números
  }
}
