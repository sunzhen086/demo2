<template>
	<div class="main cma">
		<box-base class="middleMap">
			<div slot="box-title">
				<p class="title">各区县销售整体情况对比</p>
			</div>
			<div slot="box-extend">
				单位：箱、万元
			</div>

			<div class="content">
				<el-table border class="cma-report" :show-header=true :data="tableData">
					<el-table-column label="序号" align="center" width="75" type="index" :show-overflow-tooltip=true>
					</el-table-column>
					<el-table-column label="营销部" align="center" :show-overflow-tooltip=true>
						<template scope="scope">
							<div class="muti">
								<div class="muti">{{scope.row.dptName}}</div>
							</div>
						</template>
					</el-table-column>

					<el-table-column label="销量" align="center" :show-overflow-tooltip=true>
						<el-table-column label="本期" align="right" header-align="center" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti">
									<div class="muti">{{scope.row.sale}}</div>
								</div>
							</template>
						</el-table-column>
						<el-table-column label="同期" align="right" header-align="center" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti">
									<div class="muti">{{scope.row.saleLast}}</div>
								</div>
							</template>
						</el-table-column>
						<el-table-column label="同比" align="right" header-align="center" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti">
									<div class="muti">
										<multi-content-extend :rate=scope.row.salePer*1 ></multi-content-extend>
									</div>
								</div>
							</template>
						</el-table-column>
					</el-table-column>

					<el-table-column label="含税销额" align="center" :show-overflow-tooltip=true>
						<el-table-column label="本期" align="right" header-align="center" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti">
									<div class="muti">{{scope.row.income}}</div>
								</div>
							</template>
						</el-table-column>
						<el-table-column label="同期" align="right" header-align="center" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti">
									<div class="muti">{{scope.row.incomeLast}}</div>
								</div>
							</template>
						</el-table-column>
						<el-table-column label="同比" align="right" header-align="center" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti">
									<div class="muti">
										<multi-content-extend :rate=scope.row.incomePer*1 ></multi-content-extend>
									</div>
								</div>
							</template>
						</el-table-column>
					</el-table-column>

					<el-table-column label="单箱值" align="center" :show-overflow-tooltip=true>
						<el-table-column label="本期" align="right" header-align="center" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti">
									<div class="muti">{{scope.row.single}}</div>
								</div>
							</template>
						</el-table-column>
						<el-table-column label="同期" align="right" header-align="center" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti">
									{{scope.row.singleLast}}
								</div>
							</template>
						</el-table-column>
						<el-table-column label="同比" align="right" header-align="center" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti">
									<multi-content-extend :rate=scope.row.singlePer*1 ></multi-content-extend>
								</div>
							</template>
						</el-table-column>
					</el-table-column>
				</el-table>
			</div>
		</box-base>
	</div>
</template>

