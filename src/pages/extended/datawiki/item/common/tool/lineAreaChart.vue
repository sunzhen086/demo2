<template>
	<div class="lineAreaChart" ref="lineAreaChart">

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
			drawLine: function() {
				var that = this;
				var option = {
					title: {
						left: 'center',
						textStyle: {
							fontSize:14,
							color: '#fff'
						},
						text: that.chartData.title
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						},
						formatter: '<big style="font-weight: bold;color:#2edbff">{b}</big><br />{a}：{c}'+that.chartData.yData.unitName
					},
					legend: {
						x: 'right',
						data: [{
							name: that.chartData.yData.name,
							textStyle: {
								color: '#fff'
							}
						}],
						show: false
					},
					grid: {
						left: 10,
						right: 10,
						top: 30,
						bottom: 20,
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						boundaryGap: true,
						data: that.chartData.xData,
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
							},
							formatter: function(val) {
								var str = "";
								var month = val.substr(4, 2);
								if(month == '01') {
									str = parseInt(month, 10) + "月\n" + val.substr(0, 4) + "年";
								} else {
									str = parseInt(month, 10) + "月";
								}
								return str;
							}
						},
						splitLine: {
							show: false
						},
						axisTick: {
							show: false //显示分割点
						}
					}],
					yAxis: [{
						type: 'value',
						name: '',
						scale: 'true',
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
							},
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
						name: that.chartData.yData.name,
						type: 'line',
						color: ['#efb90f'],
						smooth: true,
						symbol: 'circle',
						areaStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(239, 185, 15, 0.8)'
								}, {
									offset: 0.8,
									color: 'rgba(239, 185, 15,0.2)'
								}], false),
								shadowColor: 'rgba(0, 0, 0, 0.1)',
								shadowBlur: 10
							}
						},
						itemStyle: {
							normal:{
								label:{
									show:true,
									color:'#fff'
								}
							}
						},
						data: that.chartData.yData.datas
					}]
				};
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.lineAreaChart) || echarts.init(this.$refs.lineAreaChart);
				chart.setOption(option);
			}
		},
		mounted() {
			this.drawLine();
		},
		beforeDestroy() {
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.lineAreaChart {
		margin-top: 0.1rem;
		height: 2.3rem;
	}
</style>