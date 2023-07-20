import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

/* add icons to the library */
library.add(faMagnifyingGlass);

/* add font awesome icon component */
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
