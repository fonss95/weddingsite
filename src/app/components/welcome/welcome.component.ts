import { Component } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CountdownComponent, CommonModule, TranslatePipe],
  template: `
    <section class="image">
      <img src="blanco-y-negro.jpg" alt="Maria & Alfonso" />
      <div class="image-text">
        <h1>Maria & Alfonso</h1>
        <h4>{{ 'welcome.date' | translate }}</h4>
      </div>
    </section>

    <section class="welcome">
      <h1>{{ 'welcome.title' | translate }}</h1>
      <div class="welcome-content">
        <p>{{ 'welcome.description' | translate }}</p>
        <p>{{ 'welcome.cta' | translate }}</p>
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
      position: relative;

      img {
        margin-top: 40vw;
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
        width: 100%;

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
      text-align: center;

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

    @media only screen and (max-width: 1500px) and (min-width: 768px) {
      .image {
        img {
         margin-top: 30vw;
        }
      }
   }




    @media (max-width: 768px) {
      .image {
        max-height: 650px;

        img {
          margin-top: 0;
          height: 100vh;
          object-position: center 35%;
        }

        .image-text {
          width: 100%;
          top: 50%;

          h1 {
            font-size: 2.5em;
          }

          h4 {
            font-size: 1.5rem;
          }
        }
      }

      .welcome {
        height: 400px;
      }
    }

  `,
})
export class WelcomeComponent {
  constructor(private languageService: LanguageService) {
    // We can remove the language subscription since we're using the translation pipe now
  }
}
