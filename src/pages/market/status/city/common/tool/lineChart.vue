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
						},
						formatter: function(params) {		
							var str = '<big style="font-weight: bold;color:#2edbff">' + params[0].name + '</big>' ;
							for(var i=0;i<params.length;i++){
								str += "<br/>"+params[i].seriesName+"："+params[i].value;
							}
							return str;
						}
					},
					legend: {
						data: [{
							name: that.chartData.cityData.name
						}, {
							name: that.chartData.proData.name
						}],
						textStyle: {
							color: '#fff'
						},
						y: 'top',
						x:'right'
					},
					grid: {
						left: 30,
						right: 10,
						top: 40,
						bottom: 30
					},
					xAxis: [{
						type: 'category',
						data: that.chartData.date,
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
						min:that.chartData.min,
						max:that.chartData.max,
						axisLine: {
							show: false, //是否显示y轴的线
							lineStyle: {
								color: '#fff'
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
						axisTick: {
							show: false
						},
						axisPointer:{
							show:true 
						}
					},
					series: [{
						name: that.chartData.cityData.name,
						type: 'line',
						color: ['#22eebd'],
						smooth: true,
						symbol: 'circle',
						data: that.chartData.cityData.datas
					},{
						name: that.chartData.proData.name,
						type: 'line',
						color: ['#015fff'],
						smooth: true,
						symbol: 'circle',
						data: that.chartData.proData.datas
					}]
				};
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.linechart) || echarts.init(this.$refs.linechart);
				chart.setOption(option);
			}
		},
		watch:{
			chartData:{
				handler: function (val, oldVal) {
					this.drawLine();
				},
	      		deep: true
			}
		},
		beforeDestory(){
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