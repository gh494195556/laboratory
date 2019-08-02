<template>
  <div class="login">
    <div style="text-align: center;">
      <h2>WELLCOME BEI BLOG</h2>
    </div>
    <input type="text" name="username" id="username" placeholder="用户名" v-model="user.username">
    <input
      type="password"
      name="password"
      id="password"
      placeholder="密码"
      v-model="user.password"
      @keypress.prevent.enter="login"
    >
    <div class="button-panel">
      <button @click="login">登录</button>
      <a href="#" @click="registration">注册</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    user: {
      username: "",
      password: ""
    }
  }),
  methods: {
    login() {
      Bmob.User.login(this.user.username, this.user.password)
        .then(res => {
          console.log(res);
          this.$store.dispatch({ type: "modifyLoginUserState", user: res });
          sessionStorage.setItem("loginUser", JSON.stringify(res));
          this.$router.push({ name: "blogList" });
        })
        .catch(err => {
          alert(err.error);
        });
    },
    registration() {
      this.$store.dispatch({ type: "modifyDoorState", value: "Registration" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/theme.scss";

.login {
  @extend .door-panel;

  input[type="text"],
  input[type="password"] {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 1px;
    line-height: 30px;
    margin-bottom: 15px;
    padding: 0px 10px;
    outline: none;

    &:focus {
      border-color: $theme-color;
      box-shadow: 0px 0px 5px 0px $theme-color;
    }
  }

  .button-panel {
    text-align: center;

    button {
      @extend .base-button;
    }

    a {
      position: relative;
      top: 2px;
    }
  }
}
</style>