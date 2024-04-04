import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PoemsComponent } from './pages/poems/poems.component';
import { PoetsComponent } from './pages/poets/poets.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'poems',
    component: PoemsComponent,
  },
  {
    path: 'poets',
    component: PoetsComponent,
  },
];
