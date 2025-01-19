import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <nav>
        <div class="nav-container">
          <div class="menu-icon" (click)="toggleMenu()">
            <div class="bar" [class.open]="isMenuOpen"></div>
            <div class="bar" [class.open]="isMenuOpen"></div>
            <div class="bar" [class.open]="isMenuOpen"></div>
          </div>
          <div class="nav-links" [class.open]="isMenuOpen">
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
      padding: 2rem;
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
      text-align: center;
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

    .menu-icon {
      display: none;
      flex-direction: column;
      gap: 6px;
      cursor: pointer;
      padding: 10px;
      z-index: 1001;
    }

    .bar {
      width: 30px;
      height: 3px;
      background-color: var(--primary-text-color);
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      .menu-icon {
        display: flex;
        position: fixed;
        top: 10px;
        right: 10px;
      }

      .menu-icon .bar.open:nth-child(1) {
        transform: rotate(45deg) translate(7px, 7px);
      }

      .menu-icon .bar.open:nth-child(2) {
        opacity: 0;
      }

      .menu-icon .bar.open:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }

      .nav-links {
        position: fixed;
        top: -100vh;
        left: 0;
        width: 100%;
        flex-direction: column;
        gap: 0;
        background-color: var(--background-color);
        padding: 1rem 0;
        transition: top 0.3s ease;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
      }

      .nav-links.open {
        top: 0;
      }

      .nav-links a {
        width: 100%;
        font-size: 1.1rem;
        padding: 1rem;
      }

      .nav-links a.active::after {
        width: 20%;
      }

      .nav-links a:hover::after {
        width: 30%;
      }
    }
  `,
})
export class HeaderComponent {
  activeSection: string = 'welcome';
  isMenuOpen: boolean = false;
  private headerOffset = 60;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updateActiveSection();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
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
      this.isMenuOpen = false;
    }
  }
}
