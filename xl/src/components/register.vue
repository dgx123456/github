<template>

	 <div class="header">
        <em>用户注册</em>
        <span class="go-back"><a href="home.html"></a></span>
        <span class="go-next"><a href="login.html">登录</a></span>
    </div>
    <div class="reg-main">
    	<div class="reg-from">
    		<label><input type="text"  placeholder="请输入用户名" /></label>
    		<label><input type="password"  placeholder="请输入密码" /></label>
    		<label><input type="password"  placeholder="请确认密码" /></label>
    	</div>
    	<div class="treaty">
    		<input type="checkbox" id="treaty" checked="checked"/>
    		<label for="treaty">我已阅读并同意《格莱科技用户协议》</label>
    	</div>
    	<div class="login-btn reg-btn">
			<a href="#">立即注册</a>
		</div>
		<div class="contact">
			<span>© 格莱科技 027-87229009</span>
		</div>
    </div>

</template>

<script>
export default {
    name:"register",
    data () {
        return {
            
        }
    }
}
</script>

<style>
</style>