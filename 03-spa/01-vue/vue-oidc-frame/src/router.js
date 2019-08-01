import Vue from 'vue';
import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc';
import store from './store';
import Router from 'vue-router';

import OidcCallback from './components/OidcCallback';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/oidc-callback',
      name: 'oidcCallback',
      component: OidcCallback
    }
  ]
});
router.beforeEach(vuexOidcCreateRouterMiddleware(store));
export default router;
