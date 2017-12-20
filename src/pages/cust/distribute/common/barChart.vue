<template>
	<box-base>
		<div slot="box-title">
			<p class="title">按户均订购量统计客户分布</p>
		</div>
		<div slot="box-extend">
			<p>
				<tab-base :option=tabOption @tab-click="tabClick" class="tabClass"></tab-base>
			</p>
		</div>

		<div class="content" ref="chart">

		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import echarts from 'echarts';
	export default {
		computed: {
			xLineData: {
				get: function() {
					return ['[0,40)', '[40,70)', '[70,100)', '[100,200)',
						'[200,300)', '[300,400)', '[400,500)', '[500,700)', '[700-1000)', '[1000以上)'
					];
				},
				set: function() {

				}
			},
			nowData: {
				get: function() {
					var data = [17000, 19000, 18000, 39000, 17500, 9400, 4800, 4850, 3000, 2000]; //本期数据
					return {
						name: '本期',
						data: data,
						color: ['rgb(7,222,155)']
					};
				},
				set: function() {

				}
			},
			lastData: {
				get: function() {
					var data = [9900, 17500, 49000, 20000, 19900, 9900, 4900, 4000, 1800, 300]; //同期数据
					return {
						name: '同期',
						data: data,
						color: ['rgb(9,88,253)']
					};
				},
				set: function() {

				}
			},
			lineData: {
				get: function() {
					var data = [0.52, 0.01, -0.05, -0.2, 0.01, 0.02, 0, 0.25, 0.3, 3.1]; //折线数据
					return {
						name: '增长率',
						data: data,
						color: ['rgb(3,185,255)']
					};
				},
				set: function() {

				}
			},
			xLineData2: {
				get: function() {
					return ['0-60元', '60-80元', '80-100元', '100-120元',
						'120-140元', '140-160元', '160元以上'
					];
				},
				set: function() {

				}
			},
			nowData2: {
				get: function() {
					var data = [710, 6780, 8900, 7700, 4100, 1900, 2200]; //本期数据
					return {
						name: '本期',
						data: data,
						color: ['rgb(7,222,155)']
					};
				},
				set: function() {

				}
			},
			lastData2: {
				get: function() {
					var data = [710, 6900, 8800, 7600, 4200, 1700, 2100]; //同期数据
					return {
						name: '同期',
						data: data,
						color: ['rgb(9,88,253)']
					};
				},
				set: function() {

				}
			},
			lineData2: {
				get: function() {
					var data = [1.22, -1.80, 1.80, 1.90, -2.2, 11.5, 4.5]; //折线数据
					return {
						name: '增长率',
						data: data,
						color: ['rgb(3,185,255)']
					};
				},
				set: function() {

				}
			}

		},
		data() {
			return {
				tabOption: {
					data: [{
						key: 'sale',
						text: '户均订购量'
					}, {
						key: 'dist',
						text: '户均订货结构'
					}],
					activePane: 'sale'
				},
				week: '2017年6月份第一周',
				custAll: '137048',
				custOrder: '136548',
				custOrderLast: '137048'
			};
		},
		components: {
			boxBase,
			tabBase
		},
		methods: {
			tabClick: function(curTab) {
				if(curTab == 'sale') {
					this.drarChart();
				} else {
					this.drarChart2();
				}

			},
			drarChart: function() {
				var option = {
					title: {
						text: ''
					},
					tooltip: {
						trigger: 'axis',
						formatter: function(params) {
							var result = params[0].name + "<br/>";
							params.forEach(function(item) {
								result += '<span style="display:inline-block;margin-right:0.05rem;border-radius:0.1rem;width:0.09rem;height:0.09rem;background-color:' + item.color + '"></span>';
								result += item.seriesName + ":";
								if(item.seriesName == '增长率') {
									result += (item.value * 100).toFixed(2) + '%';
								} else {
									result += item.value;
								}
								result += '<br />';
							});
							return result;
						}
					},
					legend: {
						data: [{
							name: this.nowData.name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.lastData.name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.lineData.name,
							textStyle: {
								color: '#fff'
							}
						}]
					},
					grid: {
						top: '40',
						left: '20',
						right: '20',
						bottom: '15',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: true,
						data: this.xLineData,
						axisLine: {
							lineStyle: {
								color: '#fff', //x轴颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							interval: 0,
							rotate: 20,
							textStyle: {
								align: 'right'
							}
						},
						axisTick: {
							show: false,
							alignWithLabel: true
						}
					},
					yAxis: [{
						name: '单位：户',
						type: 'value',
						position: 'left',
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							textStyle: {
								color: '#fff'
							}
						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: false, //是否显示y轴的线
							lineStyle: {
								color: '#fff'
							}
						}
					}, {
						type: 'value',
						position: 'right',
						splitLine: {
							show: false,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							textStyle: {
								color: '#fff',
							},
							formatter: function(v, i) {
								return(v * 100).toFixed(0) + '%';
							}
						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: false, //是否显示y轴的线
							lineStyle: {
								color: '#fff'
							}
						}
					}],
					series: [{
						type: 'bar',
						barWidth: 8,
						name: this.nowData.name,
						color: this.nowData.color,
						data: this.nowData.data
					}, {
						type: 'bar',
						barWidth: 8,
						name: this.lastData.name,
						color: this.lastData.color,
						data: this.lastData.data
					}, {
						name: this.lineData.name,
						type: 'line',
						yAxisIndex: 1,
						color: this.lineData.color,
						data: this.lineData.data,
						symbol: 'circle'
					}]
				};
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart);
				chart.setOption(option, true);
			},
			drarChart2: function() {
				var option = {
					title: {
						text: ''
					},
					tooltip: {
						trigger: 'axis',
						formatter: function(params) {
							var result = params[0].name + "<br/>";
							params.forEach(function(item) {
								result += '<span style="display:inline-block;margin-right:0.05rem;border-radius:0.1rem;width:0.09rem;height:0.09rem;background-color:' + item.color + '"></span>';
								result += item.seriesName + ":";
								if(item.seriesName == '增长率') {
									result += (item.value * 100).toFixed(2) + '%';
								} else {
									result += item.value;
								}
								result += '<br />';
							});
							return result;
						}
					},
					legend: {
						data: [{
							name: this.nowData2.name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.lastData2.name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.lineData2.name,
							textStyle: {
								color: '#fff'
							}
						}]
					},
					grid: {
						top: '40',
						left: '20',
						right: '20',
						bottom: '15',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: true,
						data: this.xLineData2,
						axisLine: {
							lineStyle: {
								color: '#fff', //x轴颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							//interval: 0,
							rotate: 0,
							textStyle: {
								align: 'center'
							}
						},
						axisTick: {
							show: false,
							alignWithLabel: true
						}
					},
					yAxis: [{
						name: '单位：户',
						type: 'value',
						position: 'left',
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							textStyle: {
								color: '#fff'
							}
						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: false, //是否显示y轴的线
							lineStyle: {
								color: '#fff'
							}
						}
					}, {
						type: 'value',
						position: 'right',
						splitLine: {
							show: false,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							textStyle: {
								color: '#fff',
							},
							formatter: function(v, i) {
								return(v).toFixed(0) + '%';
							}
						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: false, //是否显示y轴的线
							lineStyle: {
								color: '#fff'
							}
						}
					}],
					series: [{
						type: 'bar',
						barWidth: 8,
						name: this.nowData2.name,
						color: this.nowData2.color,
						data: this.nowData2.data
					}, {
						type: 'bar',
						barWidth: 8,
						name: this.lastData2.name,
						color: this.lastData2.color,
						data: this.lastData2.data
					}, {
						name: this.lineData2.name,
						type: 'line',
						yAxisIndex: 1,
						color: this.lineData2.color,
						data: this.lineData2.data,
						symbol: 'circle'
					}]
				};
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart);

				chart.setOption(option, true);
			}
		},
		mounted() {
			this.drarChart();
		},
		beforeDestroy(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';
	.title {
		padding-right: 0.05rem;
	}
	
	.content {
		height: 2.48rem;
		padding-top: 0.05rem;
		.tip {
			margin-left: 0.1rem;
			margin-right: 0.6rem;
			background-color: rgb(36, 62, 136);
			padding: 0.1rem;
			span {
				font-size: 0.18rem;
				font-weight: bold;
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