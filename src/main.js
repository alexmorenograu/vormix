import { createApp } from "vue";
import App from "./App.vue";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "./assets/main.css";
import "./assets/tailwind.css";

import Calendar from "primevue/calendar";
import PrimeVue from "primevue/config";
//in main.js
import "primevue/resources/themes/aura-dark-green/theme.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import VCalendar from "./components/VCalendar.vue";

const vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: "dark",
		dark: {
			colors: {
				primary: "#00FF80",
			},
		},
	},
	defaults: {
		VBtn: { variant: "outlined" }, //not working
	},
});

createApp(App)
	.use(vuetify)
	.use(PrimeVue)
	.component("Calendar", Calendar)
	.component("VCalendar", VCalendar)
	.mount("#app");
