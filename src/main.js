import { createApp } from "vue";
import store from "@/store/index";
import { router } from "@/router/routes";
import App from "@/App.vue";
import components from "@/components/components.js";
// import "@/permission.js";

import "@/assets/initialize.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(components);

app.mount("#app");
