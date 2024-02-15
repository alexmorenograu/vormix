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

### Use in code

<p align="center">
    <img width="700" src="https://exposerjs-docs.onrender.com/vormix-readme.png" alt="Vormix explanation">
</p>

Code

```vue
<template>
  <Vormix v-model="myModel" />
</template>
<script setup>
import { ref } from "vue";
const myModel = ref({
  name: "Book", // ← Title (or name of entity)
  fields: [
    {
      label: "Name", // ← Label of field
      name: "name", // ← Name of field
      fieldType: "String", // ← Field type can be [String, Int, Boolean, Datetime, Realtion]
    },
    {
      name: "likeVormix",
      fieldType: "Boolean",
    },
    {
      name: "age",
      fieldType: "Int",
      default: 23, // ← Default value (Only apply if when <Vormix :is-new="true"/>)
    },
    {
      name: "birth",
      fieldType: "Datetime",
      isRequired: true, // ← If field is Required
    },
    {
      name: "country",
      fieldType: "Relation",
      values: [
        { id: 1, name: "EEUU" },
        { id: 2, name: "Spain" },
      ], // ← For relations
    },
  ],
  data: {
    name: "This is a current value", // ← Current value
  },
});
</script>
```

### Vormix v-model fields props:

```js
    {
      label, // ← Label of field (If it is null, it is given the value of "name" field)
      name, // ← Name of field (Required)
      fieldType, // ← Field type can be [String, Int, Boolean, Datetime, Realtion] (Required)
      isRequired, // ← If field is Required (default false)
      default, // ← Default value (Only apply if when <Vormix :is-new="true"/>)
      values, // ← Only required for relations
    }
```

### Vormix component props:

```js
{
    isNew: {
        type: Boolean,
        default: true,
    },
    saveFn: {
        type: Function,
    },
    saveBtn: {
        type: Boolean,
        default: true,
    },
    resetBtn: {
        type: Boolean,
        default: true,
    },
    defaultBtn: {
        type: Boolean,
        default: true,
    },
    parser: {
        type: Function,
        default: null,
    },
}
```

- v-model: entity model
- is-new: if is new instance (apply default values)
- save-fn: funcion called when click in save button
- save-btn: if show save button
- reset-btn: if show reset button
- default-btn: if false it does not show any button (It would be the same as
  {save-btn: false, reset-btn: false})
- parser: you can pass a function to replace the native parser

### VormixSK

If you want to use vormix without it being embedded in a card, you can use VormixSK.
Returns only the components inside the form.

### Use

- [Builder - Vite](https://vitejs.dev/)
- [Framework - Vue](https://vuejs.org/)
- [Components - Vuetify](https://vuetifyjs.com/)
- [Components(Only calendar) - PrimeVue](https://primevue.org/calendar/#api.calendar)
- [Styling - Tailwind](https://tailwindcss.com/)
- [Icons - Pictogrammers](https://pictogrammers.com/)
- [Linter && Formatter - Biome](https://biomejs.dev/)

### 💻 For development see the file DEV.md
