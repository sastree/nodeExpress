import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  styles: [`
    .node-hover {
      /* Estilos adicionales cuando .express está siendo hover */
      background: rgb(93, 93, 93);
    }
  `]
})
export class BodyComponent {
  isExpressHovered: boolean = false;

  onExpressHover(isHovered: boolean): void {
    this.isExpressHovered = isHovered;
  }
  
 
}
