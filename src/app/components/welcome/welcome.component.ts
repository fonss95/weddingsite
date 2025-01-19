import { Component } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CountdownComponent],
  template: `
    <section class="image">
      <img src="blanco-y-negro.jpg" alt="Maria & Alfonso" />
      <div class="image-text">
        <h1>Maria & Alfonso</h1>
        <h4>4 · OCTUBRE · 2025</h4>
      </div>
    </section>

    <section class="welcome">
      <h1>¡Bienvenidos a nuestra boda!</h1>
      <div class="welcome-content">
        <p>¡Que sí! Que nos casamos!!!</p>
        <p>
          ¡Estamos super felices! Nos sentimos en las nubes y queremos compartir
          contigo todo nuestro amor. Por eso estamos preparando una boda que
          hará historia y en la que te lo pasarás genial.
        </p>

        <p>
          Mientras llega el gran día hemos creado esta web con un montón de
          secciones para que estés al día de todo y para compartir nuestra
          historia de amor.
        </p>

        <p>
          Una cosa importante, en la sección asistencia puedes confirmar si vas
          a la boda o no. Confírmanos lo antes posible por favor, que así
          organizarlo todo nos será mucho más fácil.
        </p>

        <p>¡Te esperamos!</p>
      </div>
    </section>

    <app-countdown />

    <section class="footer-section">
      <img src="footer.jpg" alt="footer" />
    </section>
  `,
  styles: `
    .image {
      width: 100%;
      height: 100%;
      overflow: hidden;
      max-height: 800px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-top: 600px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.5;
      }

      .image-text {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        top: 63%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;

        h1 {
          font-size: 4em;
          font-weight: 700;
        }
      }
    }

    .welcome {
      height: 400px;
      display: flex;
      margin: 0 auto;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      background-color: var(--background-color);
      width: 70%;

      .welcome-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .footer-section {
      width: 100%;
      height: 100%;
      overflow: hidden;
      max-height: 400px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
        opacity: 0.5;
        margin-top: -200px;
      }
    }
  `,
})
export class WelcomeComponent {}
