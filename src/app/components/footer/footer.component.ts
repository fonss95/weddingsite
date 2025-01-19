import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <section class="footer-section">
      <img src="footer.jpg" alt="footer" />
    </section>
  `,
  styles: `
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
export class FooterComponent {}
