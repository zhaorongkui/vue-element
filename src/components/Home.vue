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
            @click="changeNav(key)"
            :index="index+2"
          >
            <i class="el-icon-document"></i>
            <span slot="title">{{key}}</span>
          </el-menu-item>
          <!--<el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span slot="title">导航五</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-document"></i>
            <span slot="title">导航六</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-setting"></i>
            <span slot="title">导航七</span>
          </el-menu-item>
          <el-menu-item index="8">
            <i class="el-icon-menu"></i>
            <span slot="title">导航八</span>
          </el-menu-item>
          <el-menu-item index="9">
            <i class="el-icon-document"></i>
            <span slot="title">导航九</span>
          </el-menu-item> -->
        </el-menu>
      </el-col>
      <!-- 页面中间内容部分 -->
      <el-col :span="9">
        <ul>
          <li
            v-for="(tt,index) in tts"
            :key=index
            v-if="tt.tital"
          >
            <div><a :href="tt.link">{{tt.titel}}</a></div>
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
      Reflect.ownKeys(this.navs).forEach((key, index) => {
        this.navs[key].active = akey === key && (this.tts = this.nav[key].data);
        console.log(index);
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
