import Vue from 'vue';

import mavonEditor from 'mavon-editor';

import Bmob from 'hydrogen-js-sdk';

import 'mavon-editor/dist/css/index.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(mavonEditor);
Bmob.initialize(
  '06d4315a344bcc1716e8d1aa88589c02',
  '648a31749755292f6eb7f42cf3230e5f'
);
Vue.prototype.Bmob = Bmob;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
