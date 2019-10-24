import Vue from "vue";
import App from "./App.vue";

import VuenusTableList from "./components/VuenusTableList";
import "@/assets/styles/sass/themes/lite-purple.scss";

Vue.component("vuenus-table-list", VuenusTableList);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
