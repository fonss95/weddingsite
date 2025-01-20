import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="location-container">
      <div class="location-content">
        <h1>Cómo llegar</h1>
        <div class="image-container">
          <img src="batres.png" alt="Castillo de Batres aéreo" />
        </div>

        <div class="text-content">
          <h2>
            Tanto la ceremonia como la posterior celebracion tendran lugar en el
            Castillo de Batres.
          </h2>

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

          <div class="transport-section">
            <h2>Opciones de transporte</h2>

            <div class="transport-options">
              <div class="transport-option">
                <h3>Coche</h3>
                <p>
                  Puedes ir en tu propio vehículo, hay un parking para 60 coches
                  por lo que no habrá problema de aparcamiento.
                </p>
              </div>

              <div class="transport-option">
                <h3>Bus</h3>
                <p>
                  Ponemos un servicio de autobús para trasladar a todos los
                  invitados.
                </p>
                <div class="bus-schedule">
                  <div class="schedule-item">
                    <span class="time">Ida: 17:00</span>
                    <span class="location">Salida de Atocha</span>
                  </div>
                  <div class="schedule-item">
                    <span class="time">Vuelta: 1:00*</span>
                    <span class="location">Destino Atocha</span>
                    <span class="note">*Si hay suficiente demanda</span>
                  </div>
                  <div class="schedule-item">
                    <span class="time">Vuelta: 4:00</span>
                    <span class="location">Destino Atocha</span>
                    <span class="note">Este es fijo</span>
                  </div>
                </div>
                <p class="important-note">
                  Si vas a coger la opción de bus, es muy importante que nos lo
                  hagas saber en el formulario RSVP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .location-container {
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

    .transport-section {
      margin-top: 4rem;
      width: 100%;
      max-width: 800px;
    }

    .transport-section h2 {
      text-align: center;
      margin-bottom: 2rem;
    }

    .transport-options {
      display: flex;
      gap: 2rem;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
    }

    .transport-option {
      flex: 1;
      min-width: 300px;
      max-width: 400px;
      padding: 2rem;

      background-color: color-mix(in srgb, var(--background-color) 85%, white);
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .transport-option h3 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--primary-text-color);
      justify-content: center;
      font-size: 1.8rem;
    }

    .transport-icon {
      width: 24px;
      height: 24px;
      color: var(--primary-text-color);
    }

    .bus-schedule {
      margin: 1.5rem 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.5rem;
    }

    .schedule-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .time {
      font-weight: bold;
      color: var(--primary-text-color);
    }

    .location {
      font-size: 0.9rem;
    }

    .note {
      font-size: 0.8rem;
      font-style: italic;
      opacity: 0.8;
    }

    .important-note {
      margin-top: 1.5rem;
      font-weight: 500;
      color: var(--primary-text-color);
      font-style: italic;
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

      .transport-option {
        min-width: 100%;
      }
    }
  `,
})
export class LocationComponent {}
