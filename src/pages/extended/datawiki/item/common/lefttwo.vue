<template>
	<box-base class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">2&nbsp;/</span><span class="title2">销量规模</span>
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
			截止到2017年6月26日，年累计订货数量<span class="orange"><numberFormat format="to-thousand" :numValue=totalQty></numberFormat></span>箱，同比
			<span :class="{'red':this.rankType == '-1','green':this.rankType == '1' }">
				<i :class="{'fa fa-arrow-down':this.rankType == '-1','fa fa-arrow-up':this.rankType == '1' }" aria-hidden="true"></i>
				{{totalRank}}
			</span>%
		</div>
		<div class="content">
			<div class="pieBox">
				<pie-chart :chartData=baseTypeData></pie-chart>
			</div>
			<div class="pieBox">
				<pie-chart :chartData=saleScaleData></pie-chart>
			</div>
			<div class="pieBox">
				<pie-chart :chartData=marketTypeData></pie-chart>
			</div>
		</div>

		<div class="note">
			{{itemName}}销量占总销量<span class="orange">{{spTotalRate}}</span>%，排名{{spTotalRank}}；占同品类{{spName}}<span class="orange">{{spRate}}</span>%，排名{{spRank}}
		</div>
		<div class="tableContent">
			<el-table ref="table" class="cma elTable" :data="tableData" @row-click="rowOnClick" height="280">
				<el-table-column prop="index" label="序号" align='center' header-align='center'></el-table-column>
				<el-table-column prop="itemName" label="商品" align='center' header-align='center'>
					<template scope="scope">
						<span class='itemName' >{{ scope.row.itemName }}</span>
					</template>
				</el-table-column>
				<el-table-column prop="saleQty" label="年累计销量（箱）" align='center' header-align='center'></el-table-column>
				<el-table-column prop="sameIncRate" label="同比（%）" align='center' header-align='center'>
					<template scope="scope">
						<div v-if="scope.row.sameIncRate  > 0" class="green">
							<i class="fa fa-arrow-up"></i>
							<span style="margin-left: 10px">{{ scope.row.sameIncRate }}</span>
						</div>
						<div v-else-if="scope.row.sameIncRate  < 0" class="red">
							<i class="fa fa-arrow-down"></i>
							<span style="margin-left: 5px">{{ scope.row.sameIncRate }}</span>
						</div>
						<div v-else>
							<span style="margin-left: 5px">{{ scope.row.sameIncRate }}</span>
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="saleRate" label="销量占比（%）" align='center' header-align='center'></el-table-column>
				<el-table-column prop="saleRateInc" label="占比同比" align='center' header-align='center'>
					<template scope="scope">
						<div v-if="scope.row.saleRateInc  > 0" class="green">
							<i class="fa fa-arrow-up"></i>
							<span style="margin-left: 10px">{{ scope.row.saleRateInc }}</span>
						</div>
						<div v-else-if="scope.row.saleRateInc  < 0" class="red">
							<i class="fa fa-arrow-down"></i>
							<span style="margin-left: 5px">{{ scope.row.saleRateInc }}</span>
						</div>
						<div v-else>
							<span style="margin-left: 5px">{{ scope.row.saleRateInc }}</span>
						</div>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</box-base>

