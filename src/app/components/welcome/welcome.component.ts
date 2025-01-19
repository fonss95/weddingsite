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
        <p>
          Bienvenidos! Estamos deseando compartir con vosotros este dia que
          esperamos sea muy especial.
        </p>

        <p>¡Te esperamos!</p>
      </div>
    </section>

    <app-countdown />
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
      height: 200px;
      display: flex;
      margin: 0 auto;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      background-color: var(--background-color);
      width: 70%;

      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--primary-text-color);
      }

      .welcome-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  `,
})
export class WelcomeComponent {}
