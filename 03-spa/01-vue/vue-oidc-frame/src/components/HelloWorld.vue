<template>
  <div class="hello">
    <div v-if="oidcUser">
      <h1>Claim</h1>
      <pre style="text-align: left">
{{ oidcUser }}
      </pre>
      <button @click="signOutOidc">sign out</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  computed: {
    ...mapGetters(["oidcUser"])
  },
  methods: {
    ...mapActions(["signOutOidc"])
  }
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
