<template>
	<div ref="linechart" class="linechart">
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
				xLineData: ['2013', '2014', '2015', '2016', '2017']
			}
		},
		methods: {

			drawLine: function() {
				var that = this;
				var option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					legend: {
						show: false
					},
					grid: {
						left: 15,
						right: 20,
						top: 40,
						bottom: 10,
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: this.xLineData,
						axisLine: {
							lineStyle: {
								color: '#fff', //x轴颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							rotate: 0,
							textStyle: {
								color: '#fff' //x轴信息颜色
							}
						},
						splitLine: {
							show: false
						},
						axisTick: {
							show: false //显示分割点
						}
					}],
					yAxis: {
						type: 'value',
						axisLine: {
							show: false, //是否显示y轴的线
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
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisPointer :{
							show:true,
							label:{
								show:true
							}
						},
						axisTick: {
							show: false
						},
						axisPointer: {
							show: true
						},
						interval: that.chartData.interval,
						max: that.chartData.max,
						min: that.chartData.min,
					},
					series: [{
						type: 'line',
						smooth: true,
						data: that.chartData.data,
						areaStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(1, 95, 255, 0.8)'
								}, {
									offset: 0.8,
									color: 'rgba(1, 95, 255, 0)'
								}], false),
								shadowColor: 'rgba(0, 0, 0, 0.1)',
								shadowBlur: 20
							}
						},
						itemStyle: {
							normal: {
								color: 'rgb(1,95,255)'
							}
						},
						label:{
							normal:{
								show:true,
								position:'top',
								textStyle:{
									color:'#fff'
								}
							}
						}
					}]
				};
				let chart = this.chart = echarts.init(this.$refs.linechart);
				chart.setOption(option);
			}

		},
		mounted() {
			this.drawLine();
		},
		beforeDestroy(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.linechart {
		width: 100%;
		height: 100%;
	}
</style>