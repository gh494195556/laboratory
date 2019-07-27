<template>
  <div></div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

const TOOLONG = "Too long to trans!";

export default {
  name: "OidcCallback",
  computed: {
    ...mapGetters(["oidcUser"])
  },
  methods: {
    ...mapActions(["oidcSignInCallback"])
  },
  mounted() {
    this.oidcSignInCallback()
      .then(redirectPath => {
        console.log(this.oidcUser);
        this.$router.push(redirectPath);
      })
      .catch(err => {
        console.error(err);
        this.$router.push("/oidc-callback-error");
      });
  }
};
</script>

<style lang="scss" scoped>
</style>