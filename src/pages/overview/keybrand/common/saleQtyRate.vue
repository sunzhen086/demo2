<template>
	<box-base class="sale-rate-box">
		<div slot="box-title">
			<p class="title">重点品牌销量占比</p>
		</div>
		<div slot="box-extend">
			<detail-btn  @on-click="tableShowHide"></detail-btn> 
		</div>
		<div class="content">
			<div class="note">
				全省重点品牌销量占比<span class="orange"><numberFormat format="small-decimal" :numValue=proData.saleRate></numberFormat></span>%<br />
				同比
				<span>
					<i :class="{'fa fa-arrow-down':proData.saleRateInc< 0,'fa fa-arrow-up':proData.saleRateInc > 0 }" aria-hidden="true">
						<label><numberFormat format="small-decimal" :numValue=proData.saleRateInc></numberFormat></label>
					</i>
				</span>个百分点<br />
				<span class="red">{{proData.underNum}}</span>个地市销量占比低于全省
			</div>
			<div class="proMap" ref="proMap">
				<map-chart :chartData=proData.mapChartData></map-chart>
			</div>
			<div class="barTitle">占比同比增减</div>
			<div class="barChart">
				<bar-chart :chartData=proData.barChartData></bar-chart>
			</div>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import mapChart from './mapChart.vue';
	import barChart from './barChart.vue';
	import detailBtn from 'components/detailbutton/detail-button.vue';
	import numberFormat from 'components/numberformat/number-format.vue';

	export default {

		data() {
			return {
				showTable:0,
				proData: {
					saleRate:66.19,
					saleRateInc:2.69,
					underNum:3,
					mapChartData:{
						chartName:'重点品牌销量占比',
						chartData: [
							{name: '榆林市', value: 60.35},
							{name: '延安市', value: 60.32},
							{name: '咸阳市', value: 64.69},
							{name: '铜川市', value: 61.14},
							{name: '渭南市', value: 60.86},
							{name: '宝鸡市', value: 68.34},
							{name: '西安市', value: 76.51},
							{name: '商洛市', value: 56.71},
							{name: '汉中市', value: 59.79},
							{name: '安康市', value: 60.75},
							{name: '杨凌示范区', value: 59.56}
						],
						splitData:[70,65,60,55],
						comNum:[1,1,6,3,0]
					},
					barChartData:{
						organArr:['商洛','汉中','宝鸡','杨凌','咸阳','铜川','西安','渭南','延安','安康','榆林'],
						rateInc:[7.81,6.56,5.29,5.13,2.70,2.37,2.13,1.76,0.93,-0.05,-0.24]
					}
				}
			}
		},
		components: {
			boxBase,
			mapChart,
			barChart,
			detailBtn,
			numberFormat
		},
		methods: {
			tableShowHide:function(){
				this.showTable = 1-this.showTable;
				this.$emit('table-show-hide',this.showTable);
			}
		}

	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.sale-rate-box {
		height: 6.1rem;
		.content{
			position:relative;
			height: 5.6rem;
			.note{
				background-color: rgb(36,62,136);
				margin-left: 0.1rem;
				font-size: 0.14rem;
				line-height: 0.2rem;
				padding:0.15rem;
				position:absolute;
				span{
					font-size: 0.2rem;
					font-weight: bold;
					margin: 0 0.05rem 0 0.01rem;
				}
				.red,.fa-arrow-down{
					color: $red;
				}
				.green,.fa-arrow-up{
					color: $green;
				}
				.orange{
					color: $orange;
				}
			}
			.proMap{
				position:absolute;
				width: 100%;
				height: 3.95rem;
				top:0;
			}
			.barTitle{
				position:absolute;
				top:4rem;
				color:#ffffff;
				font-size: 0.14rem;
			}
			.barChart{
				position:absolute;
				top:4.2rem;
				width: 100%;
				height:1.4rem;
			}
		}
	}

</style>