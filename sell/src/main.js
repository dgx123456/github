// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
//import betterScroll from "better-scroll"
//import data from "@/assets/data/data.json"

//全局配置
Vue.config.productionTip = false;
Vue.config.silent=true;//选择使用生产版本的vue；
Vue.use(resource)//在vue-cli中需要设置resource插件代理ajax

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
