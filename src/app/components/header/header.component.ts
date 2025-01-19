import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header>
      <nav>
        <div class="nav-container">
          <div class="nav-links">
            <a routerLink="/bienvenidos">¡Bienvenidos!</a>
            <a routerLink="/confirmar-asistencia">Confirma tu asistencia</a>
            <a routerLink="/como-llegar">Cómo llegar</a>
            <a routerLink="/eventos">Eventos</a>
            <a routerLink="/restricciones-alimentarias"
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
      color: #333;
      font-size: 1rem;
      transition: color 0.3s ease;
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
export class HeaderComponent {}
