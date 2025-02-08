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

## Deployment to GitHub Pages

1. Install the gh-pages package if not already installed:

```bash
npm install -g angular-cli-ghpages
```

2. Create a production build with the correct base href:

```bash
ng build --configuration production --base-href=https://fonss95.github.io/weddingsite/"
```

3. Deploy to GitHub Pages:

```bash
npx angular-cli-ghpages --dir=dist/weddingsite/browser
```

Note: Make sure to replace `[username]` with your GitHub username and `[repository-name]` with your repository name in the base-href URL.

## Project Structure

- `src/app/components/` - Website components (RSVP, dress code, location, etc.)
- `public/` - Static assets (images, fonts, etc.)

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [GitHub Pages Documentation](https://pages.github.com/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
