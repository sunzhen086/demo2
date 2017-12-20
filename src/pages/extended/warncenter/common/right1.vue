<template>
	<box-base class="leftBox">
		<div slot="box-title">
			<p class="title">各公司问题预警情况</p>
		</div>
		<div slot="box-extend" class="extend-height">
			<tab-base :option=tabOption @tab-click="tabClick" class="tabClass"></tab-base>
		</div>

		<div class="content">
			<div class="left">
				<div class="note">
					{{tabOption.activePane}}问题最多的单位
					<span class="red">{{sumName(max)}}</span>
					<br /> {{tabOption.activePane}}问题最少的单位
					<span class="green">{{sumName(min)}}</span>
				</div>
				<div ref="chart" class="chart">
					<mapChart :mapChartData="this.mapChartData"></mapChart>
				</div>
			</div>
			<div class="right">
				<el-table class="cma row-height-30" :data="tableData" height="395" border style="border: 0.01rem solid rgba(11,79,193,0.5);">
					<el-table-column label="公司" align="center" width="88">
						<template scope="scope">
							<div class="muti" :style="style(scope.row.name)" @click="doClick(scope.row.name)">
								{{sumName(scope.row.name)}}
							</div>
						</template>
					</el-table-column>
					<el-table-column label="问题数" align="center" width="88">
						<template scope="scope">
							<div class="muti">
								{{scope.row.value}}
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
	import tabBase from 'components/tab/tab-base.vue';

	import mapChart from './mapChart.vue';
	export default {
		computed: {
			tableData1: function() {
				var data = this.mapData1;
				var tabData = [];
				for(var i = 0; i < data.length; i++) {
					tabData.push(data[i]);
				}
				
				tabData.sort(function(a, b) {
					return b.value - a.value;
				})
				tabData = [{
					name: '全省',
					value: 10
				}].concat(tabData);
				return tabData;
			},
			tableData2: function() {
				var data = this.mapData2;
				var tabData = [];
				for(var i = 0; i < data.length; i++) {
					tabData.push(data[i]);
				}
				tabData.sort(function(a, b) {
					return b.value - a.value;
				})
				
				tabData = [{
					name: '全省',
					value: 10
				}].concat(tabData);
				
				return tabData;
			},
			tableData3: function() {
				var data = this.mapData3;
				var tabData = [];
				for(var i = 0; i < data.length; i++) {
					tabData.push(data[i]);
				}
				tabData.sort(function(a, b) {
					return b.value - a.value;
				})
				
				tabData = [{
					name: '全省',
					value: 11
				}].concat(tabData);
				return tabData;
			}
		},
		data() {
			return {
				mapChartData: [],
				max: '',
				min: '',
				tableData: [],
				tabOption: {
					data: [{
						key: '严重',
						text: '严重'
					}, {
						key: '一般',
						text: '一般'
					}, {
						key: '较轻',
						text: '较轻'
					}],
					activePane: '严重'
				},
				mapData1: [{
						'name': '西安市',
						'value': 10
					},
					{
						'name': '榆林市',
						'value': 11
					},
					{
						'name': '咸阳市',
						'value': 12
					},
					{
						'name': '渭南市',
						'value': 13
					},
					{
						'name': '宝鸡市',
						'value': 19
					},
					{
						'name': '延安市',
						'value': 6
					},
					{
						'name': '安康市',
						'value': 10
					},
					{
						'name': '汉中市',
						'value': 22
					},
					{
						'name': '商洛市',
						'value': 10
					},
					{
						'name': '铜川市',
						'value': 10
					},
					{
						'name': '杨凌示范区',
						'value': 10
					}
				],
				mapData2: [{
						'name': '西安市',
						'value': 11
					},
					{
						'name': '榆林市',
						'value': 2
					},
					{
						'name': '咸阳市',
						'value': 7
					},
					{
						'name': '渭南市',
						'value': 6
					},
					{
						'name': '宝鸡市',
						'value': 1
					},
					{
						'name': '延安市',
						'value': 19
					},
					{
						'name': '安康市',
						'value': 29
					},
					{
						'name': '汉中市',
						'value': 12
					},
					{
						'name': '商洛市',
						'value': 8
					},
					{
						'name': '铜川市',
						'value': 4
					},
					{
						'name': '杨凌示范区',
						'value': 9
					}
				],
				mapData3: [{
						'name': '西安市',
						'value': 28
					},
					{
						'name': '榆林市',
						'value': 8
					},
					{
						'name': '咸阳市',
						'value': 25
					},
					{
						'name': '渭南市',
						'value': 22
					},
					{
						'name': '宝鸡市',
						'value': 17
					},
					{
						'name': '延安市',
						'value': 1
					},
					{
						'name': '安康市',
						'value': 22
					},
					{
						'name': '汉中市',
						'value': 11
					},
					{
						'name': '商洛市',
						'value': 8
					},
					{
						'name': '铜川市',
						'value': 9
					},
					{
						'name': '杨凌示范区',
						'value': 8
					}
				],
			}
		},
		components: {
			boxBase,
			tabBase,
			mapChart
		},
		methods: {
			tabClick: function(curTab) {
				this.tabOption.activePane = curTab;
				var arr = [];
				if(curTab == '严重') {
					this.tableData = this.tableData1;
					arr = this.mapData1;
				} else if(curTab == '一般') {
					this.tableData = this.tableData2;
					arr = this.mapData2;
				} else {
					this.tableData = this.tableData3;
					arr = this.mapData3;
				}
				this.mapChartData = arr;
			},
			style: function(name) {
				return {
					cursor: 'pointer',
					textDecoration: 'underline'
				};

			},
			doClick: function(name) {
				this.$router.push("/extended/warncentercity");
			},
			sumName: function(name) {
				return name.substring(0, 2);
			}
		},
		mounted() {
			this.tableData = this.tableData1;
			this.mapChartData = this.mapData1;
		},
		watch: {
			mapChartData: {
				handler: function(val, oldVal) {
					var d = [].concat(val);
					d.sort(function(a, b) {
						return b.value - a.value;
					})
					if(d[0].name!='全省'){
						this.max = d[0].name;
					}else{
						this.max = d[1].name;
					}
					if(d[d.length - 1].name!='全省'){
						this.min = d[d.length - 1].name;
					}else{
						this.min = d[d.length - 2].name;
					}
					//this.min = d[d.length - 1].name;
				},
				deep: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.leftBox {
		height: 4.57rem;
		margin-bottom: $box-distince;
		.content {
			.left {
				float: left;
				width: 5.2rem;
				.note {
					background-color: rgb(36, 62, 136);
					margin-top: 0.1rem;
					font-size: 0.14rem;
					line-height: 0.22rem;
					padding: 0.15rem;
					position: absolute;
					span {
						font-size: 0.18rem;
						margin: 0 0.05rem 0 0.01rem;
					}
					.red {
						color: $red;
					}
					.green {
						color: $green;
					}
				}
				.chart {
					position: absolute;
					top: 0.8rem;
					height: 4.7rem;
					width: 3.5rem;
				}
			}
			.right {
				float: right;
				width: 1.78rem;
				margin-right: 0.01rem;
				margin-top: 0.05rem;
			}
		}
	}
</style>