<template>
	<box-base class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">5&nbsp;/</span><span class="title2">货源供应</span>
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
			{{month}}，全省订购量<span class="orange"><numberFormat format="to-thousand" :numValue=totoalQty></numberFormat></span>箱，订足率<span class="orange">{{totalRate}}</span>%
		</div>

		<div class="content">
			<div class="mapBox">
				<map-chart :chartData=mapChartData></map-chart>
			</div>
			<div class="tableBox">
				<el-table ref="table" class="cma elTable" :data="mapChartData.chartData">
					<el-table-column prop="index" label="序号" align='center' header-align='center'></el-table-column>
					<el-table-column prop="name" label="单位" align='center' header-align='center'></el-table-column>
					<el-table-column prop="value" label="订足率（%）" align='center' header-align='center'></el-table-column>
					<el-table-column prop="valueInc" label="环比增减" align='center' header-align='center'>
						<template scope="scope">
							<div v-if="scope.row.valueInc  > 0" class="green">
								<i class="fa fa-arrow-up"></i>
								<span style="margin-left: 10px">{{ scope.row.valueInc }}</span>
							</div>
							<div v-else-if="scope.row.valueInc  < 0" class="red">
								<i class="fa fa-arrow-down"></i>
								<span style="margin-left: 5px">{{ scope.row.valueInc }}</span>
							</div>
							<div v-else>
								<span style="margin-left: 5px">{{ scope.row.valueInc }}</span>
							</div>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>

	</box-base>

</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import mapChart from './tool/mapChart.vue';
	import lineAreaChart from './tool/lineAreaChart.vue';
	import numberFormat from 'components/numberFormat/number-format.vue';

	export default {
		data() {
				return {
					month: '2017年5月',
					totoalQty: 21321215,
					totalRate: 54,
					mapChartData: {
						chartName: '订足率',
						chartData: [{
							index: 1,
							name: '榆林市',
							value: 60.35,
							valueInc: 1.23
						}, {
							index: 2,
							name: '延安市',
							value: 60.32,
							valueInc: 1.34
						}, {
							index: 3,
							name: '咸阳市',
							value: 64.69,
							valueInc: -0.21
						}, {
							index: 4,
							name: '铜川市',
							value: 61.14,
							valueInc: -1.03
						}, {
							index: 5,
							name: '渭南市',
							value: 60.86,
							valueInc: 0.28
						}, {
							index: 6,
							name: '宝鸡市',
							value: 68.34,
							valueInc: 0.56
						}, {
							index: 7,
							name: '西安市',
							value: 76.51,
							valueInc: 0.78
						}, {
							index: 8,
							name: '商洛市',
							value: 56.71,
							valueInc: -0.12
						}, {
							index: 9,
							name: '汉中市',
							value: 59.79,
							valueInc: -0.45
						}, {
							index: 10,
							name: '安康市',
							value: 60.75,
							valueInc: 0.89
						}, {
							index: 11,
							name: '杨凌示范区',
							value: 59.56,
							valueInc: 0.78
						}],
						splitData: [70, 65, 60, 55],
						comNum: [1, 1, 6, 3, 0]
					},
					lineAreaData: {
						title: '全省订足率走势',
						xData: ['201701', '201702', '201703', '201704', '201705'],
						yData: {
							name: '订足率（%）',
							datas: [
								84.3, 82.1, 84.9, 82.1, 87.4
							]
						}
					},
					options: [{
						"label": "货源供应分析",
						"value": "00"
					}, {
						"label": "货源供应情况",
						"value": "01"
					}],
					selectValue: ''
				}
			},
			components: {
				boxBase,
				mapChart,
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
			height: 4.8rem;
			border: 1px #4169E1 solid;
			position: relative;
			.mapBox {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
			}
			.tableBox {
				width: 45%;
				position: absolute;
				left: 55%;
			}
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
		}
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
</style>