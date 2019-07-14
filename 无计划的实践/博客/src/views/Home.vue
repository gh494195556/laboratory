<template>
  <div class="home">
    <div class="header">
      <router-link to="blogList" active-class="active">博客列表</router-link>
      <router-link to="blogAdd" active-class="active">添加博客</router-link>
      <span class="user-info">欢迎你: {{ $store.getters.getLoginUser.username }}</span>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
@import "../assets/theme.scss";

.home {
  .header {
    height: $header-height;
    width: 100%;
    color: #fff;
    background-color: $theme-color;
    text-align: center;

    .active {
      color: #f0d5a0;
    }

    a {
      text-decoration: none;
      line-height: $header-height;
      display: inline-block;
      padding: 0px 15px;
      color: #fff;
      font-size: 18px;
      font-weight: 700;
    }

    .user-info {
      float: right;
      line-height: $header-height;
      margin-right: 10px;
    }
  }

  .view {
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  }
}
</style>