</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import pieChart from './tool/pieChart.vue';
	import numberFormat from 'components/numberFormat/number-format.vue';

	export default {
		data() {
				return {
					totalQty: 218414,
					totalRank: 20,
					itemName: '中华（软）',
					spName: '[500-600元)',
					spTotalRate: 23.23,
					spTotalRank: 4,
					spRate: 56.74,
					spRank: 1,
					rankType: '1', //1上升 0不变 -1下降
					baseTypeData: {
						title: '按业态销量占比',
						legend: ['食杂店', '便利店', '娱乐服务', '商场', '超市', '烟酒商店', '其他'],
						data: [{
							name: '食杂店',
							value: 69.06
						}, {
							name: '便利店',
							value: 17.59
						}, {
							name: '娱乐服务',
							value: 10.73
						}, {
							name: '商场',
							value: 10.13
						}, {
							name: '其他',
							value: 11.47
						}, {
							name: '超市',
							value: 31.01
						}, {
							name: '烟酒商店',
							value: 29.01
						}]
					},
					saleScaleData: {
						title: '按规模销量占比',
						legend: ['大', '中', '小'],
						data: [{
							name: '大',
							value: 17.59
						}, {
							name: '中',
							value: 10.73
						}, {
							name: '小',
							value: 10.13
						}]
					},
					marketTypeData: {
						title: '按市场类型销量占比',
						legend: ['城镇', '乡村'],
						data: [{
							name: '城镇',
							value: 69.06
						}, {
							name: '乡村',
							value: 17.59
						}]
					},
					tableData: [{
						index: '1',
						itemName: '中华（软）',
						saleQty: 130641.98,
						sameIncRate: 3.39,
						saleRate: 76.51,
						saleRateInc: 12.13
					}, {
						index: '2',
						itemName: '云烟(印象)',
						saleQty: 120641.98,
						sameIncRate: 5.95,
						saleRate: 68.34,
						saleRateInc: 5.29
					}, {
						index: '3',
						itemName: '云烟(94mm印象)	',
						saleQty: 110641.98,
						sameIncRate: 5.82,
						saleRate: 64.69,
						saleRateInc: 2.71
					}, {
						index: '4',
						itemName: '七匹狼(新圣典)',
						saleQty: 100641.98,
						sameIncRate: 7.01,
						saleRate: 61.14,
						saleRateInc: 2.37
					}, {
						index: '5',
						itemName: '芙蓉王(软天源)',
						saleQty: 90641.98,
						sameIncRate: 8.36,
						saleRate: 60.86,
						saleRateInc: 1.76
					}, {
						index: '6',
						itemName: '黄金叶(上河图)',
						saleQty: 80641.98,
						sameIncRate: 2.21,
						saleRate: 60.75,
						saleRateInc: -0.05
					}, {
						index: '7',
						itemName: '黄鹤楼(软珍品)',
						saleQty: 70641.98,
						sameIncRate: 4.31,
						saleRate: 60.35,
						saleRateInc: -0.24
					}, {
						index: '8',
						itemName: '南京(红楼卷)',
						saleQty: 60641.98,
						sameIncRate: -6.91,
						saleRate: 60.32,
						saleRateInc: 0.93
					}, {
						index: '9',
						itemName: '黄山(经典皖烟)',
						saleQty: 50641.98,
						sameIncRate: 8.48,
						saleRate: 59.79,
						saleRateInc: 6.56
					}, {
						index: '10',
						itemName: '娇子(软龙涎香)',
						saleQty: 40641.98,
						sameIncRate: 11.91,
						saleRate: 59.56,
						saleRateInc: 5.13
					}],
					options: [{
						"label": "商品销售年表",
						"value": "00"
					}, {
						"label": "商品销售月表",
						"value": "01"
					}],
					selectValue:''
				}
			},
			components: {
				boxBase,
				pieChart,
				numberFormat
			},
			methods: {
				rowOnClick: function(row) {
					//跳转到当前页面没效果，需处理
					this.$router.push({ path: '/extended/itemwiki', query:{itemName: row.itemName}})
				}
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
			height: 2.7rem;
			.pieBox {
				width: 2.6rem;
				height: 2.6rem;
				float: left;
				margin-left: $box-distince;
				border: 1px #4169E1 solid;
				padding: 0.1rem;
			}
		}
		.tableContent {
			margin-left: 0.15rem;
			margin-right: 0.15rem;
			.itemName {
				padding-bottom: 0.01rem;
				border-bottom: 1px solid #fff;
				cursor: pointer;
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
	
	.green {
		color: $green;
	}
	
	.red {
		color: $red;
	}
</style>