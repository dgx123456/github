<template>

	<div>
		<div class="header">
        <em>我的</em>
    </div>
    <div class="user-main">
    	<div class="user-item">
    		<a href="#">
    			<em>我的订单</em><span class="left_gray"></span>
    		</a>
    	</div>
    	<div class="user-item">
    		<a href="#">
    			<em>优惠卷</em><span class="left_gray"></span>
    		</a>
    	</div>
    	<div class="user-item">
    		<a href="#">
    			<em>影院会员卡</em><span class="left_gray"></span>
    		</a>
    	</div>
    	<div class="user-item">
    		<a href="#">
    			<em>想看的电影</em><span class="left_gray"></span>
    		</a>
    	</div>
    	<div class="user-item">
    		<a href="#">
    			<em>看过的电影</em><span class="left_gray"></span>
    		</a>
    	</div>
    	<div class="login-btn user-btn">
			<a href="#">点击退出</a>
		</div>
		<div class="user-footer">
			<div class="user-logo"><img src="img/LOGO_gray.png"/></div>
			<p>客服电话：027-87229009</p>
		</div>
   </div>
   <div class="nav-bar">
   		<ul>
   			<li><a href="home.html"><span>电影</span></a></li>
   			<li><a href="order.html"><span>订单</span></a></li>
   			<li><a href="user.html"><span>我的</span></a></li>
   		</ul>
   </div>
	<router-link to="/My/hn">hn</router-link>
	<router-link to="/My/wh">wh</router-link>
		<router-view></router-view>
	</div>

</template>

<script>
export default {
    name:"user",
    data () {
        return {
            
        }
    }
}
</script>

<style>

</style>