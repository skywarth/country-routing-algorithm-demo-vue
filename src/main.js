import { createApp } from 'vue'
import "leaflet/dist/leaflet.css";
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';



import MapPage from "./views/MapPage.vue";


import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";


import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import Dropdown from 'primevue/dropdown';
import Tooltip from 'primevue/tooltip';
import OverlayPanel from 'primevue/overlaypanel';

import CountryFlag from 'vue-country-flag-next';

import "./assets/custom.css";



const routes = [
    { path: "/", component: MapPage },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

const app = createApp(App);

app.directive('tooltip', Tooltip);

app.use(PrimeVue);
app.use(router);

app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('country-flag', CountryFlag)

app.mount("#app");