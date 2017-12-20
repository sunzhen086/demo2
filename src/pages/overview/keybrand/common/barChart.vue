<template>
	<div ref="barchart" class="barchart">
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
				var dataArr = that.chartData.rateInc;
				var num = dataArr.length;
				for(var i = 0; i < num; i++) {
					if(dataArr[i] < 0) {
						dataArr[i] = {
							value: dataArr[i],
							itemStyle: {
								normal: {
									color: '#fe0000'
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
						formatter: '<big style="font-weight: bold;color:#2edbff">{b}</big><br />{a}：{c}个百分点'
					},
					legend: {
						data: ['占比同比增减'],
						show:false
					},
					grid: {
						left: 0,
						right: 5,
						top: 10,
						bottom: 10,
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: that.chartData.organArr,
						axisLabel: {
							interval: 0,
							textStyle: {
								color: '#ffffff'
							}
						}
					}],
					yAxis: [{
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
					}],
					series: [{
						name: '占比同比增减',
						color: ['#1bfb29'],
						type: 'bar',
						barWidth: 16,
						data: dataArr
					}]
				};
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.barchart) || echarts.init(this.$refs.barchart);
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
	.barchart {
		width: 100%;
		height: 100%;
	}
</style>