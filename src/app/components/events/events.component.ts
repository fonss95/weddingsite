import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="events-section">
      <h2>{{ 'events.title' | translate }}</h2>
      <img
        [src]="'events.picture' | translate"
        alt="Wedding Events Timeline"
        class="events-image"
      />
    </section>
  `,
  styles: [
    `
      .events-section {
        padding: 1rem;
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h2 {
        font-family: var(--secondary-font);
        color: var(--primary-text-color);
        font-size: 3rem;
        margin-bottom: 0;
        font-weight: normal;
      }

      .events-image {
        width: 100%;
        max-width: 800px;
        height: auto;
      }

      @media (max-width: 768px) {
        h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
      }
    `,
  ],
})
export class EventsComponent {}
