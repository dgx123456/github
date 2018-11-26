<template>
	<div class="fooddetail" v-show="isshow" ref="food">		
		<div>
		<div class="detail-header">
			<img v-bind:src="selectfood.image" alt="皮蛋瘦肉粥">
		</div>
		<div class="close" @click="back">
			<span class="icon-colse"></span>
		</div>
		<div class="detail-msg">
			<div class="title">
				{{selectfood.name}}
			</div>
			<div class="sell-count">
				<span class="count">月售{{selectfood.sellCount}}份</span>
				<span class="rate">好评率{{selectfood.rating}}%</span>
			</div>
			<div class="price">
				<span class="new">￥{{selectfood.price}}</span>
				<span class="old" v-if="selectfood.oldPrice">￥{{selectfood.oldPrice}}</span>
			</div>
			<div class="shopping">
				<carcontrol v-bind:food="selectfood" v-show="selectfood.count"></carcontrol>
				<div class="addshop" @click="addfood" v-show="!selectfood.count">加入购物车</div>
			</div>			
		</div>
		<div class="detail-dec">
			<div class="title">商品介绍</div>
			<p v-if="selectfood.info" class="info">{{selectfood.info}}</p>
			<p v-else:class="info"></p>
		</div>
		<div class="detail-rating">
			<div class="title">商品评价</div>
			<div class="choose-rating">
				<span class="all" @click="Echoose(2)" v-bind:class={"active":choose==2}>全部</span>
				<span class="tj" class="all" @click="Echoose(0)" v-bind:class={"active":choose==0}>推荐</span>
				<span class="tc" class="all" @click="Echoose(1)" v-bind:class={"active":choose==1}>吐槽</span>
			</div>
			<div class="choose-content" @click="Ehasconent" v-bind:class="{active:hasconent}">
				<div class="choose">
					<span class="icon-check_circle"></span>
					<span>只看有内容的评价</span>
				</div>
			</div>
		</div>
		<div class="detail-list">
			<ul>
				<li v-for="item in chooseratings" v-bind:key="item.rateTime" class="item">
					<div class="timecontainer">
						<span class="time">{{item.rateTime | time}}</span>
						<span class="avatar">{{item.username}}
                    <img class="bg-avatar" v-bind:src="item.avatar"/>
						</span>
					</div>
					<div class="content">
					<!--不同类型的评价显示不同图标-->
						<span v-show="item.rateType==0" class="icon-thumb_up up"></span>
						<span v-show="item.rateType==1" class="icon-thumb_down down"></span>
						<span class="text">{{item.text}}</span>
					</div>
				</li>
			</ul>
		</div></div>
		{{selectfood}}
	</div>
</template>

<script>
	import betterScroll from "better-scroll";
	import carcontrol from "@/components/carcontrol/carcontrol";
	export default{
		name:"food",
		props:["selectfood"],
		data(){
			return{
				isshow:false,
				hasconent:false,
				choose:2,
			}
		},
		components:{
			carcontrol
		},
		methods:{
			back(){
				this.isshow=false
			},
			Ehasconent(){
				this.hasconent=!this.hasconent
			},
			Echoose(num){
				this.choose=num;
			},
			addfood(){
				this.$set(this.selectfood,"count",1)
			}
		},
		filters:{
			time(value){
				console.log(new Date(value))
				console.log(new Date(value).toLocaleString())
				return new Date(value).toLocaleString()
			}
		},
		mounted(){
			this.$nextTick(()=>{
				if(!this.food){
					this.food = new betterScroll(this.$refs.food);
				}else{
					this.food.refresh();
				}				
			})
		},
		computed:{
			allratings(){
				if(this.hascount==false){
					return this.selectfood.retings
				}else{
					var list=[];
					this.selectfood.ratings.forEach((rating)=>{
						if(rating.text){
							list.push(rating)
						}
					})
					return list;
				}
			},
			chooserating(){
				if(this.choose==2){
					return this.allratings
				}else if(this.choose==0){
					var list=[];
					this.allratings.forEach((rating)=>{
						if(rating.rateType==0){
							list.push(rating)
						}
					})
					return list;
				}else if(this.choose==1){
					var list=[];
					this.allratings.forEach((rating)=>{
						if(rating.rateType==1){
							list.push(rating)
						}
					})
					return list;					
				}
			}
		},
		
		filters:{
			this(value){
				console.log(new Date(value).toLocaleString());
				return new Date(value).toLocaleString();
			}
		},
	}
