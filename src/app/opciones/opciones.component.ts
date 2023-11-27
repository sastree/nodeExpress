import { Component } from '@angular/core';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css'],
  styles: [`
    .node-hover {
      background-color: rgb(93, 93, 93);;
    }
  `]
})
export class OpcionesComponent {
  estaHover: boolean = false;

  expressHover(esta: boolean): void {
    this.estaHover = esta;
  }
  
}
