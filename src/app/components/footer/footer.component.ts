import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <section class="footer-section">
      <img src="footer-v2.jpg" alt="footer" />
    </section>
  `,
  styles: `
    .footer-section {
      width: 100%;
      height: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
        opacity: 0.5;
      }
    }
  `,
})
export class FooterComponent {}
