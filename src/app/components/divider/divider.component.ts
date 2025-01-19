import { Component } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  template: `
    <div class="divider">
      <div class="line"></div>
      <div class="ornament">❦</div>
      <div class="line"></div>
    </div>
  `,
  styles: `
    .divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 2rem 0;
      width: 100%;
    }

    .line {
      height: 1px;
      width: 100px;
      background-color: var(--primary-text-color);
      opacity: 0.5;
    }

    .ornament {
      color: var(--primary-text-color);
      font-size: 1.5rem;
      opacity: 0.7;
    }

    @media (max-width: 768px) {
      .line {
        width: 60px;
      }
    }
  `,
})
export class DividerComponent {}
