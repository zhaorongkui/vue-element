<!--
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-09-28 21:56:12
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-09-29 23:21:01
-->
<template>
  <div id="app">
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view> 
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>   -->
    <keep-alive>
      <router-view v-if="keepAlive"></router-view> 
    </keep-alive>
    <router-view v-show="!keepAlive"></router-view>  
  </div>
</template>
<script>

export default {
  name: "app",
  components: {},
  computed:{
    keepAlive(){
      return this.$store.state.keepAlive;
    }
  },
  created(){
    window.console.log(this.keepAlive,'主APP')
  },
  activated(){
    console.log('app进来了！')
    console.log(this.keepAlive,'App------active')
  },
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
