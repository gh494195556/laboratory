# vue oidc

## 安装 oidc-client & vuex-oidc

```
npm install oidc-client --save && npm install vuex-oidc --save
```

## 配置 oidc

找个位置新建一个 **auth.js** 文件，用来配置 oidc 使用。

```
import { WebStorageStateStore } from 'oidc-client';
export const authConfig = {
  authority: 'http://192.168.1.67:10000',
  clientId: 'vueoidc',
  redirectUri: `${window.location.origin}/oidc-callback`,
  responseType: 'id_token token',
  scope: 'openid profile',
  userStore: new WebStorageStateStore({ store: window.sessionStorage })
};
```

## 配置 store

打开 store(一般是 store.js 或 store/index.js)

```
// 下面两个 import, auth 根据自己的地址引入
import { vuexOidcCreateStoreModule } from 'vuex-oidc';
import { authConfig } from '../auth';
// 其他 import...

export default new Vuex.Store({
  // 其他...
  modules: {// 这个代码块
    oidcStore: vuexOidcCreateStoreModule(authConfig)
  }
})
```

## 添加认证后回调页面

**1. 添加 `OidcCallback.vue` 组件**

```
<template>
  <div></div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "OidcCallback",
  computed: {
    ...mapGetters(["oidcUser"])
  },
  methods: {
    ...mapActions(["oidcSignInCallback"])
  },
  mounted() {
    this.oidcSignInCallback()
      .then(redirectPath => {
        this.$router.push(redirectPath);
      })
      .catch(err => {
        console.error(err);
        this.$router.push("/oidc-callback-error");
      });
  }
};
</script>
```

**2. 配置回调组件路由**
找到路由文件，一般是 router.js 或 router/index.js：

```
// 其他 import
import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc';
import OidcCallback from './components/OidcCallback';

const router = new  VueRouter({
  mode: 'history',
  routes: [
    // 其他路由
    {
      path: '/oidc-callback',
      name: 'oidcCallback',
      component: OidcCallback
    }
  ]
});

router.beforeEach(vuexOidcCreateRouterMiddleware(store));
```
