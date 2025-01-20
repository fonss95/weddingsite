import { Component } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  template: `
    <div class="divider">
      <div class="line"></div>
      <div class="dot"></div>
      <div class="line"></div>
    </div>
  `,
  styles: `
    .divider {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 2rem 0;
    }

    .line {
      height: 1px;
      width: 100px;
      background-color: var(--primary-text-color);
      opacity: 0.5;
    }

    .dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: var(--primary-text-color);
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      .line {
        width: 60px;
      }
    }
  `,
})
export class DividerComponent {}
