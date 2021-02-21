<!--
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2021-02-18 19:21:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-19 22:16:16
-->
<template>
  <div>
    <div>{{title}}</div>
    <div><span>名称：</span><input
        type="text"
        v-model="name"
      ></div>
    <div><span>价钱：</span><input
        type="text"
        v-model="price"
      ></div>
    <button @click="add()">新增</button>
    <div v-for="item in tabData">
      <p>
        <span>{{item.name}}: </span>
        <span> {{item.price}}元</span>
        <span @click="delet(item)">X</span>
      </p>

    </div>
    <el-pagination
      layout="prev, pager, next"
      @current-change="currentChange"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: '列表页面',
      page: 1,
      total: 0,
      name: '',
      price: null,
      tabData: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    currentChange(page) {
      this.page = page
      this.getData()
    },
    getData() {
      axios.get(`/api/list?page=${this.page}`).then((res) => {
        // console.log(res)
        this.tabData = res.data.data.fruits
        this.total = res.data.data.pagination.total
      })
    },
    add() {
      axios
        .post('/api/add', {
          name: this.name,
          price: this.price,
        })
        .then((res) => {
          if (res.data.status === '0') {
            this.currentChange(1)
          }
        })
    },
    delet(item) {
      axios
        .delete('/api/delete', { params: { name: item.name } })
        .then((res) => {
          if (res.data.status === '0') {
            this.currentChange(1)
          }
        })
      // console.log(item._id)
    },
  },
}
</script>