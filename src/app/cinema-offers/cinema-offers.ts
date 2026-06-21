import { Component } from '@angular/core';
import { cinemaOffers } from '../data/cinemaOffer';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-cinema-offers',
  imports: [Navbar, Footer],
  templateUrl: './cinema-offers.html',
  styleUrl: './cinema-offers.css',
})
export class CinemaOffers {
  offers = cinemaOffers;
}
