<template>
	<box-base style="margin-bottom: 0.14rem;">
		<div slot="box-title">
			<p class="title">周订货户数同期对比</p>
		</div>
		<div slot="box-extend">
			<p>
				<tab-base :option=tabOption @tab-click="tabClick" class="tabClass"></tab-base>
			</p>
		</div>

		<div class="content">
			<div class="tip" v-if="custOrder > custOrderLast">
				{{week}} 全省有效户数
				<span class="orange">
					<numberFormat format="to-thousand" :strValue=custAll></numberFormat> 
				</span>
				户，订货户数
				<span class="orange">
					<numberFormat format="to-thousand" :strValue=custOrder></numberFormat>
				</span>
				户， 同比增加
				<span class="green">{{custOrder-custOrderLast}}</span>
				户
			</div>
			<div class="tip" v-if="custOrder < custOrderLast">
				{{week}}全省有效户数
				<span class="orange">
					<numberFormat format="to-thousand" :strValue=custAll></numberFormat> 
				</span>
				户，订货户数
				<span class="orange">
					<numberFormat format="to-thousand" :strValue=custOrder></numberFormat>
				</span>
				户， 同比减少
				<span class="red">{{custOrderLast - custOrder}}</span>
				户
			</div>
			<div class="chart" ref="chart">

			</div>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import numberFormat from 'components/numberFormat/number-format.vue';
	import echarts from 'echarts';
	export default {
		computed: {
			xLineData: {
				get: function() {
					var d = [];
					for(var i = 1; i <= 52; i++) {
						d.push(i);
					}
					return d;
				},
				set: function() {

				}
			},
			nowData: {
				get: function() {
					var data = [112366, 112382, 115280, 64385, 46548, 94054, 102194, 104844, 100558, 103801, 106214, 106621, 106345, 89075, 107856, 107192, 108640, 96045, 107112, 108760, 107702];
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
					var i = 0;
					var data = [118296, 118518, 117800, 121793, 93209, 16029, 48314, 102473, 104315, 109498, 111790, 114802, 109534, 96542, 111485, 114023, 113137, 92757, 108664, 107582, 108861, 103348, 104157, 106637, 106126, 103661, 103200, 108216, 109415, 111918, 108418, 112197, 112067, 111478, 111194, 112995, 110168, 112244, 108165, 98393, 109952, 109406, 110050, 80788, 107566, 110335, 108927, 108137, 108618, 109708, 99990, 74344];
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
					return {};
				},
				set: function() {

				}
			},
			xLineData2: {
				get: function() {
					return ['2012', '2013', '2014', '2015',
						'2016', '2017'
					];
				},
				set: function() {

				}
			},
			nowData2: {
				get: function() {
					var data = [13.8, 15.2, 16.2, 14.6, 14.1, 13.6]; //本期数据
					return {
						name: '有效户数',
						data: data,
						color: ['rgb(7,222,155)']
					};
				},
				set: function() {

				}
			},
			lastData2: {
				get: function() {
					var data = [12.6, 13.7, 13.4, 12.8, 12.5, 12.4]; //同期数据
					return {
						name: '订货户数',
						data: data,
						color: ['rgb(9,88,253)']
					};
				},
				set: function() {

				}
			},
			lineData2: {
				get: function() {
					var data = [0.9, 1.11, 1.39, 0.91, 1.28, 0.97]; //折线数据
					return {
						name: '流失率',
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
						key: 'week',
						text: '周'
					}, {
						key: 'year',
						text: '年'
					}],
					activePane: 'week'
				},
				week: '2017年6月份第一周',
				custAll: '137048',
				custOrder: '136548',
				custOrderLast: '137048'
			};
		},
		components: {
			boxBase,
			tabBase,
			numberFormat
		},
		methods: {
			tabClick: function(curTab) {
				if(curTab == 'week') {
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
						trigger: 'axis'
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
						}]
					},
					grid: {
						top: '40',
						left: '20',
						right: '20',
						bottom: '10',
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
							//interval :0

						},

						axisTick: {
							show: false,
							alignWithLabel: true
						}
					},
					yAxis: {
						name: '单位：户',
						type: 'value',
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
					},
					series: [{
						name: this.nowData.name,
						type: 'line',
						color: this.nowData.color,
						data: this.nowData.data,
						symbol: 'circle'
					}, {
						name: this.lastData.name,
						type: 'line',
						color: this.lastData.color,
						data: this.lastData.data,
						lineStyle: {
							normal: {
								type: 'dotted'
							}
						},
						symbol: 'circle'
					}]
				};
				var chart = this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart);
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
						name: '单位：万户',
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
						},
						min: 10,
						max: 17,
						interval: 1
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
								return(v).toFixed(2) + '%';
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
						},
						min: 0,
						max: 1.6,
						interval: 0.2
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
				var chart = this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart);
				chart.setOption(option, true);
			}
		},
		mounted() {
			this.drarChart();
		},
		beforeDestroy() {
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
		padding-top: 0.05rem;
		.tip {
			margin-left: 0.1rem;
			margin-right: 0.5rem;
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
		.chart {
			height: 2.05rem;
		}
	}
</style>