<script>
	import multiContentExtend from 'components/multicontent/multicontent-extend.vue';
	import boxBase from 'components/box/box-base.vue';

	export default {
		data() {
			return {
				tableData: [{
					saleSeq: "",
					dptName: "合计",
					sale: "33135.8064",
					saleLast: "32457.9697",
					salePer: "2.09",
					income: '107282.4146',
					incomeLast: '100920.0215',
					incomePer: '6.30',
					single: "3.2377",
					singleLast: "3.1093",
					singlePer: '3.1093'
				}, {
					saleSeq: "1",
					dptName: "高新区营销部",
					sale: "2258.8587",
					saleLast: "1989.1955",
					salePer: "13.56",
					income: '7965.8514',
					incomeLast: '7160.1092',
					incomePer: '11.25',
					single: "3.5265",
					singleLast: "3.5995",
					singlePer: '-2.03'
				}, {
					saleSeq: "2",
					dptName: "新城区营销部",
					sale: "2274.9081",
					saleLast: "2542.4507",
					salePer: "-10.52",
					income: '8386.8332',
					incomeLast: '8667.0310',
					incomePer: '-3.23',
					single: "3.6867",
					singleLast: "3.4089",
					singlePer: '8.15'
				}, {
					saleSeq: "3",
					dptName: "碑林区营销部",
					sale: "2336.3139",
					saleLast: "2344.5310",
					salePer: "-0.35",
					income: '8350.5137',
					incomeLast: '8516.2269',
					incomePer: '-1.95',
					single: "3.5742",
					singleLast: "3.6324",
					singlePer: '-1.60'
				}, {
					saleSeq: "4",
					dptName: "莲湖区营销部",
					sale: "3266.9096",
					saleLast: "2896.1351",
					salePer: "12.80",
					income: '11148.8707',
					incomeLast: '9913.7595',
					incomePer: '12.46',
					single: "3.4127",
					singleLast: "3.4231",
					singlePer: '-0.30'
				}, {
					saleSeq: "5",
					dptName: "雁塔区营销部",
					sale: "3957.3690",
					saleLast: "4014.2032",
					salePer: "-1.42",
					income: '13403.3769',
					incomeLast: '13584.9821',
					incomePer: '-1.34',
					single: "3.3869",
					singleLast: "3.3842",
					singlePer: '0.08'
				}, {
					saleSeq: "6",
					dptName: "灞桥区营销部",
					sale: "2761.1711",
					saleLast: "2744.7311",
					salePer: "0.60",
					income: '8414.8781',
					incomeLast: '7986.5989',
					incomePer: '5.36',
					single: "3.0476",
					singleLast: "2.9098",
					singlePer: '4.74'
				}, {
					saleSeq: "7",
					dptName: "未央区营销部",
					sale: "5432.3412",
					saleLast: "4890.6703",
					salePer: "11.08",
					income: '18538.1270',
					incomeLast: '15933.4831',
					incomePer: '16.35',
					single: "3.4125",
					singleLast: "3.2579",
					singlePer: '4.75'
				}, {
					saleSeq: "8",
					dptName: "周至县分公司",
					sale: "918.0949",
					saleLast: "1192.1794",
					salePer: "-22.99",
					income: '2438.2708',
					incomeLast: '2934.2644',
					incomePer: '-16.90',
					single: "2.6558",
					singleLast: "2.4613",
					singlePer: '7.90'
				}, {
					saleSeq: "9",
					dptName: "户县分公司",
					sale: "1475.3965",
					saleLast: "1412.5147",
					salePer: "4.45",
					income: '3989.8606',
					incomeLast: '3598.5830',
					incomePer: '10.87',
					single: "2.7043",
					singleLast: "2.5476",
					singlePer: '6.15'
				}, {
					saleSeq: "10",
					dptName: "蓝田县分公司",
					sale: "876.8853",
					saleLast: "1140.4597",
					salePer: "-23.11",
					income: '2258.1769',
					incomeLast: '2706.4775',
					incomePer: '-16.56',
					single: "2.5752",
					singleLast: "2.3731",
					singlePer: '8.52'
				}, {
					saleSeq: "11",
					dptName: "阎良区分公司",
					sale: "801.2924",
					saleLast: "984.9753",
					salePer: "-18.65",
					income: '2633.2067',
					incomeLast: '2856.7517',
					incomePer: '-7.83',
					single: "3.2862",
					singleLast: "2.9003",
					singlePer: '13.31'
				}, {
					saleSeq: "12",
					dptName: "高陵区分公司",
					sale: "1038.2584",
					saleLast: "1018.7275",
					salePer: "1.92",
					income: '3070.3483',
					incomeLast: '2771.3269',
					incomePer: '10.79',
					single: "2.9572",
					singleLast: "2.7204",
					singlePer: '8.70'
				}, {
					saleSeq: "13",
					dptName: "长安区分公司",
					sale: "3844.9082",
					saleLast: "3498.7030",
					salePer: "9.90",
					income: '11293.6886',
					incomeLast: '9449.4845',
					incomePer: '19.52',
					single: "2.9373",
					singleLast: "2.7009",
					singlePer: '8.75'
				}, {
					saleSeq: "14",
					dptName: "临潼区分公司",
					sale: "1893.0991",
					saleLast: "1788.4932",
					salePer: "5.85",
					income: '5390.4118',
					incomeLast: '4840.9429',
					incomePer: '11.35',
					single: "2.8474",
					singleLast: "2.7067",
					singlePer: '5.20'
				}]
			}
		},
		components: {
			boxBase,
			multiContentExtend
		},
		methods: {},
		mounted() {
			this.$store.commit('setTopNavStatus', 'overview');
			this.$store.commit('setLeftNavStatus', 'vend');
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../styles/variables.scss";
	.main {
		font-size: 0.14rem;
		color: #fff;
		height: 100%;
		padding-left: $box-distince;
		padding-top: 0.15rem;
		.content {
			margin-top: 0.1rem;
		}
	}
	
	.middleMap {
		margin-right: 0.15rem;
	}
</style>