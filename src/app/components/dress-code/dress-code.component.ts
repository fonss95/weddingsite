import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-dress-code',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="dress-code-section">
      <h2>{{ 'dresscode.title' | translate }}</h2>
      <div class="dress-code-content">
        <p>{{ 'dresscode.description' | translate }}</p>
        <div class="inspiration-links">
          <a
            href="https://pin.it/6ZDOi38wp"
            target="_blank"
            rel="noopener noreferrer"
            class="inspiration-button"
          >
            <span>{{ 'dresscode.men' | translate }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="link-icon"
            >
              <path
                d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.207 14.207L9.793 12.793L17.585 5H13V3H21Z"
              />
            </svg>
          </a>
          <a
            href="https://de.pinterest.com/mariaguerrapellon/invitadas/?invite_code=b536b973dfe942bd8301f6ae7faadf00&sender=715791071933844096"
            target="_blank"
            rel="noopener noreferrer"
            class="inspiration-button"
          >
            <span>{{ 'dresscode.women' | translate }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="link-icon"
            >
              <path
                d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.207 14.207L9.793 12.793L17.585 5H13V3H21Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .dress-code-section {
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
      margin-bottom: 2rem;
      font-weight: normal;
    }

    .dress-code-content {
      max-width: 800px;
      text-align: center;
    }

    p {
      margin-bottom: 2rem;
      line-height: 1.6;
      color: var(--primary-text-color);
      font-size: 1.2rem;
    }

    .inspiration-links {
      display: flex;
      gap: 2rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .inspiration-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      background-color: var(--primary-text-color);
      color: var(--secondary-text-color);
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.3s ease;
      font-size: 1.1rem;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
    }

    .link-icon {
      width: 1.2rem;
      height: 1.2rem;
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
      }

      p {
        font-size: 1.1rem;
        padding: 0 1rem;
      }

      .inspiration-links {
        flex-direction: column;
        gap: 1rem;
        padding: 0 1rem;
      }

      .inspiration-button {
        justify-content: center;
      }

      .dress-code-icon {
        width: 5rem;
        height: 5rem;
      }
    }
  `,
})
export class DressCodeComponent {}
