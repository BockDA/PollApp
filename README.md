# PollApp

## Vereinbarte Entscheidungen

### Bald endende Umfragen („Ending soon surveys“)
- Angezeigt werden die **3 laufenden Umfragen mit dem frühesten Enddatum**, unabhängig davon, wie weit das Ende entfernt ist (kein festes Zeitfenster).
- Nur Umfragen mit Deadline; sortiert nach Enddatum, frühestes Ende zuerst. Umfragen ohne Deadline (optionales Feld) erscheinen hier nicht.
- Gibt es weniger als 3 passende Umfragen, werden nur die vorhandenen Karten gezeigt.
- Gibt es keine passende Umfrage, erscheint stattdessen eine einzelne Hinweiskarte („No surveys ending soon“).
- Die Anzahl 3 stammt aus dem Figma-Design, nicht aus der Checkliste.
- Mobil: Die Karten liegen nebeneinander und lassen sich seitlich wischen (horizontales Scrollen).

### Anzeige der Deadline („Ends in X Day(s)“)
- Verbleibende Zeit wird auf ganze Tage **aufgerundet**: Angefangene 24 Stunden zählen als 1 Tag, „0 Days“ erscheint nie.
- Ohne Deadline wird „No deadline“ angezeigt (eigener Text, nicht aus Figma).

## Extras (nicht Teil der Checkliste)
- Startseite: Die Illustration im Einleitungsbereich wechselt beim Überfahren mit der Maus (Hover) von `visual-3.png` zu `visual-4.png`. Umsetzung nur mit CSS (`:hover` + `opacity`).

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.26.

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

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

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
