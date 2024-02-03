<p align="center">
  <a href="https://github.com/alexmorenograu/vormix" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://exposerjs-docs.onrender.com/vormix.png" alt="Vormix logo">
  </a>
</p>
<p align="center">
  <a href="https://npmjs.com/package/vormix"><img src="https://img.shields.io/npm/v/vormix.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/previous-releases"><img src="https://img.shields.io/node/v/vormix.svg" alt="node compatibility"></a>
</p>
<br/>

# Vormix

> Vormix is a form builder 📝. It arises from the need to auto-generate forms from javascript structures.
> This allows you to obtain the table structure of a database and create the form.
> Vormix is also the fusion of the name of vue + form + remix.

## Quick Start

### Install

```sh
npm install vormix
```

### Add in App.vue

```js
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
// ...

import vormix from "vormix"; // ← import vormix
import "vormix/styles.css"; // ← import vormix styles

createApp(App)
  .use(vormix) // ← use in createApp
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
