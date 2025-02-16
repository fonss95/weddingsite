import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  providers: [TranslatePipe],
  imports: [CommonModule, FormsModule, HttpClientModule, TranslatePipe],
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
      <h1>{{ 'rsvp.title' | translate }}</h1>
      <div class="intro-text">
        <p>{{ 'rsvp.intro' | translate }}</p>
      </div>
      <form class="rsvp-form" #rsvpForm="ngForm" (submit)="onSubmit($event)">
        <div class="form-group" [@fadeSlide]>
          <label for="name">{{ 'rsvp.fullName' | translate }}</label>
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
          <label>{{ 'rsvp.attending.question' | translate }}</label>
          <div class="button-group">
            <button
              type="button"
              [class.active]="formData.attending === true"
              (click)="formData.attending = true"
              required
            >
              {{ 'rsvp.attending.yes' | translate }}
            </button>
            <button
              type="button"
              [class.active]="formData.attending === false"
              (click)="formData.attending = false"
            >
              {{ 'rsvp.attending.no' | translate }}
            </button>
          </div>
        </div>

        <div *ngIf="formData.attending" class="form-group" [@fadeSlide]>
          <label for="companion">{{ 'rsvp.companion' | translate }}</label>
          <input
            type="text"
            id="companion"
            [(ngModel)]="formData.companion"
            name="companion"
          />
        </div>

        <div *ngIf="formData.attending" class="form-group" [@fadeSlide]>
          <label>{{ 'rsvp.bus.question' | translate }}</label>
          <div class="button-group">
            <button
              type="button"
              [class.active]="formData.needsBus === true"
              (click)="formData.needsBus = true"
            >
              {{ 'rsvp.bus.yes' | translate }}
            </button>
            <button
              type="button"
              [class.active]="formData.needsBus === false"
              (click)="formData.needsBus = false"
            >
              {{ 'rsvp.bus.no' | translate }}
            </button>
          </div>
        </div>

        <div *ngIf="formData.needsBus" class="form-group" [@fadeSlide]>
          <label>{{ 'rsvp.bus.schedule.question' | translate }}</label>
          <div class="button-group">
            <button
              type="button"
              [class.active]="formData.busSchedule === 'first'"
              (click)="formData.busSchedule = 'first'"
            >
              {{ 'rsvp.bus.schedule.early' | translate }}
            </button>
            <button
              type="button"
              [class.active]="formData.busSchedule === 'last'"
              (click)="formData.busSchedule = 'last'"
            >
              {{ 'rsvp.bus.schedule.late' | translate }}
            </button>
          </div>
        </div>

        <div *ngIf="formData.attending" class="form-group" [@fadeSlide]>
          <label for="allergies">{{ 'rsvp.allergies' | translate }}</label>
          <input
            type="text"
            id="allergies"
            [(ngModel)]="formData.allergies"
            name="allergies"
          />
        </div>

        <div *ngIf="formData.attending" class="form-group" [@fadeSlide]>
          <label for="songRequest">{{ 'rsvp.song' | translate }}</label>
          <input
            type="text"
            id="songRequest"
            [(ngModel)]="formData.songRequest"
            name="songRequest"
          />
        </div>

        <div *ngIf="formData.attending" class="form-group" [@fadeSlide]>
          <label for="comments">{{ 'rsvp.comments' | translate }}</label>
          <textarea
            id="comments"
            [(ngModel)]="formData.comments"
            name="comments"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" [@fadeSlide] [disabled]="!isFormValid()">
          {{ 'rsvp.submit' | translate }}
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
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
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
      background: color-mix(in srgb, var(--background-color) 95%, black);
      transition: all 0.3s ease;
      color: var(--primary-text-color);
    }

    input[type="text"]:focus,
    textarea:focus {
      outline: none;
      border-color: var(--primary-text-color);
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
      background: color-mix(in srgb, var(--background-color) 98%, black);
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
    busSchedule: '',
    allergies: '',
    songRequest: '',
    comments: '',
  };

  constructor(private http: HttpClient, private translatePipe: TranslatePipe) {}

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
        bus_schedule: { S: this.formData.busSchedule },
        allergies: { S: this.formData.allergies },
        song_request: { S: this.formData.songRequest },
        comments: { S: this.formData.comments },
      },
    };

    this.http.post(apiUrl, body, { headers }).subscribe({
      next: (response) => {
        console.log('RSVP submitted successfully:', response);
        alert(this.translatePipe.transform('rsvp.success'));

        // Reset the form
        this.formData = {
          name: '',
          attending: null,
          companion: '',
          needsBus: null,
          busSchedule: '',
          allergies: '',
          songRequest: '',
          comments: '',
        };
      },
      error: (error) => {
        console.error('Error submitting RSVP:', error);
        alert(this.translatePipe.transform('rsvp.error'));
      },
    });
  }

  isFormValid(): boolean {
    return !!(
      (
        this.formData.name &&
        this.formData.attending !== null &&
        (!this.formData.attending || // If not attending, companion and bus not required
          (this.formData.needsBus !== null &&
            this.formData.busSchedule !== null))
      ) // If attending, bus selection required
    );
  }
}
