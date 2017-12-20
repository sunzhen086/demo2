<template>
	<div ref="barchart" class="barchart">
	</div>
</template>

<script>
	import echarts from 'echarts';
	export default {
		props: {
			chartData: Array //这样可以指定传入的类型，如果类型不对，会警告
		},
		data() {
			return {
				xLineData: ['全省',
					'西安',
					'榆林',
					'咸阳',
					'渭南',
					'宝鸡',
					'延安',
					'安康',
					'汉中',
					'商洛',
					'铜川',
					'杨凌'
				],
				color: ['rgb(0,94,254)','rgb(35,239,190)']
			}
		},
		methods: {
			drawChart: function() {
				var option = {
					title: {
						text: ''
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						//left: 70,
						right: 0,
						top: 10,
						botton: 10,
						data: [{
							name: this.chartData[0].name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.chartData[1].name,
							textStyle: {
								color: '#fff'
							}
						}]
					},
					grid: {
						top: '45',
						left: '0',
						right: '0',
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
							interval: 0,
							//rotate :90
							formatter: function(v) {
								var _v = v.split('');
								var txt = [];
								for(var i = 0; i < _v.length; i++) {
									txt.push('\n');
									txt.push(_v[i]);
								}
								txt.shift(0, 1);
								return txt.join('');
							}
						},
						axisTick: {
							show: false,
							alignWithLabel: true
						}
					},
					yAxis: {
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
							show: true, //是否显示y轴的线
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						},
						max: 350,
						min: 0,
						interval: 50
					},
					series: [{
						name: this.chartData[0].name,
						type: 'bar',
						color: [this.color[0]],
						data: this.chartData[0].data,
						barWidth: 5,
						barGap: '20%'
					}, {
						name: this.chartData[1].name,
						type: 'bar',
						color: [this.color[1]],
						data: this.chartData[1].data,
						barWidth: 5,
						barGap: '20%'
					}]
				};
				let chart = this.chart = echarts.init(this.$refs.barchart);
				chart.setOption(option);
			}
		},
		mounted() {
			this.drawChart();
		},
		beforeDestroy(){
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