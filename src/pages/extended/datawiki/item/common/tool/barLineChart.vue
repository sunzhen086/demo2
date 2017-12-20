<template>
	<div class="chart" ref="chart">

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
						formatter: function(params) {		
							var str = '<big style="font-weight: bold;color:#2edbff">' + params[0].name + '</big>' ;
							for(var i=0;i<params.length;i++){
								str += "<br/>"+params[i].seriesName+"："+params[i].value;
							}
							return str;
						}
					},
					legend: {
						x: 'right',
						data: [{
							name: that.chartData.yData.name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: that.chartData.y2Data.name,
							textStyle: {
								color: '#fff'
							}
						}]
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
						scale:true,
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
						
					}, {
						type: 'value',
						position: 'right',
						name: '',
						scale:true,
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
						name: that.chartData.yData.name,
						type: 'bar',
						barWidth: 20,
						color: ['#005eff'],
						smooth: true,
						yAxis: 1, 
						
						data: that.chartData.yData.datas
					}, {
						name: that.chartData.y2Data.name,
						type: 'line',
						color: ['rgb(222,167,38)'],
						smooth: true,
						symbol: 'circle',
						yAxisIndex: 1,
						data: that.chartData.y2Data.datas
					}]
				};
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart);
				chart.setOption(option);
				console.log("drawLine");
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

	.chart {
		margin-top: 0.1rem;
		height: 2.3rem;
	}

</style>