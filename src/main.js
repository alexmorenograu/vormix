import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

import VormixPlugin from './VormixPlugin.js';

createApp(App)
    .use(VormixPlugin)
    .mount("#app");
