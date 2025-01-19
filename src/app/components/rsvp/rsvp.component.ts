import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="rsvp-container">
      <h1>Confirma tu asistencia</h1>
      <form class="rsvp-form" (submit)="onSubmit($event)">
        <div class="form-group" [@fadeSlide]="0">
          <label for="name">Nombre y apellidos</label>
          <input
            type="text"
            id="name"
            [(ngModel)]="formData.name"
            name="name"
            required
          />
        </div>

        <div class="form-group" [@fadeSlide]="1">
          <label>¿Vas a venir a la boda?</label>
          <div class="radio-group">
            <label>
              <input
                type="radio"
                name="attending"
                [(ngModel)]="formData.attending"
                [value]="true"
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="attending"
                [(ngModel)]="formData.attending"
                [value]="false"
              />
              No
            </label>
          </div>
        </div>

        <div *ngIf="formData.attending" class="form-group" [@fadeSlide]="2">
          <label for="companion">Nombre y apellidos de tu acompañante</label>
          <input
            type="text"
            id="companion"
            [(ngModel)]="formData.companion"
            name="companion"
          />
        </div>

        <div *ngIf="formData.attending" class="form-group" [@fadeSlide]="3">
          <label>¿Vas a utilizar el servicio de autobuses?</label>
          <div class="radio-group">
            <label>
              <input
                type="radio"
                name="bus"
                [(ngModel)]="formData.needsBus"
                [value]="true"
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="bus"
                [(ngModel)]="formData.needsBus"
                [value]="false"
              />
              No
            </label>
          </div>
        </div>

        <div class="form-group" [@fadeSlide]="4">
          <label for="allergies">¿Tienes alguna alergia?</label>
          <textarea
            id="allergies"
            [(ngModel)]="formData.allergies"
            name="allergies"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" [@fadeSlide]="5">Enviar</button>
      </form>
    </section>
  `,
  styles: `
    .rsvp-container {
      width: 100%;
      max-width: 600px;
      padding: 2rem;
    }

    h1 {
      text-align: center;
      margin-bottom: 2rem;
      color: var(--primary-text-color);
    }

    .rsvp-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    label {
      color: var(--primary-text-color);
      font-size: 1.1rem;
    }

    input[type="text"],
    textarea {
      padding: 0.8rem;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      font-size: 1rem;
      background: color-mix(in srgb, var(--background-color) 85%, black);
      transition: all 0.3s ease;
      color: var(--primary-text-color);
    }

    input[type="text"]:focus,
    textarea:focus {
      outline: none;
      border-color: var(--primary-text-color);
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
      background: color-mix(in srgb, var(--background-color) 90%, black);
    }

    .radio-group {
      display: flex;
      gap: 2rem;
      margin-top: 0.5rem;
    }

    .radio-group label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    button {
      padding: 1rem 2rem;
      background: var(--primary-text-color);
      color: var(--secondary-text-color);
      border: none;
      border-radius: 4px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 1rem;
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
      .rsvp-container {
        padding: 1rem;
      }

      .radio-group {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `,
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        }),
        animate(
          '0.5s {{delay}}s ease',
          style({
            opacity: 1,
            transform: 'translateY(0)',
          })
        ),
      ]),
    ]),
  ],
})
export class RsvpComponent {
  formData = {
    name: '',
    attending: null as boolean | null,
    companion: '',
    needsBus: null as boolean | null,
    allergies: '',
  };

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted:', this.formData);
    // Here you would typically send the data to your backend
  }
}
