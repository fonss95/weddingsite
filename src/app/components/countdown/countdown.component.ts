import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="countdown">
      <div class="countdown-item">
        <span class="number">{{ days | number : '2.0' }}</span>
        <span class="label">{{ 'countdown.days' | translate }}</span>
      </div>
      <div class="countdown-item">
        <span class="number">{{ hours | number : '2.0' }}</span>
        <span class="label">{{ 'countdown.hours' | translate }}</span>
      </div>
      <div class="countdown-item">
        <span class="number">{{ minutes | number : '2.0' }}</span>
        <span class="label">{{ 'countdown.minutes' | translate }}</span>
      </div>
      <div class="countdown-item">
        <span class="number">{{ seconds | number : '2.0' }}</span>
        <span class="label">{{ 'countdown.seconds' | translate }}</span>
      </div>
    </div>
  `,
  styles: `
    .countdown {
      display: flex;
      justify-content: center;
      gap: 2rem;
      padding: 2rem;
      background-color: var(--background-color);
    }

    .countdown-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 100px;
    }

    .number {
      font-size: 3rem;
      font-weight: bold;
      color: var(--primary-text-color);
    }

    .label {
      font-size: 1rem;
      color: var(--primary-text-color);
      text-transform: uppercase;
      margin-top: 0.5rem;
    }

    @media (max-width: 768px) {
      .countdown {
        gap: 1rem;
      }

      .countdown-item {
        min-width: 70px;
      }

      .number {
        font-size: 2rem;
      }

      .label {
        font-size: 0.8rem;
      }
    }
  `,
})
export class CountdownComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private timer: any;
  private weddingDate = new Date('2025-10-04T18:00:00');

  ngOnInit() {
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.weddingDate.getTime() - now;

    if (distance < 0) {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      clearInterval(this.timer);
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}
