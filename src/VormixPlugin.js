// Styles
// import "vuetify/styles";
// import "primevue/resources/themes/aura-dark-green/theme.css";
// import "@mdi/font/css/materialdesignicons.css";
// import "./assets/tailwind.css";

// Components
import PrimeVue from "primevue/config";
import Calendar from "primevue/calendar";
import VCalendar from "./components/VCalendar.vue";
import Vormix from "./components/Vormix.vue";

// Use vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

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

export default {
    install: (app, options) => {
        app.use(vuetify)
        app.use(PrimeVue)
        app.component("Calendar", Calendar)
        app.component("VCalendar", VCalendar)
        app.component("Vormix", Vormix)
        // app.provide("metaFormModel", options?.model);
    }
}
export { Vormix, VCalendar };