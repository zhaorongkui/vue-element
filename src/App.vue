<template>
  <div id="app">
    <TestComponent/>
    <!-- <Home /> -->
  </div>
</template>

<script>
import TestComponent from "./components/test.vue";
// import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    TestComponent,
    // Home
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
