# angular-oauth2-oidc-base

项目依赖于 angular-oauth2-oidc 库

[angular-oauth2-oidc](https://manfredsteyer.github.io/angular-oauth2-oidc/docs/)

**配置**
`app.component.ts > configure()`

**登录**

```
this.oauthService.initLoginFlow();
```

**登录返回数据**

```
const claims = this.oauthService.getIdentityClaims();
```

打印 claims 看看具体的数据结构吧。

**登出**

```
this.oauthService.logOut();
```

由于 `app` 组件（壳组件）是必须执行的，所以说目前来说即便没有 guard 也会自动跳转登录。

另外本项目使用的 sessionStorage 存储，因此可以关闭浏览器以清除登录状态。
