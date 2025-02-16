import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-registry',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <div class="registry-container">
      <h2 class="section-title">{{ 'registry.title' | translate }}</h2>
      <p class="section-description">
        {{ 'registry.description' | translate }}
      </p>
      <div class="account-details">
        <p class="iban">{{ 'registry.account.iban' | translate }}</p>
        <p class="beneficiaries">
          {{ 'registry.account.beneficiaries' | translate }}
        </p>
      </div>
      <p class="bizum-note">
        {{ 'registry.bizum' | translate }}
      </p>

      <div class="contact-info">
        <p class="contact-header">
          {{ 'dresscode.contact.title' | translate }}
        </p>
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
    </div>
  `,
  styles: `
    .registry-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 4rem 2rem;
      text-align: center;
      color: var(--primary-text-color);
    }

    .section-title {
      font-size: 3.5rem;
      margin-bottom: 2rem;
      font-weight: 400;
      color: var(--primary-text-color);
    }

    .section-description {
      font-size: 1.25rem;
      line-height: 1.8;
      margin-bottom: 3rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .account-details {
      margin: 3rem 0;
      border-radius: 8px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .iban {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      letter-spacing: 1px;
    }

    .beneficiaries {
      font-size: 1.25rem;
    }

    .bizum-note {
      font-size: 1.2rem;
      margin: 2rem 0;
      font-style: italic;
      color: var(--primary-text-color);
      opacity: 0.9;
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

    .icon-container {
      display: flex;
      justify-content: center;
      position: relative;
      z-index: 1;

      .dress-code-icon {
      width: 7rem;
      height: 7rem;
      object-fit: contain;
    }
    }


    @media (max-width: 768px) {
      .registry-container {
        padding: 3rem 1rem;
      }

      .section-title {
        font-size: 2.5rem;
      }

      .section-description {
        font-size: 1.1rem;
        padding: 0 1rem;
      }

      .account-details {
        margin: 2rem 1rem;
        padding: 1.5rem;
      }

      .iban {
        font-size: 1.2rem;
      }

      .beneficiaries {
        font-size: 1.1rem;
      }

      .contact-title {
        font-size: 2rem;
      }

      .contact-name {
        font-size: 1.5rem;
      }
    }
  `,
})
export class RegistryComponent {}
