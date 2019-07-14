<template>
  <div class="registration">
    <div style="text-align: center;">
      <h2>WELLCOME BEI BLOG</h2>
    </div>
    <input
      type="text"
      name="username"
      id="username"
      placeholder="用户名"
      v-model="user.username"
      autocomplete="off"
    >
    <input
      type="password"
      name="password"
      id="password"
      placeholder="密码"
      v-model="user.password"
      @keypress.prevent.enter="login"
      autocomplete="off"
    >

    <input
      type="password"
      name="password"
      id="passwordAgin"
      placeholder="重复密码"
      v-model="passwordAgin"
      @keypress.prevent.enter="login"
      autocomplete="off"
    >
    <input type="email" name="email" id="email" v-model="user.email" placeholder="邮箱">
    <input type="text" name="phone" id="phone" v-model="user.phone" placeholder="电话">
    <div class="button-panel">
      <button @click="registration">注册</button>
      <a href="#" @click="back">我已有帐号，返回登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "registration",
  data: () => ({
    user: {
      username: "",
      password: "",
      email: "",
      phone: ""
    },
    passwordAgin: ""
  }),
  methods: {
    registration() {
      if (!this.verify()) return;

      Bmob.User.register(this.user)
        .then(res => {
          this.$router.push({ name: "blogList" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    back() {
      this.$store.dispatch({ type: "modifyDoorState", value: "Login" });
    },
    verify() {
      if (this.user.username.trim() === "") {
        document.getElementById("username").focus();
        return false;
      }
      if (this.user.password.trim() === "") {
        document.getElementById("password").focus();
        return false;
      }
      if (this.user.password !== this.passwordAgin) {
        document.getElementById("passwordAgin").focus();
        return false;
      }
      if (this.user.email.trim() === "") {
        document.getElementById("email").focus();
        return false;
      }
      if (this.user.phone.trim() === "") {
        document.getElementById("phone").focus();
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/theme.scss";

.registration {
  @extend .door-panel;

  input[type="text"],
  input[type="password"],
  input[type="email"] {
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