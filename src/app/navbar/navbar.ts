import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  searchTerm = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.searchTerm = params.get('search') ?? '';
    });
  }

  searchMovies(): void {
    const search = this.searchTerm.trim();

    this.router.navigate(['/home'], {
      queryParams: search ? { search } : {},
    });
  }
}
