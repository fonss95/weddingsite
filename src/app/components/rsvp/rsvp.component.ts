import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(
          '300ms ease',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
  template: `
    <section class="rsvp-section">
      <h1>Confirma tu asistencia</h1>
      <div class="intro-text">
        <p>
          Hemos preparado este formulario para que nos ayudéis con la
          organización del día, y si tenéis alguna duda, podéis escribirnos a
          cualquiera de nosotros sin problema.
        </p>
      </div>
      <form class="rsvp-form" #rsvpForm="ngForm" (submit)="onSubmit($event)">
        <div class="form-group" [@fadeSlide]>
          <label for="name">Nombre y apellidos</label>
          <input
            type="text"
            id="name"
            [(ngModel)]="formData.name"
            name="name"
            required
            #name="ngModel"
          />
        </div>

        <div class="form-group" [@fadeSlide]>
          <label>¿Vas a venir a la boda?</label>
          <div class="button-group">
            <button
              type="button"
              [class.active]="formData.attending === true"
              (click)="formData.attending = true"
              required
            >
              ¡Sí, allí estaré!
            </button>
            <button
              type="button"
              [class.active]="formData.attending === false"
              (click)="formData.attending = false"
            >
              No podré asistir
            </button>
          </div>
        </div>

        <div *ngIf="formData.attending" class="form-group" [@fadeSlide]>
          <label for="companion">Nombre y apellidos de tu acompañante</label>
          <input
            type="text"
            id="companion"
            [(ngModel)]="formData.companion"
            name="companion"
          />
        </div>

        <div *ngIf="formData.attending" class="form-group" [@fadeSlide]>
          <label>¿Vas a utilizar el servicio de autobuses?</label>
          <div class="button-group">
            <button
              type="button"
              [class.active]="formData.needsBus === true"
              (click)="formData.needsBus = true"
            >
              Sí, lo utilizaré
            </button>
            <button
              type="button"
              [class.active]="formData.needsBus === false"
              (click)="formData.needsBus = false"
            >
              No, iré por mi cuenta
            </button>
          </div>
        </div>

        <div *ngIf="formData.attending" class="form-group" [@fadeSlide]>
          <label for="allergies"
            >¿Tienes tú y/o tu acompañante alguna alergia o restricción
            alimentaria?</label
          >
          <input
            type="text"
            id="allergies"
            [(ngModel)]="formData.allergies"
            name="allergies"
          />
        </div>

        <button type="submit" [@fadeSlide] [disabled]="!isFormValid()">
          Enviar
        </button>
      </form>
    </section>
  `,
  styles: `
    .rsvp-section {
      padding: 1rem;
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    h1 {
      text-align: center;
      margin-bottom: 2rem;
      color: var(--primary-text-color);
      font-size: 2.5rem;
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
      font-size: 1.2rem;
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
        width: 92%;
      }

      .intro-text {
        padding: 0 1rem;
        font-size: 1.2rem;
      }

      .form-group {
        width: 100%;
      }

      input[type="text"],
      textarea {
        width: 100%;
        box-sizing: border-box;
      }

      .button-group {
        padding: 0 1rem;
        width: 100%;
        box-sizing: border-box;
      }

      label {
        padding: 0 1rem;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
      }
    }

    .intro-text {
      max-width: 600px;
      text-align: center;
      margin-bottom: 2rem;
      color: var(--primary-text-color);
      line-height: 1.6;
    }

    .button-group {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
      justify-content: center;
    }

    .button-group button {
      padding: 0.8rem 1.5rem;
      border: 2px solid var(--primary-text-color);
      background: transparent;
      color: var(--primary-text-color);
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1rem;
      font-family: inherit;

      &:hover {
        background: color-mix(in srgb, var(--primary-text-color) 10%, transparent);
      }

      &.active {
        background: var(--primary-text-color);
        color: var(--secondary-text-color);
      }
    }

    @media (max-width: 768px) {
      .button-group {
        flex-direction: column;
        align-items: stretch;
      }
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
  `,
})
export class RsvpComponent {
  formData = {
    name: '',
    attending: null as boolean | null,
    companion: '',
    needsBus: null as boolean | null,
    allergies: '',
  };

  constructor(private http: HttpClient) {}

  onSubmit(event: Event) {
    event.preventDefault();

    const apiUrl =
      'https://3pdljcp63b.execute-api.eu-central-1.amazonaws.com/dev/forms';

    const headers = {
      'Content-Type': 'application/json',
    };

    const body = {
      TableName: 'wedding_form',
      Item: {
        guest_id: { S: new Date().getTime().toString() },
        guest_name: { S: this.formData.name },
        guest_attending: { S: this.formData.attending ? 'Yes' : 'No' },
        guest_companion_name: { S: this.formData.companion },
        bus_needed: { S: this.formData.needsBus ? 'Yes' : 'No' },
        allergies: { S: this.formData.allergies },
      },
    };

    this.http.post(apiUrl, body, { headers }).subscribe({
      next: (response) => {
        console.log('RSVP submitted successfully:', response);
        // You might want to show a success message to the user
        alert('¡Gracias! Tu respuesta ha sido registrada.');

        // Reset the form
        this.formData = {
          name: '',
          attending: null,
          companion: '',
          needsBus: null,
          allergies: '',
        };
      },
      error: (error) => {
        console.error('Error submitting RSVP:', error);
        alert(
          'Lo sentimos, ha habido un error. Por favor, inténtalo de nuevo más tarde.'
        );
      },
    });
  }

  isFormValid(): boolean {
    return !!(
      (
        this.formData.name &&
        this.formData.attending !== null &&
        (!this.formData.attending || // If not attending, companion and bus not required
          this.formData.needsBus !== null)
      ) // If attending, bus selection required
    );
  }
}
