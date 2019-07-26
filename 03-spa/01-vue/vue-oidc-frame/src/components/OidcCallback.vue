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
        if (this.oidcUser.sub === TOOLONG) {
          const url = `http://192.168.1.67:10000/Account/GetPermission/${this.oidcUser.idp
            .toString()
            .trim()}`;
          this.axios.get(url).then(res => {
            /**
             * DepartmentList:[]
             * GroupList:[]
             * ModulePathList:[]
             * ScopeList:[]
             * User:{}
             * ValidRoleList:[]
             */
            let {
              Note: department,
              Name: name,
              UserId: userId
            } = res.data.User;
            console.log(department.trim(), name.trim(), userId.trim());
          });
        }
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