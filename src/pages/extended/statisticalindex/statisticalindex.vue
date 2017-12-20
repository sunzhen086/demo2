<template>
	<div class="main">
		<leftnav :tabDatas=tabDatas></leftnav>
		<div class="top">
			<div class="topLeft">
			</div>
			<div class="topMid">
				{{topMidTitles[curIndex]}}
			</div>
			<div class="topRight">
			</div>
		</div>
		<div class="content" @mouseenter="showArrowsFun" @mouseleave="hideArrowsFun">
			<el-carousel ref="carousel" class="Carousel" :autoplay=false arrow="never" height="560px" trigger='click' @change="itemsChange">
				<el-carousel-item v-for="(item,index) in imgSrcs" :key="item">
					<img class="imgs" :src=item.src draggable="false" />
					<router-link to="/extended/itemwiki" v-show="index==4"><div class="itemLink"></div></router-link>
					<router-link to="/extended/custwiki" v-show="index==5"><div class="custLink"></div></router-link>
				</el-carousel-item>
				<div :class="{item2Click:item2ClickShow}" @click="showPopImgFun"></div>
				<img class="popImg" :class="{popImgShow:showPopImg}" src="../../../static/img/extended/statisticalindex/popImg.png" draggable="false" />
				<div class="arrows leftArrow" :class="{showArrows:showArrows && showLeftArrow}" @click="slideToLeft"><div class='arrow_left'></div></div>
				<div class="arrows rightArrow" :class="{showArrows:showArrows && showRightArrow}" @click="slideToRight"><div class='arrow_right'></div></div>
			</el-carousel>
		</div>
	</div>
</template>

<script>
	import leftnav from '../../../components/leftnav/left-nav.vue';
	
	export default {
		data() {
			return {
				tabDatas: [
					{
						tabNum: 'ginicoefficient',
						tabUrl: '/extended/statisticalindex',
						tabIcon: 'jini_1',
						tabName: '基尼系数'
					},
					{
						tabNum: 'priceIndex',
						tabUrl: '/404',
						tabIcon: 'pinpaibiaoxian_1',
						tabName: '价格指数'
					},
					{
						tabNum: 'confidenceIndex',
						tabUrl: '/404',
						tabIcon: 'pinpaifenbu_1',
						tabName: '经营信心指数'
					}
				],
				topMidTitles: [
					'基尼系数定义',
					'基尼系数在卷烟市场分析中的应用',
					'各地市基尼系数分析',
					'地市基尼系数趋势分析',
					'商品基尼系数对比分析',
					'单规格订购明细'
				],
				imgSrcs: [
					{src: require("../../../static/img/extended/statisticalindex/item1.png")},
					{src: require("../../../static/img/extended/statisticalindex/item2.png")},
					{src: require("../../../static/img/extended/statisticalindex/item3.png")},
					{src: require("../../../static/img/extended/statisticalindex/item4.png")},
					{src: require("../../../static/img/extended/statisticalindex/item5.png")},
					{src: require("../../../static/img/extended/statisticalindex/item6.png")},
				],
				curIndex: 0,
				showArrows: false,
				showLeftArrow: false,
				showRightArrow: true,
				item2ClickShow: false,
				showPopImg: false,
				itemsNumber: 6
			}
		},
		components: {
			leftnav
		},
		methods:{
			showArrowsFun: function() {
				this.showArrows = true;
			},
			hideArrowsFun: function() {
				this.showArrows = false;
			},
			slideToLeft: function() {
				this.$refs.carousel.prev();
				if(this.showPopImg == true) {
					this.showPopImg = false;
				}
			},
			slideToRight: function() {
				this.$refs.carousel.next();
				if(this.showPopImg == true) {
					this.showPopImg = false;
				}
			},
			itemsChange: function(currentItem, previousItem) {
				this.curIndex = currentItem;
				if(currentItem+1 == 1) {
					this.showLeftArrow = false;
				} else {
					this.showLeftArrow = true;
				}
				if(currentItem+1==2) {
					this.item2ClickShow = true;
				} else {
					this.item2ClickShow = false;
				}
				if(currentItem+1 == this.itemsNumber) {
					this.showRightArrow = false;
				} else {
					this.showRightArrow = true;
				}
			},
			showPopImgFun: function() {
				this.showPopImg = true;
				this.item2ClickShow = false;
			}
		},
		mounted() {
			this.$store.commit('setTopNavStatus', 'extended');
			this.$store.commit('setLeftNavStatus', 'ginicoefficient');
		}
	}
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';

	.main {
		width: 12.3rem;
		height: 6.6rem;
		overflow: hidden;
		margin-left: 1.1rem;
		
		.top{
			padding-top: $box-distince;
			margin-bottom: 0.25rem;
			overflow:hidden;
			.topLeft{
				width:64px;
				height:76px;
				float:left;
				background:url(../../../static/img/extended/datawiki/cust/t1.png) no-repeat top left;
			}
			.topMid{
				height:76px;
				font-size:24px;
				font-weight: bold;
				float:left;
				line-height:76px;
				color: white;
				margin-left: -18px;
			}
			.topRight{
				width:330px;
				height:76px;
				float:left;
				background:url(../../../static/img/extended/datawiki/cust/t2.png) no-repeat bottom right;
				margin-left: 20px;
			}
		}
		
		.content {
			width: 100%;
			height: 5.6rem;
			position: relative;
			margin-top: -0.1rem;
			
			.imgs {
				width: 100%;
				height: 100%;
			}
			
			.item2Click {
				width: 10.8rem;
				height: 5.2rem;
				position: absolute;
				left: 0.7rem;
				top: 0.05rem;
				z-index: 100;
				cursor: pointer;
			}
			
			.custLink {
				width: 1.5rem;
				height: 0.2rem;
				position: absolute;
				top: 1.37rem;
				left: 3.3rem;
				cursor: pointer;
				z-index: 100;
			}
			
			.itemLink {
				width: 0.75rem;
				height: 0.2rem;
				position: absolute;
				top: 2.27rem;
				left: 1.75rem;
				cursor: pointer;
				z-index: 100;
			}
			
			.arrows {
				width: 0.7rem;
				height: 5.57rem;
				margin-top: 0.03rem;
				z-index: 100;
				display: none;
				background-color: rgba(31,45,61,0.11);
				transition: all 0.2s linear;
			}
			.arrows:hover {
				cursor: pointer;
				background-color: rgba(31,45,61,0.23);
			}
			
			.leftArrow {
				position: absolute;
				top: 0;
				left: 0;
				
				.arrow_left {
					position: absolute;
					top: 2.65rem;
					left: 0.2rem;
					width: 0.26rem;
					height: 0.23rem;
					background-image: url(../../../static/img/extended/statisticalindex/arrow_left.png);
				}
			}
			
			.rightArrow {
				position: absolute;
				top: 0;
				right: 0;
				
				.arrow_right {
					position: absolute;
					top: 2.65rem;
					right: 0.2rem;
					width: 0.26rem;
					height: 0.23rem;
					background-image: url(../../../static/img/extended/statisticalindex/arrow_right.png);
				}
			}
			
			.showArrows {
				display: block;
			}
			
			.popImg {
				width: 100%;
				height: 5.5rem;
				opacity: 0;
				transition: all 0.5s linear;
				position: absolute;
				margin-top: -5.65rem;
			}
			.popImgShow {
				margin-top: 0rem;
				z-index: 99;
				opacity: 1;
			}
		}
	}
</style>