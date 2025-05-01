# Wedding Website

A modern wedding website built with Angular that allows guests to view wedding details, RSVP, check the dress code, and get location information.

## Features

- Wedding event details and schedule
- RSVP system for guests
- Dress code guidelines
- Location information and directions
- Responsive design for mobile and desktop viewing

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## Local Development

1. Clone the repository:

```bash
git clone [repository-url]
cd weddingsite
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any source files.

## Development Tools

Generate new components using Angular CLI:

```bash
ng generate component components/new-component
```

Other useful generation commands:

```bash
ng generate service services/new-service
ng generate pipe pipes/new-pipe
```

## Deployment to GitHub Pages with Custom Domain

1. Install the gh-pages package if not already installed:

```bash
npm install -g angular-cli-ghpages
```

2. Configure your custom domain:

   - Create a `CNAME` file in the `public` directory with your domain name (e.g., `mariayalfon.es`)
   - Add the CNAME file to your repository
   - Configure your DNS settings to point to GitHub Pages
   - Enable HTTPS in GitHub Pages settings

3. Deploy to GitHub Pages:

```bash
ng deploy --base-href=https://mariayalfon.es/
```

Note: The base href is automatically configured in the `angular.json` file for production builds. Make sure your custom domain is properly set up in GitHub Pages settings before deploying.

## Project Structure

- `src/app/components/` - Website components (RSVP, dress code, location, etc.)
- `public/` - Static assets (images, fonts, etc.) and CNAME file

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Pages Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
