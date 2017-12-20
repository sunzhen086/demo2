<template>
	<div>
		<el-table class="cma row-height-35" :show-header=showHeader height="419" :data="tableData">
			<el-table-column label="竞争类型" min-width="100" align="center">
				<template scope="scope">
					<div class="muti">
						<div class="type" @click="showTip" :style='style(scope.row.type)'>
							{{scope.row.type}}>
						</div>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="品类" align="left" min-width="80" header-align="left">
				<template scope="scope">
					<div class="muti" style="cursor: pointer;text-decoration: underline" @click="showTable(scope.row.kind)">
						{{scope.row.kind}}
					</div>
				</template>
			</el-table-column>
			<el-table-column label="同比" align="left" min-width="70" header-align="center">
				<template scope="scope">
					<div class="muti" style="padding-left: 0.15rem;">
						<template v-if="scope.row.rate1 != 0">
							<div v-if="scope.row.rate1 > 0">
								<i class='icon-style fa fa-arrow-up'> {{scope.row.rate1}}</i>
							</div>
							<div v-else>
								<i class='icon-style fa fa-arrow-down'> {{scope.row.rate1}}</i>
							</div>
						</template>
						<template v-else>
							<i class='icon-style fa fa-arrow-right'> {{scope.row.rate1}}</i>
						</template>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="规格个数" align="right" min-width="115" header-align="center">
				<template scope="scope">
					<div class="muti">
						<bar-content :range=itemRange :current=scope.row.items align='right'></bar-content>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="销量(箱)" align="left" min-width="155" header-align="center">
				<template scope="scope">
					<div class="muti">
						<bar-content :range=saleRange :current=scope.row.sales align='left' color="#43bd82"></bar-content>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="同比" align="left" min-width="70" header-align="center">
				<template scope="scope">
					<div class="muti" style="padding-left: 0.2rem;">
						<template v-if="scope.row.rate2 != 0">
							<div v-if="scope.row.rate2 > 0">
								<i class='icon-style fa fa-arrow-up'> {{scope.row.rate2}}%</i>
							</div>
							<div v-else>
								<i class='icon-style fa fa-arrow-down'> {{scope.row.rate2}}%</i>
							</div>
						</template>
						<template v-else>
							<i class='icon-style fa fa-arrow-right'> {{scope.row.rate2}}%</i>
						</template>
					</div>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog v-model="dialogVisible" size="small" class="cma" top='15%' title="兰氏法则竞争格局判断标准">
			<floatTable></floatTable>
		</el-dialog>
		<el-dialog v-model="reportDialogVisible" size="large" class="cma" top='15%' :title="title">
			<kindReport></kindReport>
		</el-dialog>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import multiContent from 'components/multicontent/multicontent.vue';

	import barContent from './barcontent.vue';
	import floatTable from './floatTable.vue';
	import kindReport from './kindReport.vue';

	export default {
		computed: {
			itemRange: {
				get: function() {
					var datas = (this.tableData);
					var max = datas[0].items;
					var min = datas[0].items;
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
				reportDialogVisible: false,
				title: '',
				tableData: [{
						'type': '完全独占',
						'kind': '[600)',
						'rate1': -1,
						'items': 35,
						'sales': 3557,
						'rate2': 32
					},
					{
						'type': '完全独占',
						'kind': '[500,600)',
						'rate1': 3,
						'items': 10,
						'sales': 7722,
						'rate2': -4
					},
					{
						'type': '绝对独占',
						'kind': '[350,500)',
						'rate1': 1,
						'items': 20,
						'sales': 11459,
						'rate2': 3
					},
					{
						'type': '相对独占',
						'kind': '[250,350)',
						'rate1': 17,
						'items': 42,
						'sales': 3755,
						'rate2': 72
					},
					{
						'type': '绝对独占',
						'kind': '[190,250)',
						'rate1': 6,
						'items': 27,
						'sales': 64868,
						'rate2': 6
					},
					{
						'type': '绝对独占',
						'kind': '[150,190)',
						'rate1': 6,
						'items': 43,
						'sales': 23850,
						'rate2': 25
					},
					{
						'type': '完全独占',
						'kind': '[125,150)',
						'rate1': 5,
						'items': 34,
						'sales': 27060,
						'rate2': 50
					},
					{
						'type': '完全独占',
						'kind': '[113,125)',
						'rate1': 4,
						'items': 21,
						'sales': 45551,
						'rate2': 17
					},
					{
						'type': '完全独占',
						'kind': '[80,113)',
						'rate1': 8,
						'items': 39,
						'sales': 173104,
						'rate2': 5
					},
					{
						'type': '相对寡占',
						'kind': '[48,80)',
						'rate1': 0,
						'items': 18,
						'sales': 27849,
						'rate2': -14
					},
					{
						'type': '完全独占',
						'kind': '[24,48)',
						'rate1': -1,
						'items': 17,
						'sales': 174292,
						'rate2': -14
					},
					{
						'type': '相对寡占',
						'kind': '[0,24)',
						'rate1': -1,
						'items': 5,
						'sales': 16832,
						'rate2': -12
					},
					{
						'type': '完全独占',
						'kind': '雪茄烟品类',
						'rate1': 3,
						'items': 38,
						'sales': 576,
						'rate2': -5
					},
					{
						'type': '分散型',
						'kind': '罚没烟品类',
						'rate1': -19,
						'items': 12,
						'sales': 10,
						'rate2': -91
					},
					{
						'type': '分散型',
						'kind': '进口烟品类',
						'rate1': 3,
						'items': 21,
						'sales': 1478,
						'rate2': -7
					},
				]
			}
		},
		components: {
			boxBase,
			multiContent,
			barContent,
			floatTable,
			kindReport
		},
		methods: {
			showTip: function(t) {
				this.dialogVisible = true;
			},
			showTable: function(t) {
				this.title = '品类(' + t + ')';
				this.reportDialogVisible = true;
			},
			style: function(name) {
				var color = '#28abe3';
				if(name.indexOf('完全') > -1) {
					color = '#efb90f';
				} else if(name.indexOf('绝对') > -1) {
					color = '#f94800';
				} else if(name.indexOf('二大') > -1) {
					color = '#22efbd';
				} else if(name.indexOf('相对') > -1) {
					color = '#005eff';
				} else if(name.indexOf('分散') > -1) {
					color = '#1cd9ff';
				} else {

				}

				return {
					border: '0.01rem solid '+color,
					color:color
				}
			}
		},
		mounted() {
			//this.calc();
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.muti {
		font-size: 0.12rem;
		margin-left: -0.05rem;
		margin-right: -0.05rem;
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
			width: 0.6rem;
			text-align: center;
			margin: 0 auto;
			cursor: pointer;
			padding-left: 0.1rem;
			padding-right: 0.05rem;
		}
	}
</style>