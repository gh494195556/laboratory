<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  width: 100%;
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  body {
    width: 100%;
    min-height: 100vh;
    margin: 0px;

    #app {
      background-color: #fafafa;
      min-height: 100vh;
      width: 100%;
    }
  }
}
</style>
