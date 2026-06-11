import { Component, OnDestroy, OnInit } from '@angular/core';

interface Movie {
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel implements OnInit, OnDestroy {
  currentIndex = 0;
  private autoplayId?: ReturnType<typeof setInterval>;

  movies: Movie[] = [
    {
      title: 'Kingdom of the Planet of the Apes',
      image:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=90',
      description:
        'A spectacular night at the movies with premium sound, wide-screen action, and reserved luxury seating.',
    },
    {
      title: 'The Fall Guy',
      image:
        'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1800&q=90',
      description:
        'High-energy stunts, bright Hollywood charm, and a cinema experience built for a sold-out crowd.',
    },
    {
      title: 'Inside Out 2',
      image:
        'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1800&q=90',
      description:
        'A colorful big-screen journey for families, friends, and everyone who loves premium cinema comfort.',
    },
    {
      title: 'Bad Boys: Ride or Die',
      image:
        'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1800&q=90',
      description:
        'Explosive action, glowing city lights, and the perfect reason to book your favorite seats tonight.',
    },
  ];

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.movies.length;
    this.restartAutoplay();
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.movies.length) % this.movies.length;
    this.restartAutoplay();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.restartAutoplay();
  }

  ngOnInit(): void {
    this.startAutoplay();
  }

// ngOnDestroy() clears the interval to avoid memory leaks
  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  private startAutoplay(): void {
    this.autoplayId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.movies.length;
    }, 3000);
  }

  private stopAutoplay(): void {
    if (this.autoplayId) {
      clearInterval(this.autoplayId);
    }
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
