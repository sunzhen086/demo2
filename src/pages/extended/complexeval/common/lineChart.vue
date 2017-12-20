<template>
	<div class="chart" ref="chart"></div>
</template>

<script>
	import echarts from 'echarts';
	export default {
		data() {
			return {
				xData:[
					'1月','2月','3月','4月','5月','6月'
				],
				yData:[
					{max:8,min:0}
				],
				lineData:[
					6,3,4,2,2,1
				],
				chartName:['排名'],
				chartUnit:['排名'],
			}
		},
		methods: {
			drawChart: function() {
				var $this = this;
				var option = {
					tooltip: {
						trigger: 'axis',
						formatter:'2017年{b}<br/>{a}：{c}'
					},
					legend: {
						data: [{
							name: this.chartName[0],
							textStyle: {
								color: '#fff'
							}
						}],
						top:'2%',
						right:'8%'
					},
					grid: {
						top: '15%',
						left: '2%',
						right: '4%',
						bottom: '5%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: true,
						data: this.xData,
						axisLine: {
							lineStyle: {
								color: '#fff', //x轴颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							interval: 0,
							formatter:function(name){
								return '2017年' + name;
							}
						},
						axisTick: {
							show: false,
							alignWithLabel: true
						}
					},
					yAxis: [{
						/*name:this.chartUnit[0] + '       ',*/
						type: 'value',
						min:this.yData[0]['min'],
						max:this.yData[0]['max'],
						position: 'left',
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							},
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
							show: false,
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						}
					}],
					series: [
					{
						name: this.chartName[0],
						type: 'line',
						/*smooth:true,
						yAxisIndex: 1,*/
						symbol: 'circle',
						color: ['#efb90f'],
						data: this.lineData,
						label:{
							normal:{
								show:true,
								textStyle:{
									color:'#fff'
								},
								/*formatter:'{b}:第{c}名'*/
							}
						}
					}]
				};
				let chart = this.chart = echarts.init(this.$refs.chart);
				chart.setOption(option);
			}
		},
		mounted() {
			this.drawChart();
		},
		watch:{
			chartData:function(val,oldval){
				this.chart.dispose();
				this.drawChart();
			}
		},
		beforeDestroy(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';
	.chart {
		height: 2rem;
		width: 6.2rem;
	}
</style>