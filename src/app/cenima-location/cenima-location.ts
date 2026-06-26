import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-cenima-location',
  imports: [Navbar, Footer],
  templateUrl: './cenima-location.html',
  styleUrl: './cenima-location.css',
})
export class CenimaLocation {}
