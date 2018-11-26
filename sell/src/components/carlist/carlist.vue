<template>
	<div class="carlist">
		<div class="carlisttitle">
		  <div class="title">购物车</div>
		  <div class="empty" @click="empty">清空</div>
		</div>
		<div class="carlistcontent" ref="carlistcontent">
			<!--列表过渡动画-->
		  <transition-group tag="ul" leave-active-class="animated bounceOut" enter-active-class="animated bounceIn">
		    <li v-for="food in selectfoods" class="carlistfood" v-bind:key="food.name">
		      <div class="name">{{food.name}}</div>
		      <div class="subtotal">{{food.price*food.count}}</div>
		      <!--调用控制组件-->
		      <carcontrol v-bind:food="food" v-on:balladd="getball"></carcontrol>
		    </li>
		 </transition-group>
		</div>
	</div>
</template>

<script>
	import betterScroll from "better-scroll";
	import carcontrol from "@/components/carcontrol/carcontrol";
//	import data from "@/assets/data/data.json";
	export default{
		name:"carlist",
		props:["selectfoods"],
		data(){
			return{}
		},
		components:{
			carcontrol
		},
		methods:{
			getball(target){
				this.$parent.getball(target);
				//接收子组件的事件分发
			},
			empty(){
				this.selectfoods.forEach((food)=> {
					food.count = 0;
				})
			}
		},
		mounted(){
			this.$nextTick(()=>{
				console.log(this.$refs.carlistcontent)
				new betterScroll(this.$refs.carlistcontent,{scrollY:false,scrollX:true,click:true});
			})
		}
	}
</script>

<style lang="less">
	@import url("../../assets/less/mixin.less");
.carlist{
	width:100%;
	position: fixed;
	buttom:50px;left:0;
	background-color:#fff;
	.carlisttitle{
		position:relative;
		 height:40px;
		 line-height:40px;
		 background-color:#f3f5f7;
		.border-1px;
			padding: 0 18px;
			display: flex;
			justify-content: space-between;
		.title{
			font-size: 14px;
			font-weight: 200;
			color: rgb(7,17,27);
			}
		.empty{font-size: 12px;
		font-weight: 700;
		color:rgb(0,160,220)
		}
	}
	.carlistcontent{
		margin:0 18px;	
		overflow: hidden;
		max-height: 200px;	
		.carlistfood{
			height: 48px;line-height: 48px;
			display: flex;
			justify-content: space-between;
			position: relative;
			.border-1px;
		.name{
			font-size: 14px;
			color: rgb(7,17,27);
		}
		.subtotal{
			margin-right: 100px;
			font-size: 10px;
			color: rgb(0,160,220);
			font-weight: 700;
		}
		}
	}
}
</style>