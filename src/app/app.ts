import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Import the module
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Add it to the imports array
  imports: [RouterOutlet, MatTabsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('cenima');
}
