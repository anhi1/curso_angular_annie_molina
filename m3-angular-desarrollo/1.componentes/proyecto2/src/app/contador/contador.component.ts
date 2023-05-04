import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  contador: number = 0;
  saludo:string = "";

  count = 0;
    increment(): void {
      console.log('incremntar');
        this.count++;
    }
    decrement(): void {
        this.count--;
    }
    reset(): void {
        this.count = 0;
    }
    saludar(): void{
      this.saludo ="hola";
    }
    quitarsaludo(): void{
      this.saludo = "";
    }
}
