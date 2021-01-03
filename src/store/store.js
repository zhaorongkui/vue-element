/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-09-29 21:33:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-09-29 22:58:12
 */
import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        keepAlive:'',
    },
    getters:{
        getKeepAlive(state){
            return state.keepAlive
        }
    },
    mutations:{
        showeKeep(state,data){
            state.keepAlive = data
        }
    }

});
export default store