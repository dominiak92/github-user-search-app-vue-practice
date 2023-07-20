import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

/* add icons to the library */
library.add(faUser, faEnvelope, faPhone);

/* add font awesome icon component */
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
