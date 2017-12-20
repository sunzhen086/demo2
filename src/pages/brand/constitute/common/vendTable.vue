<template>
	<div>
		<el-table class="cma row-height-35" :show-header=showHeader height="419" :data="tableData" style="width:100%">
			<el-table-column label="序号" width="66" align="center">
				<template scope="scope">
					<div class="muti">
						{{scope.row.index}}
					</div>
				</template>
			</el-table-column>
			<el-table-column label="工业" align="center" min-width="70" header-align="center">
				<template scope="scope">
					<div class="muti" style="cursor: pointer;text-decoration: underline" @click="showTable(scope.row.vendname)">
						{{scope.row.vendname}}
					</div>
				</template>
			</el-table-column>
			<el-table-column label="本期数" align="center" min-width="80" header-align="center">
				<template scope="scope">
					<div class="muti">
						{{scope.row.items}}
					</div>
				</template>
			</el-table-column>
			<el-table-column label="同期数" align="center" min-width="78" header-align="center">
				<template scope="scope">
					<div class="muti">
						{{scope.row.itemsLast}}
					</div>
				</template>
			</el-table-column>
			<el-table-column label="规格增减" align="left" min-width="70">
				<template scope="scope">
					<div class="muti" style="padding-left: 0.15rem;">
						<template v-if="scope.row.itemsInc != 0">
							<div v-if="scope.row.itemsInc > 0">
								<i class='icon-style fa fa-arrow-up'> {{scope.row.itemsInc}}</i>
							</div>
							<div v-else>
								<i class='icon-style fa fa-arrow-down'> {{scope.row.itemsInc}}</i>
							</div>
						</template>
						<template v-else>
							<i class='icon-style fa fa-arrow-right'> {{scope.row.itemsInc}}</i>
						</template>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="本期销量" align="center" min-width="75">
				<template scope="scope">
					<div class="muti">
						<number-format format='to-thousand' :numValue='scope.row.sales'></number-format>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="同期销量" align="center" min-width="75">
				<template scope="scope">
					<div class="muti">
						<number-format format='to-thousand' :numValue='scope.row.salesLast'></number-format>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="销量增幅" align="left" min-width="75">
				<template scope="scope">
					<div class="muti">
						<template v-if="scope.row.salesInc != 0">
							<div v-if="scope.row.salesInc > 0">
								<i class='icon-style fa fa-arrow-up'> {{scope.row.salesInc}}%</i>
							</div>
							<div v-else>
								<i class='icon-style fa fa-arrow-down'> {{scope.row.salesInc}}%</i>
							</div>
						</template>
						<template v-else>
							<i class='icon-style fa fa-arrow-right'> {{scope.row.salesInc}}%</i>
						</template>
					</div>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog v-model="dialogVisible" size="large" class="cma" top='15%' :title="title">
			<vendReport :reportData=reportData></vendReport>
		</el-dialog>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import multiContent from 'components/multicontent/multicontent.vue';
	import numberFormat from 'components/numberFormat/number-format.vue';
	import barContent from './barcontent.vue';
	import vendReport from './vendReport.vue';

	export default {
		computed: {
			itemRange: {
				get: function() {
					var datas = (this.tableData);
					var max = datas[0].items;
					var min = datas[0].items;
					console.log("getItem")
					for(var i = 0; i < datas.length; i++) {
						var data = datas[i];
						if(data.items > max) {
							max = data.items;
						}
						if(data.items < min) {
							min = data.items;
						}
					}
					return [min, max];
				},
				set: function() {

				}
			},
			saleRange: {
				get: function() {
					var datas = (this.tableData);
					var max = datas[0].sales,
						min = datas[0].sales;

					for(var i = 0; i < datas.length; i++) {
						var data = datas[i];
						if(data.sales > max) {
							max = data.sales;
						}
						if(data.sales < min) {
							min = data.sales;
						}
					}
					return [min, max];
				},
				set: function() {

				}
			}
		},
		data() {
			return {
				showHeader: true,
				dialogVisible: false,
				title: '',
				tableData: [{
						'index': 1,
						'vendname': '川渝中烟',
						'items': 40,
						'itemsLast': 42,
						'itemsInc': -2,
						'sales': 8147,
						'salesLast': 10078,
						'salesInc': -19.16
					},
					{
						'index': 2,
						'vendname': '云南中烟',
						'items': 32,
						'itemsLast': 31,
						'itemsInc': 1,
						'sales': 47717,
						'salesLast': 45808,
						'salesInc': 4.17
					},
					{
						'index': 3,
						'vendname': '陕西中烟',
						'items': 27,
						'itemsLast': 28,
						'itemsInc': -1,
						'sales': 311343,
						'salesLast': 304996,
						'salesInc': 2.08
					},
					{
						'index': 4,
						'vendname': '安徽中烟',
						'items': 26,
						'itemsLast': 31,
						'itemsInc': -5,
						'sales': 3886,
						'salesLast': 3486,
						'salesInc': 11.47
					},
					{
						'index': 5,
						'vendname': '湖北中烟',
						'items': 26,
						'itemsLast': 29,
						'itemsInc': -3,
						'sales': 18419,
						'salesLast': 19309,
						'salesInc': -4.61
					},
					{
						'index': 6,
						'vendname': '上海烟草',
						'items': 22,
						'itemsLast': 26,
						'itemsInc': -4,
						'sales': 17659,
						'salesLast': 16889,
						'salesInc': 4.56
					},
					{
						'index': 7,
						'vendname': '中烟实业',
						'items': 22,
						'itemsLast': 22,
						'itemsInc': 0,
						'sales': 21674,
						'salesLast': 22107,
						'salesInc': -1.96
					},
					{
						'index': 8,
						'vendname': '山东中烟',
						'items': 18,
						'itemsLast': 20,
						'itemsInc': -2,
						'sales': 10015,
						'salesLast': 10447,
						'salesInc': -4.14
					},
					{
						'index': 9,
						'vendname': '河南中烟',
						'items': 18,
						'itemsLast': 17,
						'itemsInc': 1,
						'sales': 15597,
						'salesLast': 12980,
						'salesInc': 20.16
					},
					{
						'index': 10,
						'vendname': '湖南中烟',
						'items': 18,
						'itemsLast': 20,
						'itemsInc': -2,
						'sales': 67740,
						'salesLast': 66780,
						'salesInc': 1.44
					},
					{
						'index': 11,
						'vendname': '江苏中烟',
						'items': 14,
						'itemsLast': 15,
						'itemsInc': -1,
						'sales': 14516,
						'salesLast': 19188,
						'salesInc': -24.35
					},
					{
						'index': 12,
						'vendname': '贵州中烟',
						'items': 14,
						'itemsLast': 13,
						'itemsInc': 1,
						'sales': 7102,
						'salesLast': 6821,
						'salesInc': 4.12
					},
					{
						'index': 13,
						'vendname': '福建中烟',
						'items': 12,
						'itemsLast': 14,
						'itemsInc': -2,
						'sales': 2889,
						'salesLast': 1798,
						'salesInc': 60.69
					},
					{
						'index': 14,
						'vendname': '浙江中烟',
						'items': 11,
						'itemsLast': 12,
						'itemsInc': -1,
						'sales': 25971,
						'salesLast': 32118,
						'salesInc': -19.14
					},
					{
						'index': 15,
						'vendname': '广东中烟',
						'items': 11,
						'itemsLast': 11,
						'itemsInc': 0,
						'sales': 6053,
						'salesLast': 4847,
						'salesInc': 24.88
					},
					{
						'index': 16,
						'vendname': '江西中烟',
						'items': 8,
						'itemsLast': 12,
						'itemsInc': -4,
						'sales': 575,
						'salesLast': 545,
						'salesInc': 5.57
					},
					{
						'index': 17,
						'vendname': '广西中烟',
						'items': 6,
						'itemsLast': 7,
						'itemsInc': -1,
						'sales': 155,
						'salesLast': 121,
						'salesInc': 28.17
					},
					{
						'index': 18,
						'vendname': '河北中烟',
						'items': 5,
						'itemsLast': 6,
						'itemsInc': -1,
						'sales': 772,
						'salesLast': 857,
						'salesInc': -9.92
					}
				]
			}
		},
		components: {
			boxBase,
			multiContent,
			barContent,
			numberFormat,
			vendReport
		},
		methods: {
			showTable: function(txt) {
				this.title = txt;
				this.dialogVisible = true;
			}
		},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.muti {
		font-size: 0.12rem;
		margin-left: -0.18rem;
		margin-right: -0.18rem;
		.fa-arrow-up {
			color: $green;
		}
		.fa-arrow-down {
			color: $red;
		}
		.type {
			border-radius: 0.04rem;
			-webkit-border-radius: 0.04rem;
			-moz-border-radius: 0.04rem;
			border: 0.01rem solid #28abe3;
			width: 6.5rem;
			text-align: center;
			margin: 0 auto;
		}
	}
</style>