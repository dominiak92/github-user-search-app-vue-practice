import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faLocationDot, faLink, faFaceSadTear, faBuilding} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

/* add icons to the library */
library.add(faMagnifyingGlass, faLocationDot, faLink, faTwitter, faFaceSadTear, faBuilding);

/* add font awesome icon component */
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  vuetify : new Vuetify(),
  render: (h) => h(App),
}).$mount('#app');
