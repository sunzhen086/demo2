<template>
	<div ref="stackLineChart" class="stackLineChart">
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
				var saleDownArr = that.chartData.saleDownArr;
				var num = saleDownArr.length;
				for(var i = 0; i < num; i++) {
					if(saleDownArr[i] > 0) {
						saleDownArr[i] = {
							value: saleDownArr[i],
							itemStyle: {
								normal: {
									color: 'rgba(0,0,0,0)',
									barBorderColor: "#fe0000",
									barBorderWidth: 2
								}
							}
						};
					}
				}
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
							var str = '<big style="font-weight: bold;color:#2edbff">' + params[0].name + '</big><br/>' ;
							var value = 0;
							var rate = 0;
							var showValue = 0;
							var showRate = 0;
							for(var i = 0; i < params.length; i++) {
								if(params[i].seriesName == "销量(+)") {
									if(!isNaN(params[i].value)) {
										value = params[i].value;
										showValue = 1;
									}
								} else if(params[i].seriesName == "销量(-)") {
									if(!isNaN(params[i].value)) {
										value = params[i].value;
										showValue = 1;
									}
								} else if(params[i].seriesName == "市场份额") {
									if(!isNaN(params[i].value)) {
										rate = params[i].value;
										showRate = 1;
									}
								}
							}
							if(showValue) {
								str += "销量：" + value + " " + that.chartData.unitName + "<br/>";
							}
							if(showRate) {
								str += "市场份额：" + value + " %";
							}
							return str;
						}
					},
					legend: {
						data: ['销量(+)', '销量(-)', '市场份额'],
						textStyle: {
							color: "#ffffff"
						},
						x: 'right'
					},
					grid: {
						left: 15,
						right: 5,
						top: 30,
						bottom: '10%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: that.chartData.periodArr,
						axisLabel: {
							interval: 0,
							textStyle: {
								color: '#ffffff'
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
						}
					}],
					yAxis: [{
						name: '单位：万箱',
						type: 'value',
						min: that.chartData.qtyScale[0],
						max: that.chartData.qtyScale[1],
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							formatter: '{value}',
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
						min: that.chartData.rateScale[0],
						max: that.chartData.rateScale[1],
						splitLine: {
							show: false
						},
						axisLabel: {
							formatter: '{value}',
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
						name: '销量(+)',
						color: ['#1bfb29'],
						type: 'bar',
						stack: 'qty',
						barWidth: 10,
						data: that.chartData.saleUpArr
					}, {
						name: '销量(-)',
						color: ['#fe0000'],
						type: 'bar',
						stack: 'qty',
						barWidth: 10,
						data: saleDownArr
					}, {
						name: '市场份额',
						type: 'line',
						color: ['#20dfb3'],
						yAxisIndex: 1,
						smooth: true,
						symbol: 'circle',
						data: that.chartData.saleRateArr
					}]
				};
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.stackLineChart) || echarts.init(this.$refs.stackLineChart);
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
	.stackLineChart {
		width: 100%;
		height: 100%;
	}
</style>