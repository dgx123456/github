<template>
	<!--购物车-->
	<div class="shopcart">
		<!--左侧-->
		<div class="left">
			<div class="icon" @click="carlistshow">
<!--车：判断总数量：为class添加enough -->
				<span class="icon-shopping_cart car" :class="{enough:totalcount>0}"></span>
				<!--徽章：判断总数量 添加class 类名 enough-->
				<span class="emblem" v-show="totalcount">{{totalcount}}</span>
				<!--小球动画-->
				<transition @before-enter="ballbefore" @enter="ballenter" @after-enter="ballafter">
					<div class="ballouter" v-show="ballshow">
			         <div class="ballinner"></div>
					</div>
				</transition>
			</div>
			<!-- 总价： 判断总价添加clas类名 enough-->
			<div class="totalprice" v-bind:class="{enough:totalprice>0}">
				￥{{totalprice}}
			</div>
			<div class="deliveryPrice">
				配送费: {{seller.deliveryPrice}}元
			</div>
		</div>
<!--右侧：判断 总价与最小起送价的差值 设置 class 类名 enough-->
		<div class="right" v-bind:class="{enough:totalprice>=seller.minPrice}">
			<span>{{paycontent}}</span>
		</div>
	</div>
</template>

<script>
//	import data from "@/assets/data/data.json";

	export default {
		name:"shopcart",
		props:["selectfoods","seller"],
		data(){
			return{
				ballshow:false,
				ballx : 0,
				bally : 0,
			}
		},
		methods:{
			carlistshow(){
				//商品数据大于0 点击显示
				if(this.totalcount>0){
					this.$parent.carlistshow = !this.$parent.carlistshow;
				}
			},
			ballchange(target){
				console.log("获取点击按钮")
				this.ballshow=true;
				var rect=target.getBoundingClientRect();//获取标签大小和相对于屏幕的位置；
				var x =rect.left;
				this.x= x - 38;
				var y=rect.top;
			this.y= - (window.innerHeight - y - 25);
			},
			ballbefore(el){//钩子函数
				console.log("ballbefore事件")
				el.style.transform = `translateX(${this.x}px)`;
				el.style.transition = "all 0.5s linear";
				el.style.opacity = 1;
				var inner = el.getElementsByClassName("ballinner")[0];
				inner.style.transform = `translateY(${this.y}px)`;
				inner.style.transition = "all 0.5s cubic-bezier(.21,-0.69,.83,.67)"
			},
			ballenter(el,done){				
//随便调用一个动画元素，触发动画
               el.offsetHeight;
			   el.style.transform = `translateX(0)`;
			   el.style.opacity=0.5;
var inner=el.getElementsByClassName("ballinner")[0];
			inner.style.transform=`translateY(0)`;	
                 done();		  
			},
			ballafter(el){
			el.style.transform=`translateX((${this.x}px)`;	
var inner=el.getElementsByClassName("ballinner")[0];
			inner.style.transform=`translateX((${this.x}px)`;	
			this.ballshow=false;
		  },
		},
		
		computed:{
			//根据传入的 选中的商品的数组，计算总价
			totalprice(){
				var total = 0;
//				数组forEach() 循环  数组的ES6 方法some
				this.selectfoods.forEach((food)=>{
					total = total + food.price * food.count
				})
				return total;
			},
			//计算被选中的总数
			totalcount(){
				var total = 0;
				this.selectfoods.forEach((food)=>{
					total = total + food.count
				})
				return total;
			},
			//使用总价的值  比较 起送价 设置 付钱 这个位置的内容 和颜色
//			totalprice seller.minPrice
			paycontent(){
				if(this.totalprice=0){
					return "起送价" + this.seller.minPrice + "元"
				}else if(this.totalprice<this.seller.minPrice){
					return "差" + (this.seller.minPrice - this.totalprice) +"起送"
				}else{
					return "结算"
				}
			}
			
		}
	}
</script>

<style lang="less">
	@import url("../../assets/less/mixin.less");
	/*购物车*/
	.shopcart{
		position: fixed;
		width: 100%;
		height: 50px;
		left: 0;
		bottom: 0;
		z-index: 8888;
		background-color: #141D27;
		display: flex;
		/*左侧*/
		.left{
			flex: 1;
			display:flex;
			/*图标区域*/
			.icon{
				width: 44px;
				height: 44px;
				padding: 6px;
				margin: 0 10px 0 18px;
				position: relative;
				top: -8px;
				background-color: #141D27;
				border-radius: 50%;
				/*购物车图标*/
				.car{
					display: inline-block;
					width: 44px;
					height: 44px;
					background-color: #2B343C;
					font-size: 24px;
					color: rgba(255,255,255,0.4);
					line-height: 24px;
					text-align: center;
					border-radius: 50%;
					box-sizing: border-box;
					padding-top: 10px;
					&.enough{
						color:#fff;
						background-color: #00A0DC;
					}
				}
				/*徽章*/
				.emblem{
					position: absolute;
					top: 0;
					right: 0;
					width: 24px;
					height: 16px;
					line-height: 16px;
					text-align: center;
					color: #FFFFFF;
					background-color: rgb(240,20,20);
					box-shadow: 0 2px 4px rgba(0,0,0,0.4);
					border-radius: 10px;
					font-size: 9px;
				}
				.ballinner{
					width:16px;height:16px;
					border-radius: 50%;
					background-color: darkblue;
				}
			}
			/*总价*/
			.totalprice{
				margin-top: 5px;
				width: 40px;
				height: 40px;
				padding-right:12px;
				line-height: 40px;
				text-align: center;
				font-size: 16px;
				font-weight: 700;
				color: rgba(255,255,255,0.4);
				.border-1px;
				border-bottom: none;
				border-right-style:solid ;
				border-right-color: rgba(255,255,255,0.4);
				margin-right: 12px;
				&.enough{
					color:#fff;
				}
			}
			/*起送费*/
			.deliveryPrice{
				flex: 1;
				height: 50px;
				font-size: 16px;
				line-height: 50px;
				color: rgba(255,255,255,0.4);
			}
		}
		/*右侧 结账区域*/
		.right{
			width: 105px;
			box-sizing: border-box;
			padding: 0 8px;
			height: 50px;
			line-height: 50px;
			text-align: center;
			color: rgba(255,255,255,0.4);
			background-color: #2B333B;
			&.enough{
				background-color: #4B986A;
				color: #FFFFFF;
			}
			span{
				font-size: 12px;
				font-weight: 700;
			}
		}
	}
</style>