import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {BotonesInteractivosComponent} from './botones-interactivos/botones-interactivos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {


  private router = inject( Router );

  protected title = 'untitled28';
}
