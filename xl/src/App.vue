<template>
  <div id="app">
    <My-Header></My-Header>
    
    <router-view></router-view>
    <my-footer></my-footer>
    <Index></Index>
    
    <hr />
    <router-link v-bind:to"{name:'Index',params:{msg:'首页',index:0}}">首页</router-link>
    <router-link v-bind:to="name:'user',params:{msg:'首页',index:1}">个人</router-link>
  </div>
</template>

<script>
import Index from '@/components/Index'
import user from '@/components/user'
import seat from '@/components/seat'
import register from '@/components/register'
import order from '@/components/order'
import login from '@/components/login'
import home from '@/components/home'
import detail from '@/components/detail'
import cinema from '@/components/cinema'
export default {
	name:"app",
  components: { 	
    user,
    sear,
    register,
    order,
    login,
    home,
    datail,
    cinema
  }
}
</script>

<style>
*{padding: 0;margin: 0}
body{font:14px "Microsoft Yahei";color: #333;background-color: #efefef;position: relative}
ul,li{list-style: none}
a{text-decoration: none;color: #fff}
</style>