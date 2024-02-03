# Metaform

> Metaform is a form builder. It arises from the need to auto-generate forms from javascript structures.
> This allows you to obtain the table structure of a database and create the form.

## Quick Start

### Install

```sh
npm install metaform
```

### Add in App.vue

```js
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
// ...

import metaform from "metaform"; // ← import metaform
import "metaform/styles.css"; // ← import metaform styles

createApp(App)
  .use(metaform) // ← use in createApp
  .mount("#app");
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Format

```sh
bunx @biomejs/biome format --write ./src
```

### Use

- [Builder - Vite](https://vitejs.dev/)
- [Framework - Vue](https://vuejs.org/)
- [Components - Vuetify](https://vuetifyjs.com/)
- [Components(Only calendar) - PrimeVue](https://primevue.org/calendar/#api.calendar)
- [Styling - Tailwind](https://tailwindcss.com/)
- [Icons - Pictogrammers](https://pictogrammers.com/)
- [Linter && Formatter - Biome](https://biomejs.dev/)
