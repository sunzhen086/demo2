<template>
	<box-base class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">6&nbsp;/</span><span class="title2">客户订货</span>
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

			{{month}}，全省重需率<span class="orange">{{cxRate}}</span>%， 环比
			<span :class="{'red':lasCxRatetInc < 0,'green':lasCxRatetInc > 0 }">
				<i :class="{'fa fa-arrow-down':this.lasCxRatetInc <0,'fa fa-arrow-up':lasCxRatetInc>0 }" aria-hidden="true"></i>
				{{lasCxRatetInc}}
			</span> 个百分点

		</div>
		<div class="content">
			<el-table class="cma elTable" :show-header=true :border=true :data="tableData">
				<el-table-column prop="index" label="订货次数" align='center' header-align='center' min-width='105'></el-table-column>
				<el-table-column prop="rate" label="占比" align='center' header-align='center' min-width='250'>
					<template scope="scope">
						<div class="number">
							{{ scope.row.rate }}%
						</div>
						<div class="picbox">
							<div class="barBox orange" :style="{ width: scope.row.rate + 'px' }"></div>
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="rateInc" label="（-）较上月（+）" align='center' header-align='center' min-width='300'>
					<template scope="scope">
						<div v-if="scope.row.rateInc  < 0" class="green">
							<div class="incPicbox left">
								<div class="barBox red right" :style="{ width: -scope.row.rateInc/maxInc*80 + '%' }"></div>
							</div>
							<div class="incNumber left">
								{{ scope.row.rateInc }}
							</div>
						</div>
						<div v-if="scope.row.rateInc  > 0" class="green">
							<div class="incPicbox left"></div>
							<div class="incNumber left">
								{{ scope.row.rateInc }}
							</div>
							<div class="incPicbox left">
								<div class="barBox green" :style="{ width: scope.row.rateInc/maxInc*80 + '%' }"></div>
							</div>
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="rateIncAdd" label="累加" align='center' header-align='center' min-width='250'>
					<template scope="scope">
						<div class="number">
							{{ scope.row.rateIncAdd }}%
						</div>
						<div class="picbox">
							<div class="barBox orange" :style="{ width: scope.row.rateIncAdd + 'px' }"></div>
						</div>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</box-base>

</template>

<script>
	import boxBase from 'components/box/box-base.vue';

	export default {
		data() {
				return {
					month: '2017年5月',
					cxRate: 38.89,
					lasCxRatetInc: 2.34,
					maxInc: 10,
					tableData: [{
						'index': '4次',
						'rate': 15,
						'rateInc': 5,
						'rateIncAdd': 15
					}, {
						'index': '3次',
						'rate': 20,
						'rateInc': -10,
						'rateIncAdd': 35
					}, {
						'index': '2次',
						'rate': 60,
						'rateInc': 10,
						'rateIncAdd': 95
					}, {
						'index': '1次',
						'rate': 5,
						'rateInc': -4,
						'rateIncAdd': 100
					}],
					options: [{
						"label": "客户订货日汇总",
						"value": "00"
					}, {
						"label": "客户订货月汇总",
						"value": "01"
					}],
					selectValue: ''
				}
			},
			components: {
				boxBase
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
		.content {
			margin-left: 0.15rem;
			margin-bottom: 0.13rem;
			margin-right: 0.13rem;
			.number {
				width: 1.1rem;
				text-align: right;
				padding: 0 0.05rem;
				float: left;
			}
			.picbox {
				margin-left: 1.20rem;
				margin-top: 0.04rem;
				height: 0.16rem;
				.barBox {
					height: 100%;
				}
				.red {
					background-color: $red;
				}
				.green {
					background-color: $green;
				}
				.orange {
					background-color: $orange;
				}
			}
			.incNumber {
				width: 0.6rem;
				text-align: center;
			}
			.incPicbox {
				width: 1.1rem;
				margin-top: 0.04rem;
				height: 0.16rem;
				.barBox {
					height: 100%;
				}
				.red {
					background-color: $red;
				}
				.green {
					background-color: $green;
				}
				.orange {
					background-color: $orange;
				}
			}
			.left {
				float: left;
			}
			.right {
				float: right;
			}
		}
	}
</style>