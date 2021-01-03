<!--
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-09-28 23:20:14
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-09-29 23:14:44
-->
<template>
  <div id="test">
    <el-row>
      <el-button
        type="primary"
        @click="go"
      >主要按钮</el-button>
    </el-row>
  </div>

</template>
<script>
export default {
  name: 'login',
  
  data() {
    return {
      num: 0
    }
  },
  created: () => {
  },
  methods: {
    go() {
        // this.$route.meta.keepAlive = false;
        this.$store.commit('showeKeep',true)
      this.$router.push({
          path: '/test',
        })
    },

    add() {
      this.num++
    },
    
  }
}
</script>
<style>
#test {
  /* background: red; */
  /* background: url(../assets/imges/bac.jpg) no-repeat; */
}
</style>
