import { Routes } from '@angular/router';
import { DietaryComponent } from './components/dietary/dietary.component';
import { EventsComponent } from './components/events/events.component';
import { LocationComponent } from './components/location/location.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
  { path: '', redirectTo: 'bienvenidos', pathMatch: 'full' },
  { path: 'bienvenidos', component: WelcomeComponent },
  { path: 'confirmar-asistencia', component: RsvpComponent },
  { path: 'como-llegar', component: LocationComponent },
  { path: 'eventos', component: EventsComponent },
  { path: 'restricciones-alimentarias', component: DietaryComponent },
];
