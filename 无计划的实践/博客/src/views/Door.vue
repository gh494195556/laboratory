<template>
  <div id="door">
    <component :is="$store.getters.getDoorState.currentComponent"></component>
  </div>
</template>

<script>
import Login from "../components/Door/Login.vue";
import Registration from "../components/Door/Registration.vue";
export default {
  name: "door",
  components: {
    Login,
    Registration
  }
};
</script>

<style lang="scss" scoped>
</style>
