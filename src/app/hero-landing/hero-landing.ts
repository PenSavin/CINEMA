import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MOVIES } from '../data/movies';
import { DAYS } from '../data/days';

@Component({
  selector: 'app-hero-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-landing.html',
  styleUrl: './hero-landing.css',
})
export class HeroLanding {
  activeTab: 'now' | 'coming' = 'now';

  movies = MOVIES;
  days = DAYS;

  selectedDate = this.days[0].date;

  setTab(tab: 'now' | 'coming') {
    this.activeTab = tab;
  }

  selectDate(date: string) {
    this.selectedDate = date;
  }

  get filteredMovies() {
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
