<template>
	<box-base class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">3&nbsp;/</span><span class="title2">商业库存</span>
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

			{{month}}，全省库存<span class="orange"><numberFormat format="to-thousand" :numValue=itemInvty></numberFormat></span>万箱，存销比<span class="orange">{{invtyRate}}</span>

		</div>
		<div class="content">
			<bar-line-chart :chartData=chartData></bar-line-chart>
		</div>

	</box-base>

</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import barLineChart from './tool/barLineChart.vue';
	import numberFormat from 'components/numberFormat/number-format.vue';

	export default {
		data() {
				return {
					month: '2017年5月',
					itemInvty: 2135,
					invtyRate: 0.54,
					chartData: {
						title: '全省库存走势',
						xData: ['201601', '201602', '201603', '201604', '201605', '201606', '201607', '201608', '201609', '201610', '201611', '201612', '201701', '201702', '201703', '201704', '201705'],
						yData: {
							name: '库存（万箱）',
							datas: [
								2143, 2221, 3149, 4221, 3174, 3198, 3532, 3643, 3121, 2449, 3121, 3174, 2298, 3232, 2643, 3121, 2135
							]
						},
						y2Data: {
							name: '存销比',
							datas: [
								0.52, 0.51, 0.52, 0.62, 0.56, 0.52, 0.63, 0.52, 0.51, 0.52, 0.62, 0.56, 0.62, 0.53, 0.52, 0.61, 0.62
							]
						}
					},
					options: [{
						"label": "商品库存汇总表",
						"value": "00"
					}, {
						"label": "公司进销存统计",
						"value": "01"
					}],
					selectValue: ''
				}
			},
			components: {
				boxBase,
				barLineChart,
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