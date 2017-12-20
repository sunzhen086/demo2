<template>
	<box-base>
		<div slot="box-title">
			<p class="title">单箱均价</p>
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
					<span class="unit">万元</span>
				</label>
				<label class="info-right">
					<numberFormat format="small-decimal" :strValue=chartData.shanxi.sales></numberFormat>
					<span class="unit">万元</span>
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
					'minData': -5,
					'intervalData': 5,
					'all': {
						datas: [
							13.18, 8.43, 9.18, 8.1, -1.71
						],
						sales: '2.92',
						percent: '2.09',
						percentType: '1',
						name: '全国'
					},
					'shanxi': {
						datas: [
							11.46, 7.27, 6.70, 7.18, -2.09
						],
						sales: '2.65',
						rank: '30', //排名
						rankType: '1', //排名类型 1上升 -1下降
						percent: '-1.71',
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