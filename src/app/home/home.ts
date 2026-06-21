import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Carousel } from '../carousel/carousel';
import { HeroLanding } from '../hero-landing/hero-landing';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  imports: [Navbar, Carousel, HeroLanding, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
