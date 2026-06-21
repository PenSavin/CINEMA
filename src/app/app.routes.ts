import { Routes } from '@angular/router';
import { Home } from './home/home';
import { LoginForm } from './login-form/login-form';
import { CinemaOffers } from './cinema-offers/cinema-offers';
import { CenimaLocation } from './cenima-location/cenima-location';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'auth',
    component: LoginForm
  },
  {
    path:'offer',
    component: CinemaOffers
  },
  {
    path:'cinema',
    component: CenimaLocation
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
