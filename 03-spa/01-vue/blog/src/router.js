import Vue from 'vue';

import Router from 'vue-router';

import Home from './views/Home.vue';
import store from './store';
Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Door.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'blogList',
          name: 'blogList',
          component: () => import('./components/Blog/BlogList')
        },
        {
          path: 'blogAdd',
          name: 'blogAdd',
          component: () => import('./components/Blog/BlogAdd.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (store.getters.getLoginUser.username === '') {
    const loginUserStr = sessionStorage.getItem('loginUser');
    if (loginUserStr !== '') {
      const loginUser = JSON.parse(sessionStorage.getItem('loginUser'));
      store.dispatch({ type: 'modifyLoginUserState', user: loginUser });
    }
  }
  next();
});

export default router;
