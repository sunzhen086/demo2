<template>
	<div class="topdiv">
		<box-base>
			<div slot="box-title">
				<p class="title"></p>
			</div>
			<div slot="box-extend">
			</div>
			<div class="content">
				<div class="left">
					<div class="note">本期规格数</div>
					<div class="note">同期规格数</div>
				</div>
				<div class="right">
					<div class="top" ref="top">
						<div class="text r1 dashed" :style="style1">
							<span class="number" @click="showReport('now',0)">{{this.now[0]}}</span>
							<span v-if="compare(0)">
								<i class="fa fa-arrow-up" aria-hidden="true"> {{this.now[0] - this.last[0]}}</i>
							</span>
							<span v-else>
								<i class="fa fa-arrow-down" aria-hidden="true"> {{this.last[0] - this.now[0]}}</i>
							</span>
						</div>
						<div class="text r1 dashed" :style="style1">
							<span class="number" @click="showReport('now',1)">{{this.now[1]}}</span>
							<span v-if="compare(1)">
								<i class="fa fa-arrow-up" aria-hidden="true"> {{this.now[1] - this.last[1]}}</i>
							</span>
							<span v-else>
								<i class="fa fa-arrow-down" aria-hidden="true"> {{this.last[1] - this.now[1]}}</i>
							</span>
						</div>
						<div class="text r3 dashed" :style="style3">
							<span class="number" @click="showReport('now',2)">{{this.now[2]}}</span>
							<span v-if="compare(2)">
								<i class="fa fa-arrow-up" aria-hidden="true"> {{this.now[2] - this.last[2]}}</i>
							</span>
							<span v-else>
								<i class="fa fa-arrow-down" aria-hidden="true"> {{this.last[2] - this.now[2]}}</i>
							</span>
						</div>
						<div class="text r1 dashed" :style="style1">
							<span class="number" @click="showReport('now',3)">{{this.now[3]}}</span>
							<span v-if="compare(3)">
								<i class="fa fa-arrow-up" aria-hidden="true"> {{this.now[3] - this.last[3]}}</i>
							</span>
							<span v-else>
								<i class="fa fa-arrow-down" aria-hidden="true"> {{this.last[3] - this.now[3]}}</i>
							</span>
						</div>
						<div style="clear: both;"></div>
						<div class="text r1" :style="style1">
							<span class="number" @click="showReport('last',0)">{{this.last[0]}}</span>
						</div>
						<div class="text r1" :style="style1">
							<span class="number" @click="showReport('last',1)">{{this.last[1]}}</span>
						</div>
						<div class="text r3" :style="style3">
							<span class="number" @click="showReport('last',2)">{{this.last[2]}}</span>
						</div>
						<div class="text r1" :style="style1">
							<span class="number" @click="showReport('last',3)">{{this.last[3]}}</span>
						</div>
					</div>
					<div>
						<el-dialog v-model="dialogVisible" size="small" class="cma" top='15%' :title="title">
							<floatReport :reportData=reportData></floatReport>
						</el-dialog>
					</div>
					<div class="bottom" ref="chart"></div>
				</div>
			</div>
		</box-base>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';

	import echarts from 'echarts';

	import floatReport from './floatReport.vue';

	export default {
		data() {
			return {
				dialogVisible: false,
				title: '',
				now: [304, 14, 4, 6],
				last: [246, 9, 9, 7],
				reportData: [],
				style1: {
					
				},
				style3: {
					
				}
			}
		},
		components: {
			boxBase,
			floatReport
		},
		methods: {
			compare: function(i) {
				return this.now[i] > this.last[i];
			},
			showReport: function(key, i) {
				var txt = '';
				if(key == 'now') {
					txt = '本期';
				} else if(key == 'last') {
					txt = '同期';
				}
				txt += '销量在';
				switch(i) {
					case 0:
						txt += '1万箱以下';
						break;
					case 1:
						txt += '1-2万箱之间';
						break;
					case 2:
						txt += '2-5万箱之间';
						break;
					case 3:
						txt += '5万箱以上';
						break;
					default:
						break;
				}
				txt += '规格';

				this.reportData = [{
						'itemId': '61010219',
						'itemName': '好猫（磨砂猴王）',
						'sales': '111047.712',
						'salesLast': '105840.78',
						'kindName': '三类',
						'vendName': '陕西中烟'
					},
					{
						'itemId': '61010110',
						'itemName': '猴王（金）',
						'sales': '106477.332',
						'salesLast': '118707.68',
						'kindName': '四类',
						'vendName': '陕西中烟'
					},
					{
						'itemId': '43020101',
						'itemName': '芙蓉王（硬）',
						'sales': '44790.496',
						'salesLast': '44330.74',
						'kindName': '一类',
						'vendName': '湖南中烟'
					},
					{
						'itemId': '61260213',
						'itemName': '延安（软）',
						'sales': '40344.308',
						'salesLast': '47386.564',
						'kindName': '四类',
						'vendName': '陕西中烟'
					},
					{
						'itemId': '33010602',
						'itemName': '利群（新版）',
						'sales': '29812.536',
						'salesLast': '24324.64',
						'kindName': '二类',
						'vendName': '浙江中烟'
					},
					{
						'itemId': '53010105',
						'itemName': '云烟（紫）',
						'sales': '20111.272',
						'salesLast': '23067.792',
						'kindName': '三类',
						'vendName': '云南中烟'
					},
					{
						'itemId': '43010106',
						'itemName': '白沙（精品二代）',
						'sales': '15441.4',
						'salesLast': '14811.216',
						'kindName': '三类',
						'vendName': '湖南中烟'
					},
					{
						'itemId': '53020116',
						'itemName': '红塔山（硬经典）',
						'sales': '12855.268',
						'salesLast': '13723.048',
						'kindName': '三类',
						'vendName': '云南中烟'
					},
					{
						'itemId': '61010215',
						'itemName': '好猫（吉祥）',
						'sales': '9056.192',
						'salesLast': '9294.804',
						'kindName': '一类',
						'vendName': '陕西中烟'
					},
					{
						'itemId': '61010227',
						'itemName': '好猫（细支长乐）',
						'sales': '8732.824',
						'salesLast': '5718.884',
						'kindName': '二类',
						'vendName': '陕西中烟'
					},
					{
						'itemId': '61010220',
						'itemName': '好猫（金延安）',
						'sales': '8997.988',
						'salesLast': '8997.988',
						'kindName': '二类',
						'vendName': '陕西中烟'
					},
					{
						'itemId': '61260212',
						'itemName': '延安（硬红）',
						'sales': '7974.624',
						'salesLast': '6867.132',
						'kindName': '五类',
						'vendName': '陕西中烟'
					}
				];
				this.title = txt;
				this.dialogVisible = true;
			},
			drawChart: function() {
				var option = {
					tooltip: {
						show: false
					},
					legend: {
						show: false
					},
					//  backgroundColor: '#1b1b1b',
					color: ['rgba(15,58,103,0.7)', 'rgba(15,58,103,0.4)', 'rgba(15,58,103,0.4)', 'rgba(15,58,103,0.4)', 'rgba(15,58,103,0.4)'],
					grid: {
						left: '5',
						right: '100',
						bottom: '22',
						top: '0',
						containLabel: false
					},
					yAxis: {
						type: 'value',
						splitLine: {
							show: false,
						},
						axisLabel: {
							show: false
						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: false
						}
					},
					xAxis: {
						type: 'category',
						scale: false,
						name: '销量(万箱)',
						nameLocation: 'end',
						nameTextStyle: {
							fontSize: 14
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: 'rgb(35,218,230)', //y轴分割线颜色
								opacity: 1,
								width: 5
							}
						},
						boundaryGap: false,
						axisLine: {
							lineStyle: {
								color: 'rgb(35,218,230)', //x轴颜色
								opacity: 1,
								width: 5
							}
						},
						axisLabel: {
							textStyle: {
								color: 'rgb(35,218,230)',
								align: 'center'
							},
							formatter: function(v) {
								if(v == 6) {
									return '';
								} else {
									return v;
								}
							}
						},
						axisTick: {
							show: true,
							alignWithLabel: false,
							inside: true,
							lineStyle: {
								color: 'rgb(35,218,230)', //x轴颜色
								opacity: 1,
								width: 5
							}
						},
						data: ['0', '1', '2', '3', '4', '5', '6']
					},
					series: []
				};
				var chart = echarts.init(this.$refs.chart);
				chart.setOption(option);
			},
		},
		mounted() {
			this.drawChart();
			var allWidth = (this.$refs.chart.getElementsByTagName("div")[0].width);
			if(allWidth != 1110){
				var lineWidth = 5;
				var width = allWidth - 100 - lineWidth * 7;
				var r1 = width / 6;
				var r3 = r1 * 3 + (lineWidth * 2);
				this.style1 = {
					width: r1 + 'px'
				};
				this.style3 = {
					width: r3 + 'px'
				};
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.topdiv {
		width: 12.4rem;
		margin-bottom: $box-distince;
	}
	
	.content {
		.left {
			width: 1.1rem;
			height: 100%;
			float: left;
			.note {
				font-size: 0.16rem;
				height: 0.35rem;
				text-align: right;
				padding-top: 0.1rem;
				color: #00e9f7
			}
		}
		.right {
			float: left;
			height: 100%;
			width: 11.1rem;
			.top {
				height: 0.86rem;
				margin-left: 0.03rem;
				z-index: 999;
				.number {
					font-size: 0.18rem;
					color: #fff;
					cursor: pointer;
					text-decoration: underline;
					padding-right: 0.1rem;
				}
			}
			.bottom {
				height: 0.3rem;
			}
			.text {
				height: 0.42rem;
				background-color: rgba(17, 56, 105, 0.8);
				float: left;
				margin-left: 5px;
				text-align: center;
				vertical-align: middle;
				line-height: 0.42rem;
				color: #00e9f7;
				font-size: 0.16rem;
			}
			.r1 {
				width: 1.62rem;
			}
			.r3 {
				width: 4.98rem;
			}
			.dashed {
				border-bottom: 0.01rem rgb(66, 134, 176) dashed;
			}
		}
	}
	
	.fa-arrow-up {
		color: $green;
		font-size: 0.14rem;
	}
	
	.fa-arrow-down {
		color: $red;
		font-size: 0.14rem;
	}
</style>