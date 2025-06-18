// botones-interactivos.component.ts
import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-botones-interactivos',
  templateUrl: './botones-interactivos.html',
  standalone: true,
  imports: [
    NgStyle
  ],
  styleUrls: ['./botones-interactivos.css']
})
export class BotonesInteractivosComponent {
  anchoBoton: number = 200;
  altoBoton: number = 50;
  pasoAumentoPorClick: number = 50;

  botonOcupaPantalla: boolean = false;

  constructor(private router: Router) { }

  agrandarBoton() {
    if (this.botonOcupaPantalla) {
      return;
    }

    this.anchoBoton = Math.min(window.innerWidth, this.anchoBoton + this.pasoAumentoPorClick);
    this.altoBoton = Math.min(window.innerHeight, this.altoBoton + this.pasoAumentoPorClick);

    if (this.anchoBoton >= window.innerWidth - 10 && this.altoBoton >= window.innerHeight - 10) {
      this.botonOcupaPantalla = true;
      console.log('El botón ha ocupado toda la pantalla.');



}
}

  irAlAmor() {
    this.router.navigate(['/amor']);
  }

  reiniciarTamanoBoton() {
    this.anchoBoton = 200;
    this.altoBoton = 50;
    this.botonOcupaPantalla = false;
  }
}
