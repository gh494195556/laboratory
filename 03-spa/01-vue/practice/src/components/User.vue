<template>
  <div class="user">
    <input type="text" v-model="name" @keydown.enter="handleInput" />
  </div>
</template>

<script>
export default {
  name: "user",
  data: () => ({
    name: ""
  }),
  methods: {
    handleInput(e) {
      this.$emit("onChange", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
div.user {
  border: 1px solid #000;
  margin: 10px;
}
</style>