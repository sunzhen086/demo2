<template>
	<box-base class="sale-trend-box">
		<div slot="box-title">
			<p class="title">2017年1月-5月重点品牌销量排名</p>
		</div>
		<div slot="box-extend">
			<link-btn  @on-click="tableShowHide"></link-btn> 
			<!--<div class="changeBtn">
				<div @click="tableShowHide" class="tableBtn Btn" :class="{active:this.showTable===1}" ></div>
			</div>-->
		</div>

		<div class="rankPic">
			<bar-line-chart :chartData=chartData></bar-line-chart>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import barLineChart from './barLineChart.vue';
	import linkBtn from 'components/detailbutton/link-button.vue';


	export default {

		data() {
			return {
				chartData: {
					brandArr:['好猫', '芙蓉王', '利群', '云烟', '白沙', '兰州', '黄鹤楼', '南京', '红塔山', '中华', '娇子', '红河', '玉溪', '泰山', '黄山', '苏烟', '黄金叶','长白山','贵烟','红金龙','中南海','钻石','七匹狼','金圣','金桥','真龙'],
					saleUpArr:[143199.32,45930.43,32027.37,22744.52,20724.44,19661.45,17579.42,16288.49,15948.63,13936.72,7949.22,4381.91,3178.15,3073.34,2971.00,2880.96,2692.12,2210.06,1696.63,1578.17,1417.49,856.32,737.39,383.60,123.51,120.45],
					saleDownArr:[137430.06,44931.01,25878.18,25287.61,22634.33,18928.57,16136.95,11509.49,17579.23,15199.55,7230.19,1612.13,3044.35,3284.19,2994.89,2980.90,2210.88,2340.51,1263.59,2053.52,1605.06,765.06,1028.78,317.09,null,154.40],
					saleRateArr:[4.20,2.22,23.76,-10.06,-8.44,3.87,8.94,41.52,-9.28,-8.31,9.94,171.81,4.39,-6.42,-0.80,-3.35,21.77,-5.57,34.27,-23.15,-11.69,11.93,-28.32,20.97,null,-21.99],
					unitName:'箱',
					qtyScale:[0,150000],
					rateScale:[-30,180]
				}
			}
		},
		components: {
			boxBase,
			barLineChart,
			linkBtn
		},
		methods: {
			tableShowHide:function(){
			}
		}

	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.sale-trend-box {
		height: 2.86rem;
		margin-top:$box-distince;
		.rankPic{
			margin:0 0.1rem 0.1rem 0.1rem;
			height:2.5rem;
		}
	}

</style>