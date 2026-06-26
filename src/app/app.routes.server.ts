import { RenderMode, ServerRoute } from '@angular/ssr';
import { MOVIES } from './data/movies';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'movie/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      MOVIES.map((movie) => ({ id: String(movie.id) })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
