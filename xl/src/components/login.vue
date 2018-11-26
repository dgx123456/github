<template>
 
	<main class="login-main">
		<div class="login-logo"><img src="img/LOGO.png"/></div>
		<div class="login-from">
			<label>
				<input type="text" placeholder="请输入用户名"/>
			</label>
			<label>
				<input type="password"  placeholder="请输入密码"/>
			</label>
		</div>
		<div class="login-btn">
			<a href="#">登录</a>
		</div>
		<div class="link-reg">
			<a href="register.html">还没账号？</a>
		</div>
		<div class="link-home">
			<a href="#">暂不登录</a>
		</div>
	</main>

<script>
    export default{
    	name:"login",
       data(){
           return{

           }
       }
    }
</script>
