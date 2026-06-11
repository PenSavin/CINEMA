import { Component, signal } from '@angular/core';
import { Carousel } from './carousel/carousel';
import { Navbar } from './navbar/navbar';
import { HeroLanding } from './hero-landing/hero-landing';
import { LoginForm } from './login-form/login-form';
import { RouterModule } from '@angular/router';
import {routesConfig} from "./routes"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Carousel, HeroLanding, LoginForm, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('cenima');
}
