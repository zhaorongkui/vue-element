/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-09-28 22:21:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-09-28 23:25:47
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import home from "@/components/Home.vue";
import test from "@/components/test.vue";
import login from "@/components/login.vue";
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