<template>
  <div class="blog-add">
    <input type="text" name="title" id="title" v-model="blog.title" placeholder="博客标题">

    <mavon-editor v-model="blog.content" :subfield="false" placeholder="在此处编辑"/>

    <div class="scope">
      <label>范围：</label>
      <select name="scope" id="scope" v-model="blog.scope">
        <option value="fe">前端</option>
        <option value="be">后端</option>
      </select>
    </div>

    <div class="operation">
      <button @click="back">返回</button>
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-add",
  data: () => ({
    blog: {
      title: "",
      content: "",
      scope: "前端",
      author: ""
    }
  }),
  mounted() {
    this.blog.author = this.$store.getters.getLoginUser.username;
  },
  methods: {
    save() {
      const query = Bmob.Query("blog");
      query.set("title", this.blog.title);
      query.set("content", this.blog.content);
      query.set("scope", this.blog.scope);
      query.set("author", this.blog.author);
      query
        .save()
        .then(res => {
          this.$router.push({ name: "blogList" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    back() {
      this.$router.push({ name: "blogList" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/theme.scss";

.blog-add {
  @extend .main-page;

  input[type="text"] {
    color: #333;
    width: 100%;
    display: block;
    box-sizing: border-box;
    line-height: 40px;
    font-size: 24px;
    padding: 0px 10px;
    margin: 10px 0px;
    border-radius: 1px;
    border: 1px solid #ccc;
    outline: none;

    &:focus {
      border-color: $theme-color;
      box-shadow: 0px 0px 5px -1px $theme-color;
    }
  }

  .operation {
    width: 100%;
    height: 30px;
    margin: 15px 0px;
    text-align: right;

    button {
      @extend .base-button;
    }
  }

  .scope {
    width: 100%;
    margin-top: 15px;
    text-align: left;
    color: #2c2c2c;

    select {
      outline: none;
      line-height: 30px;
      height: 30px;
      width: 200px;
      color: #2c2c2c;
      font-size: 16px;
      border-radius: 1px;
      border: 1px solid #c8c8c8;
    }
  }
}
</style>