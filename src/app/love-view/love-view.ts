import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-love-view',
  imports: [],
  templateUrl: './love-view.html',
  standalone: true,
  styleUrl: './love-view.css'
})
export class LoveView {


  constructor(private router: Router) { }

  iraPalabras() {
    this.router.navigate(['/palabras']);
  }
}
