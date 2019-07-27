# vue-oidc-frame

**简介**
集成了 vuex-oidc 的 vue-cli 3.x 项目，默认采用 sessionStorage，支持单点登录。

**配置**
配置信息是在 auth.js 文件中设置的，例如想要 authority 地址、 clientId、回调地址就可以来这里修改。

**回调**
登录成功后的回调页面是 components/OidcCallback.vue 可以在 oidcSignInCallback() 函数成功后打印查看从服务器得到的信息

**用户信息**
登录成功后，可以在 components/HelloWorld.vue 页面查看相关的代码，可以根据不同的数据结构，作相应的操作，最终得到需要的结果。

**退出**
同样是 components/HelloWorld.vue 页面，调用 signOutOidc 函数退出登录。

**vuex-oidc wiki**

> https://github.com/perarnborg/vuex-oidc/wiki

**本项目 github**

> https://github.com/bey6/laboratory/tree/master/03-spa/01-vue/vue-oidc-frame
