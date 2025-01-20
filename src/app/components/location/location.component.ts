import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  standalone: true,
  template: `
    <section class="location-container">
      <div class="location-content">
        <h1>Cómo llegar</h1>
        <div class="image-container">
          <img src="batres.png" alt="Castillo de Batres aéreo" />
        </div>

        <div class="text-content">
          <h2>Castillo de Batres</h2>
          <p>
            Celebraremos nuestra boda en el majestuoso Castillo de Batres, una
            fortaleza medieval del siglo XV situada en un entorno natural
            privilegiado a tan solo 35 kilómetros de Madrid.
          </p>
          <p>
            Este castillo, declarado Monumento Histórico-Artístico, combina la
            belleza histórica con jardines espectaculares, creando el escenario
            perfecto para nuestro día especial.
          </p>
          <div class="address">
            <p>Paseo de la, Av. de la Fuente del Chorro, 1</p>
            <p>28976 Batres, Madrid</p>
          </div>
          <a
            href="https://maps.app.goo.gl/NN4AKUGEVFuQf4mH6"
            target="_blank"
            class="maps-button"
          >
            Ver en Google Maps
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="location-icon"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .location-container {
      width: 100%;
      max-width: 1200px;
      padding: 2rem;
    }

    .location-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--primary-text-color);
    }

    .image-container {
      width: 100%;
      max-width: 800px;
      overflow: hidden;
      border-radius: 8px;

      &.second-image {
        margin-top: 2rem;

        filter: grayscale(100%);
        opacity: 0.5;
      }
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }


    .text-content {
      max-width: 600px;
      text-align: center;

      h2 {
        color: var(--primary-text-color);
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 1rem;
        line-height: 1.6;
        color: var(--primary-text-color);
      }
    }

    .address {
      margin: 2rem 0;
      font-style: italic;

      p {
        margin: 0.5rem 0;
      }
    }

    .maps-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      background-color: var(--primary-text-color);
      color: var(--secondary-text-color);
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.3s ease;
      font-weight: 500;
      margin-top: 1rem;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .location-icon {
        width: 1.2rem;
        height: 1.2rem;
      }
    }

    @media (max-width: 768px) {
      .location-container {
        padding: 0;
      }

      h1 {
        font-size: 2rem;
      }

      .text-content {
        padding: 0 1rem;
      }
    }
  `,
})
export class LocationComponent {}
