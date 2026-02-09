import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

library.add(faHeartRegular, faCirclePlus);

createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app');
