import { Component } from '@angular/core';
import { NodeComponent } from '../node/node.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggleMenu() {
    const menu = document.querySelector('#icono-menu');
    const navbar = document.querySelector('.navbar');

    if (menu && navbar) {
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('open');

    }
  }
}
