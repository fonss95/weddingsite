import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  standalone: true,
  template: `
    <section class="location">
      <h1>Cómo llegar</h1>
      <div class="location-content">
        <!-- Add map and directions later -->
      </div>
    </section>
  `,
  styleUrls: [],
})
export class LocationComponent {}
