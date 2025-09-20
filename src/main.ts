import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import "@fortawesome/fontawesome-free/css/all.css";
import { createPinia } from "pinia";

import "vue3-toastify/dist/index.css";

import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
const pinia = createPinia();

const app = createApp(App);
app.use(LoadingPlugin);

app.use(router);
app.use(pinia);

app.mount("#app");
