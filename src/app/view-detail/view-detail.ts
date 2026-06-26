import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { MOVIES } from '../data/movies';
import { DAYS } from '../data/days';

type Movie = (typeof MOVIES)[number];
type MovieDay = (typeof DAYS)[number];

@Component({
  selector: 'app-view-detail',
  imports: [CommonModule, RouterLink, Navbar, Footer],
  templateUrl: './view-detail.html',
  styleUrl: './view-detail.css',
})
export class ViewDetail {
  movie?: Movie;
  selectedDate = '';
  selectedTime = '';

  constructor(private route: ActivatedRoute) {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = MOVIES.find((item) => item.id === movieId);

    this.selectedDate = this.availableDays[0]?.date ?? '';
    this.selectedTime = this.showTimes[0] ?? '';
  }

  get availableDays(): MovieDay[] {
    if (!this.movie) return [];

    return DAYS.filter((day) =>
      day.movies.some((item) => item.movieId === this.movie?.id),
    );
  }

  get showTimes(): string[] {
    if (!this.movie || !this.selectedDate) return [];

    return (
      this.availableDays
        .find((day) => day.date === this.selectedDate)
        ?.movies.find((item) => item.movieId === this.movie?.id)?.showTimes ?? []
    );
  }

  get statusLabel(): string {
    return this.movie?.status === 'now_showing' ? 'Now Showing' : 'Coming Soon';
  }

  selectDate(date: string): void {
    this.selectedDate = date;
    this.selectedTime = this.showTimes[0] ?? '';
  }

  selectTime(time: string): void {
    this.selectedTime = time;
  }
}
