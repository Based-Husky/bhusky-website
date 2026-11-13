# BhuskyWebsite

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Publishing to bhusky.net

The live site is served by GitHub Pages from the [Based-Husky.github.io](https://github.com/Based-Husky/Based-Husky.github.io) repository.

1. Build: `npm ci` then `npx ng build` (Angular 22 needs Node.js 22.22+, 24.15+ or 26+).
2. Copy everything in `dist/bhusky-website/browser/` into the root of `Based-Husky.github.io`, keeping its `CNAME` file.
3. Merge on `main`: GitHub Pages publishes it in about a minute.

Notes:
- The Red Hat Display font is self-hosted (`public/fonts/`), so the build downloads nothing from Google Fonts.
- `/donate/` (Feed the Bowl, Base Pay donations to the charity wallet) is a standalone static page in `public/donate/`, outside the Angular app.
- `/impact/` (every donation with its proof) is a standalone static page in `public/impact/`. To add a donation, copy a `<li class="don">` card to the top of the list and update the totals, the rescue cards and the meta description. Then update the same totals in `impact` in `src/app/app.ts` (home page pill and About section).

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
