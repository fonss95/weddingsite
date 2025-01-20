import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dress-code',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="dress-code-section">
      <h2>Dresscode</h2>
      <div class="dress-code-content">
        <p>
          El dresscode es formal, Alfonso y los testigos irán de chaqué. Aquí te
          dejamos unos ejemplos de bodas de tarde, teniendo en cuenta el tiempo
          que suele hacer en estas fechas.
        </p>
        <div class="inspiration-links">
          <a
            href="https://pin.it/6ZDOi38wp"
            target="_blank"
            rel="noopener noreferrer"
            class="inspiration-button"
          >
            <span>Inspiración para invitados</span>
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
            <span>Inspiración para invitadas</span>
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
      <div class="contact-info">
        <p class="contact-header">¿Alguna duda? Escríbenos.</p>
        <div class="contact-details">
          <div class="contact-person">
            <p class="name">María</p>
            <a href="tel:+34617674229" class="phone-number">+34 617 674 229</a>
          </div>
          <div class="contact-person">
            <p class="name">Alfonso</p>
            <a href="tel:+34682238570" class="phone-number">+34 682 238 570</a>
          </div>
        </div>
      </div>
      <div class="icon-container">
        <img src="favicon.png" alt="Wedding icon" class="dress-code-icon" />
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
    }

    .contact-info {
      margin-top: 3rem;
      text-align: center;
    }

    .contact-header {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .contact-details {
      display: flex;
      justify-content: center;
      gap: 3rem;
    }

    .contact-person {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;
    }

    .name {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 500;
    }

    .phone-number {
      color: var(--primary-text-color);
      text-decoration: none;
      font-size: 1.1rem;
      transition: color 0.3s ease;
    }

    .phone-number:hover {
      color: var(--accent-color);
    }

    @media (max-width: 768px) {
      .contact-details {
        gap: 2rem;
      }

      .name {
        font-size: 1.1rem;
      }

      .phone-number {
        font-size: 1rem;
      }
    }

    .icon-container {
      display: flex;
      justify-content: center;
      position: relative;
      z-index: 1;
    }

    .dress-code-icon {
      width: 7rem;
      height: 7rem;
      object-fit: contain;
    }

    @media (max-width: 768px) {
      .dress-code-icon {
        width: 5rem;
        height: 5rem;
      }
    }
  `,
})
export class DressCodeComponent {}
