<template>
	<div ref="piechart" class="piechart"></div>
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
			drawPie: function() {
				var that = this;
				var option = {
					title: {
						left: 'center',
						textStyle: {
							fontSize: 14,
							color: '#fff'
						},
						text: that.chartData.title
					},
					tooltip: {
						trigger: 'item',
						formatter: "<big style='font-weight: bold;color:#2edbff'>{b}</big><br/>订购量：{c} 箱<br/>占比：{d}%"
					},
					legend: {
						orient: 'horizontal',
						y: 'bottom',
						show: true,
						data:that.chartData.legend,
						textStyle: {
							fontSize: 14,
							color: '#fff'
						}
					},
					series: [{
						color: ['#efb90f', '#22efbd', '#005eff', '#1cd9ff', '#00ff00', '#f7931e', '#f94800'],
						name: '',
						type: 'pie',
						radius: '55%',
						center: ['50%', '45%'],
						label: {
							normal: {
								show: false
							},
							emphasis: {
								show: false
							}
						},
						data: that.chartData.data
					}]
				};

				let chart = this.chart = echarts.getInstanceByDom(this.$refs.piechart) || echarts.init(this.$refs.piechart);
				chart.setOption(option);
			}
		},
		mounted() {
			this.drawPie();
		},
		beforeDestroy() {
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.piechart {
		width: 100%;
		height: 100%;
		float: left;
	}
</style>