import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { LocationComponent } from './components/location/location.component';
import { EventsComponent } from './components/events/events.component';
import { DietaryComponent } from './components/dietary/dietary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    WelcomeComponent,
    RsvpComponent,
    LocationComponent,
    EventsComponent,
    DietaryComponent,
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

      <section id="dietary">
        <app-dietary />
      </section>
    </main>
  `,
  styles: `
    main {
      margin-top: 60px;
      scroll-behavior: smooth;
    }

    section {
      min-height: 100vh;
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
})
export class AppComponent {
  title = 'wedding-site';
}
