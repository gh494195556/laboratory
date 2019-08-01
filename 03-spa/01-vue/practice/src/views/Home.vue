<template>
  <div class="home">
    <user @onChange="handleChange"></user>
    <user-detail :userName="userName"></user-detail>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import User from "@/components/User.vue";
import UserDetail from "@/components/UserDetail.vue";

export default {
  name: "home",
  data: () => ({
    userName: []
  }),
  props: [],
  components: {
    User,
    UserDetail
  },
  methods: {
    handleChange(value) {
      this.userName.push(value);
    }
  }
};
</script>
