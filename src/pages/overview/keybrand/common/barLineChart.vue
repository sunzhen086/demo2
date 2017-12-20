<template>
	<div ref="barLinechart" class="barLinechart">
	</div>
</template>

<script>
	import echarts from 'echarts';

	export default {
		props: {
			chartData: Object //这样可以指定传入的类型，如果类型不对，会警告
		},
		data() {
			return {
				
			}
		},
		methods: {
			drawLineBar: function() {
				var that = this;
				var option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						},
						formatter: function(params) {
							var str = '<big style="font-weight: bold;color:#2edbff">' + params[0].name + '</big>' ;
							for(var i = 0; i < params.length; i++) {
								if(params[i].seriesName == "本期" || params[i].seriesName == "同期") {
									if(!isNaN(params[i].value)) {
										str += "<br/>" + params[i].seriesName + "：" + params[i].value + " 箱"
									}
								} else if(params[i].seriesName == "同比") {
									if(!isNaN(params[i].value)) {
										str += "<br/>" + params[i].seriesName + "：" + params[i].value + " %"
									}
								}
							}
							return str;
						}
					},
					legend: {
						data: ['本期', '同期', '同比'],
						textStyle: {
							color: "#ffffff"
						},
						x: 'right'
					},
					grid: {
						left: 0,
						right: 5,
						top: 40,
						bottom: '12%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: that.chartData.brandArr,
						axisLabel: {
							interval: 0,
							textStyle: {
								color: '#ffffff'
							},
							rotate: 45
						}
					}],
					yAxis: [{
						name: '单位：箱',
						type: 'value',
						scale: true,
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							textStyle: {
								color: '#ffffff'
							}
						},
						axisLine: {
							lineStyle: {
								color: '#ffffff'
							}

						}
					}, {
						type: 'value',
						splitLine: {
							show: false
						},
						axisLabel: {
							textStyle: {
								color: '#ffffff'
							}
						},
						axisLine: {
							lineStyle: {
								color: '#ffffff'
							}
						}
					}],
					series: [{
						name: '本期',
						color: ['#22eebd'],
						type: 'bar',
						barGap: 0,
						barWidth: 6,
						data: that.chartData.saleUpArr
					}, {
						name: '同期',
						color: ['#015fff'],
						type: 'bar',
						barGap: 0,
						barWidth: 6,
						data: that.chartData.saleDownArr
					}, {
						name: '同比',
						type: 'line',
						color: ['#efb90f'],
						yAxisIndex: 1,
						smooth: true,
						symbol: 'circle',
						data: that.chartData.saleRateArr
					}]
				};
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.barLinechart) || echarts.init(this.$refs.barLinechart);
				chart.setOption(option);
			}
		},
		mounted() {
			this.drawLineBar();
		},
		beforeDestory(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.barLinechart {
		width: 100%;
		height: 100%;
	}
</style>