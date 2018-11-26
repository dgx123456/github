import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import My from '@/components/My'
import Index from '@/components/Index'
import user from '@/components/user'
import seat from '@/components/seat'
import register from '@/components/register'
import order from '@/components/order'
import login from '@/components/login'
import home from '@/components/home'
import detail from '@/components/detail'
import cinema from '@/components/cinema'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[//配置子组件中使用的子组建的路由方式
    		{path:'/',component:Index},
    	       ]
    },

    {
    	path:'/user',
    	name:'/user',
    	component: user,
    	beforeEnter:function(to,from,next){
    		console.log(to);
    		console.log(from);
    		next();
    	}

    }

  ]
})