</script>

<style lang="less">
	@import url("../../assets/less/mixin.less");
	
	.fooddetail{
		width:100%;min-height:500px;
		position: fixed;
		background-color: rgba(0,0,0,0.2);
		top:0;buttom:50px;
		color: #fff;
		.colse{
			position: absolute;
			top: 10px;
			left: 10px;
			padding: 10px;
			color: #FFFFFF;
		}
		.detail-header{
			width: 100%;height:0;
			position: relative;
			padding-top: 100%;
			background-color: #fff;
			img{
				position:absolute;
				width: 100%;height: 100%;
				top: 0;left: 0;
			}
		}
		.detail-msg {
			margin-bottom: 16px;
			.border-1px;
			padding: 18px;
			background-color: #fff;
			.title {
				color: rgb(7,17,27);
				font-weight: 700;
				font-size: 14px;
				line-height: 14px;
				margin-bottom: 8px;
			}
			.sell-count {
				font-size: 10px;
				color: rgb(147,153,159);
				line-height: 10px;
				margin-bottom: 18px;
			}
			.price {
				.new{
					font-size: 14px;
					font-weight: 700;
					color: rgb(240,20,20);
					line-height: 14px;
				}
				.old{
					font-size: 10px;
					font-weight: 700;
					color: rgb(147,153,159);
					text-decoration: line-through;
					font-style: italic;
					line-height: 24px;
				}
				
			}
		}
		.detail-dec {
			background-color: #fff;
			padding: 18px;
			margin-bottom: 16px;
			.border-1px;
			border-top-style:solid;
			.title {
				font-size: 14px;
				color: rgb(7,17,27);
				line-height: 14px;
				margin-bottom: 6px;
			}
			.info {
				color: rgb(77,85,93);
				font-size: 12px;
				font-weight: 200;
				line-height: 24px;
				padding: 0 8px;
			}
		}
		.detail-rating {
			background-color: #fff;
			padding: 18px;
			.border-1px;
			border-top-style:solid;
			.title {
				font-size: 14px;
				color: rgb(7,17,27);
				line-height: 14px;
				margin-bottom: 18px;
			}
			.choose-rating {
				display: flex;
				justify-content: flex-start;
				padding-bottom: 18px;
				margin-bottom: 12px;
				.border-1px;
				span{
					font-size: 12px;
					color: #000;
					line-height: 16px;
					padding: 6px 12px;
					margin-right: 8px;
				}
				.all{
					background-color: rgba(0,160,100,0.2);
				}
				.tj{
					background-color: rgba(0,160,220,0.2);
				}
				.tc{
					background-color: rgba(77,85,93,0.2);
				}
			}
			.choose-content {
				font-size: 12px;
				color: rgb(147,153,159);
				line-height: 24px;
			}
		}
		.detail-list {
			background-color: #fff;
			padding: 0 18px;
			.item{
				padding: 16px 0;
				.timecontainer{
					color: rgb(147,153,159);
					margin-bottom: 6px;
					display: flex;
					justify-content: space-between;
					.time{
						font-size: 10px;
						line-height: 12px;
					}
					.avatar{
						font-size: 10px;
						line-height: 12px;
						.bg-avatar{
							font-size: 0;
							width: 12px;
							height: 12px;
							overflow: hidden;
							border-radius: 50%;
						}
					}
					
				}
				.content{
					.up{
						color: #00A0DC;
					}
					.down{
						color:#B7BBBF
					}
					.text{
						color: #000;
					}
				}
			}
			
		}
	}
</style>