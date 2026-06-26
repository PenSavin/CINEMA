import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MOVIES } from '../data/movies';
import { DAYS } from '../data/days';

@Component({
  selector: 'app-hero-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-landing.html',
  styleUrl: './hero-landing.css',
})
export class HeroLanding {
  activeTab: 'now' | 'coming' = 'now';

  movies = MOVIES;
  days = DAYS;

  selectedDate = this.days[0].date;
  searchTerm = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      this.searchTerm = (params.get('search') ?? '').trim().toLowerCase();
    });
  }

  setTab(tab: 'now' | 'coming') {
    this.activeTab = tab;
  }

  selectDate(date: string) {
    this.selectedDate = date;
  }

  get filteredMovies() {
    if (this.searchTerm) {
      return this.movies.filter((movie) => {
        const searchableText = `${movie.title} ${movie.description}`.toLowerCase();

        return searchableText.includes(this.searchTerm);
      });
    }

    const selectedDay = this.days.find((day) => day.date === this.selectedDate);

    if (!selectedDay) return [];

    // NOW SHOWING → depends on date + showtimes
    if (this.activeTab === 'now') {
      return this.movies
        .filter((movie) => movie.status === 'now_showing')
        .map((movie) => {
          const schedule = selectedDay.movies.find((m) => m.movieId === movie.id);

          return {
            ...movie,
            showTimes: schedule?.showTimes ?? [],
          };
        })
        .filter((movie) => movie.showTimes.length > 0);
    }

    // COMING SOON → ignore showtimes completely
    return this.movies.filter((movie) => movie.status === 'coming_soon');
  }
}
