<template>
  <div class="blog-list-item">
    <h3>{{ blog.title }}</h3>
    <p class="content">{{ blog.content }}</p>

    <span class="left">{{ blog.author }}</span>
    <span class="left">{{ blog.createdAt }}</span>
    <span class="right">
      阅读
      <span class="number">182</span>
    </span>
    <span class="right">
      赞
      <span class="number">21</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "blog-list-item",
  props: ["blog"]
};
</script>

<style lang="scss" scoped>
@import "../../assets/theme.scss";

.blog-list-item {
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  height: 110px;
  border: 1px solid #c8c8c8;
  border-top: 0;
  text-align: left;

  .content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    margin: 0;
    cursor: pointer;

    &:hover {
      color: $theme-color;
    }
  }

  span {
    margin: 0px 10px 0px 0px;
  }

  p {
    color: #7f7f7f;
    margin: 5px 0;
  }

  .number {
    color: $theme-color;
  }

  .left {
    float: left;
    color: #393939;
  }

  .right {
    float: right;
    color: #393939;
  }
}
</style>