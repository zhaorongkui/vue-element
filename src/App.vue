<!--
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-09-28 21:56:12
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-09-28 22:48:46
-->
<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view> 
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>  
  </div>
</template>
<script>

export default {
  name: "app",
  components: {}
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
