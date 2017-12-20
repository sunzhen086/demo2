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
						show:false
					},
					grid: {
						left: 0,
						right: 20,
						top: 10,
						bottom: 0,
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
						interval: this.chartData.intervalData,
						max: this.chartData.maxData,
						min: this.chartData.minData,
						axisLine: {
							show: false, //是否显示y轴的线
							lineStyle: {
								color: '#fff'
							}
						},
						axisLabel: {
							textStyle: {
								color: '#fff'
							},
							formatter: function(v, index) {
								return v + '%'
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisTick: {
							show: false
						},
						axisPointer:{
							show:true ,
							label:{
								formatter :function(parms){
									return (parms.value).toFixed(2) +'%';//y轴显示的数据
								}
							}
						}
					},
					series: [{
						name: that.chartData.all.name,
						type: 'line',
						color: ['rgb(7,222,155)'],
						smooth: true,
						
						data: that.chartData.all.datas
					}, {
						name: that.chartData.shanxi.name,
						type: 'line',
						color: ['rgb(222,167,38)'],
						smooth: true,
						
						data: that.chartData.shanxi.datas
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
		float: left;
		-webkit-tap-highlight-color: transparent;
		user-select: none;
		position: relative;
		background: transparent;
	}
</style>