import { createApp } from 'vue'
import "leaflet/dist/leaflet.css";
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';



import MapPage from "./components/MapPage.vue";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";


const routes = [
    { path: "/", component: MapPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.component('Button', Button);

app.mount("#app");