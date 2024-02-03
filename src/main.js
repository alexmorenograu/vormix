import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

import MetaFormPlugin from './MetaFormPlugin.js';

createApp(App)
    .use(MetaFormPlugin)
    .mount("#app");
