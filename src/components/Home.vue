<template>
  <div id="home">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">我的工作台</el-menu-item>
      <!-- <el-submenu index="2"> -->
      <!-- <template slot="title">我的工作台</template> -->
      <!-- <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu> -->
      <!-- </el-submenu> -->
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">
        订单管理
      </el-menu-item>
    </el-menu>

    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item
            v-for="(value, key, index) in navs"
            :key="index"
            :class="{ active: value.active }"
            :index="index+2"
            @click="changeNav(key)"
          >
            <i class="el-icon-document"></i>
            <span slot="title">{{key}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <!-- 页面中间内容部分 -->
      <el-col :span="9">
        <ul>
          <li
            v-for="(tt,index) in tts"
            :key=index
            v-if="tt.title"
          >
            <div><a :href="tt.link">{{tt.title}}</a></div>
            <span>{{tt.ptime}}-{{tt.source}}</span>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      navs: {},
      tts: []
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    changeNav: function(akey) {
      console.log(akey);
      console.log(Reflect.ownKeys(this.navs));
      Reflect.ownKeys(this.navs).forEach((key, index) => {
        this.navs[key].active = akey === key && (this.tts = this.nav[key].data);
        console.log(index);
        // if (this.navs[key].active === true) {
        //   // this.tts = this.navs[data];
        //   // console.log(this.navs[key]);
        //   console.log(this.nav.key);
        //   this.tts = this.nav[key].data;
        // }
        // this.tts = this.nav[key].data;
        // console.log(this.navs[key].data);
      });
    }
  },
  created: function() {
    fetch("https://www.apiopen.top/journalismApi")
      .then(v => v.json())
      .then(v => {
        this.tts = v.data.toutiao;
        this.navs = v.data;
        Reflect.ownKeys(v.data).forEach((key, index) => {
          this.navs[key] = {
            active: key === "toutiao",
            data: this.navs[key]
          };
          console.log(index);
        });
      });
  }
};
</script>
<style>
#home {
  background: #eee;
  min-height: 100%;
}
</style>
