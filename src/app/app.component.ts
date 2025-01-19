import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { LocationComponent } from './components/location/location.component';
import { EventsComponent } from './components/events/events.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    WelcomeComponent,
    RsvpComponent,
    LocationComponent,
    EventsComponent,
    FooterComponent,
  ],
  template: `
    <app-header />
    <main>
      <section id="welcome">
        <app-welcome />
      </section>

      <section id="rsvp">
        <app-rsvp />
      </section>

      <section id="location">
        <app-location />
      </section>

      <section id="events">
        <app-events />
      </section>
    </main>
    <app-footer />
  `,
  styles: `
    main {
      scroll-behavior: smooth;
      width: 100%;
      overflow-x: hidden;
    }

    section {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    @media (max-width: 768px) {
      section {
        padding: 0;
      }
    }
  `,
})
export class AppComponent {
  title = 'wedding-site';
}
