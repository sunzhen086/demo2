<template>
	<box-base class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">4&nbsp;/</span><span class="title2">市场覆盖</span>
			<span class="reportSpan cma">
				<el-select v-model="selectValue" placeholder="相关分析" 
						size="small"
						class="left cma mid-item item-select" popper-class="cma-select">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
				</el-select>
			</span>
		</div>

		<div class="note">

			{{month}}，全省上柜户数<span class="orange"><numberFormat format="to-thousand" :numValue=overNum></numberFormat></span>户， 上柜率
			<span class="orange">{{overRate}}</span>%，环比
			<span :class="{'red':this.rankType == '-1','green':this.rankType == '1' }">
				<i :class="{'fa fa-arrow-down':this.rankType == '-1','fa fa-arrow-up':this.rankType == '1' }" aria-hidden="true"></i>
				{{lastRate}}
			</span> 个百分点

		</div>
		<div class="content">
			<line-area-chart :chartData=chartData></line-area-chart>
		</div>

	</box-base>

</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import lineAreaChart from './tool/lineAreaChart.vue';
	import numberFormat from 'components/numberFormat/number-format.vue';

	export default {
		data() {
				return {
					month: '2017年5月',
					overNum: 234617, //上柜户数
					overRate: 74, //上柜率
					lastRate: 0.23,
					rankType: '1',
					chartData: {
						title: '全省上柜率走势走势',
						xData: ['201601', '201602', '201603', '201604', '201605', '201606', '201607', '201608', '201609', '201610', '201611', '201612', '201701', '201702', '201703', '201704', '201705'],
						yData: {
							name: '上柜率',
							unitName:'%',
							datas: [
								72.43, 72.21, 73.49, 74.21, 71.74, 71.98, 75.32, 76.43, 71.21, 74.49, 71.21, 71.74, 72.98, 72.32, 74.49, 71.21, 73.74
							]
						}
					},
					options: [{
						"label": "市场覆盖分析",
						"value": "00"
					}, {
						"label": "市场覆盖排名",
						"value": "00"
					}],
					selectValue: ''
				}
			},
			components: {
				boxBase,
				lineAreaChart,
				numberFormat
			}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../../styles/variables.scss';
	.main {
		width: 9.5rem;
		margin-bottom: 0.13rem;
		.title1 {
			color: #2edbff;
			font-size: 0.3rem;
		}
		.title2 {
			margin-left: 0.1rem;
			color: #2edbff;
			font-size: 0.18rem;
		}
		.reportSpan {
			float: right;
			margin-right: 0.15rem;
			padding-top: 0.02rem;
			color: black;
		}
		.content {
			margin-left: 0.15rem;
			margin-bottom: 0.13rem;
			margin-right: 0.13rem;
			border: 1px #4169E1 solid;
		}
		.detail {
			margin-top: 0.2rem;
			margin-left: 0.15rem;
			margin-bottom: 0.1rem;
			font-size: 0.16rem;
		}
		.note {
			margin-left: 0.2rem;
			font-size: 0.16rem;
			line-height: 0.2rem;
			margin-bottom: 0.2rem;
			span {
				font-size: 0.2rem;
				font-weight: bold;
				margin: 0 0.05rem 0 0.01rem;
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
		}
	}
</style>