<template>
	<div class="carcontrol">
		<transtion enter-active-class="animated fadeInRight" leave-active-class="fadeOutLeft">
			<div class="reduce" v-show="food.count>0" @click="reduce">
			<span class="icon-remove_circle_outline"></span>
		</div>
		</transtion>
		
		<transtion enter-active-class="animated fadeInRight" leave-active-class="fadeOutLeft">
			<div class="count" v-show="food.count>0">{{food.count}}</div>
		</transtion>
		
		<div class="add" @click.stop="add">
			<span class="icon-add_circle"></span>
		</div>
	</div>
</template>

<script>
	import data from "@/assets/data/data.json";
	
	export default{
		name:"carcontrol",
		props:['food'],
		data(){
			return {}
		},
		methods:{
			reduce(){
				if(this.food.count>0){
					this.food.count--;
				}
			},
			add(e){
				if(this.food.count>0){
					this.food.count++;
				}else{
					this.$set(this.food,"count",1);
				}
				var target=e.target;
				console.log("go")
				this.$emit("balladd",target);				
			}
		},
//		computed(){},
	}
</script>

<style lang="less">
	@import url("../../assets/less/mixin.less");
	.carcontrol{
		position: absolute;
		right: 0;
		bottom: 10px;
		display: flex;
		.reduce{
			width: 24px;
			height: 24px;
			line-height: 24px;
			text-align: center;
			span{
				color: #00A0DC;
				background-color: #fff;
			}
		}
		.count{
			line-height: 24px;
			text-align: center;
			width: 24px;
			height: 24px;
		}
		.add{
			width: 24px;
			height: 24px;
			line-height: 24px;
			text-align: center;
			span{
				color: #00A0DC;
				background-color: #fff;
			}
		}
	}
</style>