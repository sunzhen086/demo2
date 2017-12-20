<template>
	<div ref="piechart" class="piechart">
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
				colors: [
					['rgb(35,239,190)', 'rgb(0,94,254)', 'rgb(28,217,255)',
						'rgb(93,159,193)', 'rgb(84,100,113)'
					],
					['rgb(255,255,255)', 'rgb(145,199,174)', 'rgb(202,134,33)',
						'rgb(116,159,132)', 'rgb(0,94,254)', 'rgb(12,63,158)',
						'rgb(11,168,237)', 'rgb(93,159,193)', 'rgb(84,100,113)'
					]
				]
			}
		},
		methods: {
			drawLine: function() {

				var datas = this.chartData;
				for(var i = 0; i < datas.length; i++) {
					for(var k = 0; k < datas[i].length; k++) {
						datas[i][k]['itemStyle'] = {
							'normal': {
								'color': this.colors[i][k]
							}
						}
					}
				}

				var option = {
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					grid: {
						bottom: 0
					},
					legend: {
						show: false
					},
					series: [{
							name: '价类',
							type: 'pie',
							selectedMode: 'single',
							radius: [0, '45%'],
							label: {
								normal: {
									position: 'inner'
								}
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: datas[0]
						},
						{
							name: '价类',
							type: 'pie',
							selectedMode: 'single',
							radius: ['54%', '62%'],

							label: {
								normal: {
									textStyle: {
										color: '#fff'
									}
								}
							},
							labelLine: {
								normal: {
									lineStyle: {
										//color:'#fff'
									}
								}
							},
							data: datas[1]
						}
					]
				};
				let chart = this.chart = echarts.init(this.$refs.piechart);
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
	.piechart {
		width: 100%;
		height: 100%;
	}
</style>