<template>
	<box-base class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">7&nbsp;/</span><span class="title2">市场状态</span>
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
			{{month}}，全省社会库存箱<span class="orange"><numberFormat format="to-thousand" :numValue=itemInvty></numberFormat></span>箱，存销比<span class="orange">{{invtyRate}}</span>
			</span>
		</div>
		<div class="content">
			<bar-line-chart :chartData=chartData1></bar-line-chart>
		</div>

		<div class="note">
			{{month}}，全省零售价格指数<span class="orange">{{jgRate}}</span>

		</div>
		<div class="content">
			<line-area-chart :chartData=chartData2></line-area-chart>
		</div>
	</box-base>

</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import barLineChart from './tool/barLineChart.vue';
	import lineAreaChart from './tool/lineAreaChart.vue';
	import numberFormat from 'components/numberFormat/number-format.vue';

	export default {
		data() {
				return {
					month: '2017年5月',
					itemInvty: 3135,
					invtyRate: 1.54,
					jgRate: 98.89,
					chartData1: {
						title: '全省社会库存走势',
						xData: ['201601', '201602', '201603', '201604', '201605', '201606', '201607', '201608', '201609', '201610', '201611', '201612', '201701', '201702', '201703', '201704', '201705'],
						yData: {
							name: '社会库存（万箱）',
							datas: [
								3143, 3121, 3249, 3321, 3574, 3698, 3232, 3143, 3121, 3249, 3321, 3574, 3698, 3232, 3232, 3143, 3135
							]
						},
						y2Data: {
							name: '社会存销比',
							datas: [
								1.23, 1.11, 1.21, 1.23, 1.56, 1.21, 1.03, 1.23, 1.11, 1.21, 1.23, 1.05, 1.02, 1.030, 1.03, 1.23, 1.11, 1.21
							]
						}
					},
					chartData2: {
						title: '全省零售价格走势',
						xData: ['201601', '201602', '201603', '201604', '201605', '201606', '201607', '201608', '201609', '201610', '201611', '201612', '201701', '201702', '201703', '201704', '201705'],
						yData: {
							name: '零售价格指数',
							unitName:'',
							type: 'line',
							datas: [94.43, 96.21, 95.49, 94.21, 95.74, 94.98, 94.32, 96.43, 96.21, 95.49, 95.21, 97.74, 98.98, 96.32, 96.98, 97.32, 98.89]
						}
					},
					options: [{
						"label": "社会库存分析",
						"value": "00"
					}, {
						"label": "价格指数分析",
						"value": "01"
					}],
					selectValue: ''
				}
			},
			components: {
				boxBase,
				barLineChart,
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
			margin-top: 0.3rem;
			margin-bottom: 0.2rem;
			margin-left: 0.2rem;
			font-size: 0.16rem;
			line-height: 0.2rem;
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