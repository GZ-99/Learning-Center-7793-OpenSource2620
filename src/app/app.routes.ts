import { Routes } from '@angular/router';
import {Home} from './shared/presentation/views/home/home';
import {About} from './shared/presentation/views/about/about';

const about = () =>
  import('./shared/presentation/views/about/about').then(m => m.About)

export const routes: Routes = [
  {path: 'home', component: Home},
  {path: 'about', loadComponent: about},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
