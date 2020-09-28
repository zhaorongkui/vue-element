<template>
  <div id="test">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button
        type="primary"
        @click="test"
      >主要按钮</el-button>
      <el-button
        type="primary"
        @click="routerTest"
      >路由测试</el-button>
      <el-button
        type="success"
        @click="add"
      >成功按钮--{{num}}</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>

</template>
<script>
export default {
  name: 'TestComponent',
  props: {
    msg: String
  },
  data() {
    return {
      num: 0
    }
  },
  created: () => {
    // console.log("初始化！");
    var obj = { a: 1 }
    var copy = Object.assign({}, obj)
    console.log(copy) // { a: 1 }
    var o1 = { a: 1 }
    var o2 = { b: 2 }
    var o3 = { c: 3 }
    var obj = Object.assign(o1, o2, o3)
    console.log(obj) // { a: 1, b: 2, c: 3 }
    console.log(o1) // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
  },
  methods: {
    routerTest() {
      if(this.num < 3){
        this.$router.push({
                  path: '/home'
                })
      }else {
        this.$router.push({
                  path: '/login'
                })
      }
    },

    add() {
      this.num++
    },

    test1() {
      var p = new Promise(function(resolve, reject) {
        let aa = '传过去了'
        setTimeout(function() {
          console.log('执行完成'), resolve(aa)
        }, 2000)
      })
      // console.log(p);
      return p
    },
    test2() {
      var p2 = new Promise(function(resolve, reject) {
        let bb = 'alert执行完了'
        setTimeout(function() {
          alert('test2'), resolve(bb)
        }, 4000)
      })
      return p2
    },
    test3() {
      var p3 = new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log('异步任务1完成')
          resolve('随便什么数据1')
        }, 1000)
      })
      return p3
    },
    test4() {
      var p = new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log('异步任务2完成')
          resolve('随便什么数据2')
        }, 2000)
      })
      return p
    },
    test5() {
      var p = new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log('异步任务3完成')
          resolve('随便什么数据3')
        }, 2000)
      })
      return p
    },
    test() {
      // this.$options.methods.test1().then(function(data) {
      //   console.log(data);
      // });
      // Promise.all([
      //   this.$options.methods.test1(),
      //    this.$options.methods.test2(),
      //   this.$options.methods.test3(),
      //    this.$options.methods.test4(),
      //   this.$options.methods.test5()
      // ]).then(function(data) {
      //   console.log(data);
      // });

      //在data外面定义的属性和方法通过$options可以获取和调用
      this.$options.methods
        .test3()
        .then(data => {
          console.log(data)
          return this.$options.methods.test4()
        })
        .then(data => {
          console.log(data)
          return this.$options.methods.test5()
        })
        .then(data => {
          console.log(data)
        })
    }
  }
}
</script>
<style>
#test {
  /* background: red; */
  /* background: url(../assets/imges/bac.jpg) no-repeat; */
}
</style>
