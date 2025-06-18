import { Routes } from '@angular/router';
import { BotonesInteractivosComponent } from './botones-interactivos/botones-interactivos';
import { LoveView } from './love-view/love-view';

export const routes: Routes = [
  { path: '', redirectTo: 'init', pathMatch: 'full' }, // redirecciona a init
  { path: 'init', component: BotonesInteractivosComponent }, // init carga el componente
  { path: 'amor', component: LoveView } // nueva ruta
];
