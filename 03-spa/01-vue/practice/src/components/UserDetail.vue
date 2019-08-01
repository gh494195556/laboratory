<template>
  <div class="user-detail">
    <ul>
      <li v-for="item in userName" :key="item">{{item}}</li>
    </ul>
    <!-- <h1>{{userName}}</h1> -->
  </div>
</template>

<script>
export default {
  name: "userDetail",
  props: ["userName"]
};
</script>

<style lang="scss" scoped>
div.user-detail {
  border: 1px solid #000;
  margin: 10px;
}
</style>