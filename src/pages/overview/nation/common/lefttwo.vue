<template>
	<box-base class="leftBox">
		<div slot="box-title">
			<p class="title">销售收入</p>
		</div>
		<div slot="box-extend" class="extend-height">
			<p>
				<label>同比排名：{{chartData.shanxi.rank}}</label>
				<label :class="{'red':this.chartData.shanxi.rankType == '-1','green':this.chartData.shanxi.rankType == '1' }">(</label>
				<i :class="{'fa fa-arrow-down':this.chartData.shanxi.rankType == '-1','fa fa-arrow-up':this.chartData.shanxi.rankType == '1' }" aria-hidden="true"></i>
				<label :class="{'red':this.chartData.shanxi.rankType == '-1','green':this.chartData.shanxi.rankType == '1' }">1)</label>
			</p>
		</div>

		<div>
			<p class="number info">
				<label class="lab-left">
					<numberFormat format="small-decimal" :strValue=chartData.all.sales></numberFormat>
					<span class="unit">亿元</span>
				</label>
				<label class="info-right">
					<numberFormat format="small-decimal" :strValue=chartData.shanxi.sales></numberFormat>
					<span class="unit">亿元</span>
				</label>
			</p>
			<p class="info">
				<div class="info-left">
					<label class="title">全国</label>
					<i :class="{'fa fa-arrow-down':this.chartData.all.percentType == '-1','fa fa-arrow-up':this.chartData.all.percentType == '1' }" aria-hidden="true">
						<label>{{chartData.all.percent}}%</label>
					</i>
				</div>
				<div class="info-right-shanxi">
					<label class="title">陕西</label>
					<i :class="{'fa fa-arrow-down':this.chartData.shanxi.percentType == '-1','fa fa-arrow-up':this.chartData.shanxi.percentType == '1' }" aria-hidden="true">
						<label>{{chartData.shanxi.percent}}%</label>
					</i>
				</div>
			</p>
		</div>

		<div class="content">
			<line-chart :chartData=chartData></line-chart>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';

	import lineChart from './tool/lineChart.vue';
import numberFormat from 'components/numberformat/number-format.vue';
	export default {
		data() {
			return {
				chartData: {
					'maxData': 15,
					'minData': -8,
					'intervalData': 8,
					'all': {
						datas: [
							14.09, 8.55, 8.95, 4.66, -3.64
						],
						sales: '13705.50',
						percent: '-3.64',
						percentType: '-1',
						name: '全国'
					},
					'shanxi': {
						datas: [
							14.80, 9.74, 11.91, 4.63, -7.36
						],
						sales: '384.68',
						rank: '25', //排名
						rankType: '-1', //排名类型 1上升 -1下降
						percent: '-7.36',
						percentType: '-1',
						name: '陕西'
					}
				}
			}

		},
		components: {
			boxBase,
			lineChart,
			numberFormat
		},
		methods: {
			getInt: function(v) {
				return(v + '').split("\.")[0];
			},
			getDec: function(v) {
				return '.' + ((v + '').split("\.")[1]);
			}
		}

	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	@import "/tool/left.scss";
	.leftBox {
		margin-bottom: $box-distince;
	}
	
	.red {
		color: $red;
	}
	
	.green {
		color: $green;
	}
	
	.orange {
		color: $orange;
	}
	
	.extend-height {
		height: 0.14rem;
	}
</style>