import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <nav>
        <div class="nav-container">
          <div class="nav-links">
            <a (click)="scrollToSection('welcome')">¡Bienvenidos!</a>
            <a (click)="scrollToSection('rsvp')">Confirma tu asistencia</a>
            <a (click)="scrollToSection('location')">Cómo llegar</a>
            <a (click)="scrollToSection('events')">Eventos</a>
            <a (click)="scrollToSection('dietary')"
              >Restricciones alimentarias</a
            >
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: `
    header {
      background-color: var(--background-color);
      color: var(--primary-text-color);
      font-weight: 200;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 100%;
      top: 0;
      z-index: 1000;
    }

    nav {
      padding: 1rem 2rem;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
      color: #333;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--primary-text-color);
      font-size: 1rem;
      transition: color 0.3s ease;
      cursor: pointer;
    }

    .nav-links a:hover {
      color: #666;
    }

    @media (max-width: 768px) {
      .nav-container {
        flex-direction: column;
        gap: 1rem;
      }

      .nav-links {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `,
})
export class HeaderComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
