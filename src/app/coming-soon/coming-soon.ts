import { Component } from '@angular/core';
import { comboSets, featuredCombo } from '../data/comboSets';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-coming-soon',
  imports: [Navbar, Footer],
  templateUrl: './coming-soon.html',
  styleUrl: './coming-soon.css',
})
export class ComingSoon {
  featuredCombo = featuredCombo;
  comboSets = comboSets;
}
