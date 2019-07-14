<template>
  <div class="blog-list">
    <div v-for="blog in blogList" :key="blog.objectId">
      <blog-list-item :blog="blog"></blog-list-item>
    </div>
  </div>
</template>

<script>
import BlogListItem from "./BlogListItem.vue";
export default {
  name: "blog-list",
  data: () => ({
    blogList: []
  }),
  components: {
    BlogListItem
  },
  created() {
    const query = Bmob.Query("blog");
    query.find().then(res => {
      this.blogList = res;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/theme.scss";

.blog-list {
  @extend .main-page;
}
</style>