<template>
	<div ref="tableChart" class="tableChart">
		<div class="tableTitle">
			5月份各地市客户流失率列表
		</div>

		<el-table class="cma " :show-header=true height="482" :data="tableData">
			<el-table-column label="单位" align="center" :show-overflow-tooltip=true>
				<template scope="scope">
					<div class="muti" :style="addStyle(scope.row.comName)" @click="doClick(scope.row.comName)">{{scope.row.comName}}</div>
				</template>
			</el-table-column>

			<el-table-column label="订货户数" header-align="center" align="right" :show-overflow-tooltip=true>
				<template scope="scope">
					<div class="muti">
						<number-format :format=format :numValue='scope.row.orderCount'></number-format>
					</div>
				</template>
			</el-table-column>

			<el-table-column label="流出户数" header-align="center" align="right" :show-overflow-tooltip=true>
				<template scope="scope">
					<div class="muti">
						<number-format :format=format :numValue='scope.row.runOffCount'></number-format>
					</div>
				</template>
			</el-table-column>

			<el-table-column label="流失率" align="center" :show-overflow-tooltip=true>
				<template scope="scope">
					<div class="muti">
						<multi-content-extend :rate=scope.row.runOffRate></multi-content-extend>
					</div>
				</template>
			</el-table-column>

			<el-table-column label="流入户数" header-align="center" align="right" :show-overflow-tooltip=true>
				<template scope="scope">
					<div class="muti">
						<number-format :format=format :numValue='scope.row.inflowCount'></number-format>
					</div>
				</template>
			</el-table-column>

			<el-table-column label="稳定订货户数" header-align="center" align="right" :show-overflow-tooltip=true>
				<template scope="scope">
					<div class="muti">
						<number-format :format=format :numValue='scope.row.steadyCount'></number-format>
					</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import multiContentExtend from 'components/multicontent/multicontent-extend.vue';
	import numberFormat from 'components/numberFormat/number-format.vue';

	export default {
		data() {
			return {
				format: 'to-thousand',
				tableData: [{
					comName: "全省",
					orderCount: 129122,
					runOffCount: 1537,
					runOffRate: 1.19,
					inflowCount: 1080,
					steadyCount: 125494
				}, {
					comName: "西安",
					orderCount: 15411,
					runOffCount: 230,
					runOffRate: 1.49,
					inflowCount: 164,
					steadyCount: 14953
				}, {
					comName: "宝鸡",
					orderCount: 10536,
					runOffCount: 154,
					runOffRate: 1.46,
					inflowCount: 91,
					steadyCount: 10210
				}, {
					comName: "延安",
					orderCount: 8325,
					runOffCount: 114,
					runOffRate: 1.37,
					inflowCount: 75,
					steadyCount: 8131
				}, {
					comName: "渭南",
					orderCount: 30825,
					runOffCount: 399,
					runOffRate: 1.29,
					inflowCount: 267,
					steadyCount: 30159
				}, {
					comName: "汉中",
					orderCount: 13462,
					runOffCount: 161,
					runOffRate: 1.20,
					inflowCount: 122,
					steadyCount: 12957
				}, {
					comName: "安康",
					orderCount: 12411,
					runOffCount: 142,
					runOffRate: 1.14,
					inflowCount: 72,
					steadyCount: 11982
				}, {
					comName: "榆林",
					orderCount: 11290,
					runOffCount: 112,
					runOffRate: 0.99,
					inflowCount: 98,
					steadyCount: 10903
				}, {
					comName: "咸阳",
					orderCount: 14969,
					runOffCount: 142,
					runOffRate: 0.95,
					inflowCount: 71,
					steadyCount: 14714
				}, {
					comName: "商洛",
					orderCount: 8750,
					runOffCount: 71,
					runOffRate: 0.81,
					inflowCount: 88,
					steadyCount: 8440
				}, {
					comName: "铜川",
					orderCount: 2478,
					runOffCount: 11,
					runOffRate: 0.44,
					inflowCount: 30,
					steadyCount: 2383
				}, {
					comName: "杨凌",
					orderCount: 665,
					runOffCount: 1,
					runOffRate: 0.15,
					inflowCount: 2,
					steadyCount: 662
				}]
			}
		},
		components: {
			multiContentExtend,
			numberFormat
		},
		methods: {
			addStyle: function(name) {
				if(name == '西安') {
					return {
						cursor: 'pointer',
						textDecoration: 'underline'
					};
				}
			},
			doClick: function(name) {
				if(name == '西安') {
					this.$router.push({ path: '/extended/warncenterdetail'});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tableTitle {
		font-size: 0.15rem;
		height: 0.25rem;
		text-align: center;
		line-height: 0.25rem;
		font-weight: 700;
		color: rgb(78, 212, 248);
	}
</style>