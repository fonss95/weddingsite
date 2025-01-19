import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <nav>
        <div class="nav-container">
          <div class="nav-links">
            <a
              (click)="scrollToSection('welcome')"
              [class.active]="activeSection === 'welcome'"
              >¡Bienvenidos!</a
            >
            <a
              (click)="scrollToSection('rsvp')"
              [class.active]="activeSection === 'rsvp'"
              >Confirma tu asistencia</a
            >
            <a
              (click)="scrollToSection('location')"
              [class.active]="activeSection === 'location'"
              >Cómo llegar</a
            >
            <a
              (click)="scrollToSection('events')"
              [class.active]="activeSection === 'events'"
              >Eventos</a
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
      position: sticky;
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
      font-size: 1.3rem;
      transition: all 0.3s ease;
      cursor: pointer;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      position: relative;
    }

    .nav-links a:hover {
      color: #666;
    }

    .nav-links a.active {
      font-weight: bold;
    }

    .nav-links a.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 30%;
      height: 2px;
      background-color: var(--primary-text-color);
      transition: width 0.3s ease;
    }

    .nav-links a:hover::after {
      width: 60%;
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
  activeSection: string = 'welcome';
  private headerOffset = 60; // Approximate header height

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updateActiveSection();
  }

  private updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach((section) => {
      const sectionElement = section as HTMLElement;
      const sectionTop = sectionElement.offsetTop - this.headerOffset;
      const sectionHeight = sectionElement.clientHeight;
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute('id') || '';
      }
    });

    if (currentSection !== this.activeSection && currentSection !== '') {
      this.activeSection = currentSection;
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - this.headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
      this.activeSection = sectionId;
    }
  }
}
