/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-09-28 22:21:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-18 19:46:11
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import home from "@/components/Home.vue";
import test from "@/components/test.vue";
import login from "@/components/login.vue";
import List from "@/components/table.vue";
const routes = [
    {
        path:"/home",
        component: home
    },
    {
        path: "/test",
        component: test
    },
    {
        path: "/login",
        component: login
    },
    {
        path: "/list",
        component: List
    }
]

var router =  new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(from)
    to.meta.keepAlive = from.meta.keepAlive!==undefined?from.meta.keepAlive:true;
    next()
    
  })
export default router;