<template>
	<box-base style="margin-bottom: 0.14rem;">
		<div slot="box-title">
			<p class="title">西安市场零售客户毛利率月度走势</p>
		</div>
		<div slot="box-extend">

		</div>

		<div class="content" ref="chart">
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';

	import echarts from 'echarts';

	export default {
		data() {
			return {}
		},
		computed: {
			lineData: {
				get: function() {
					var xLineData = [];
					for(var i = 1; i <= 12; i++) {
						xLineData.push(i + '月');
					}

					return {
						xLineData: xLineData,
						data: [{
							'name': '西安2016年',
							'data': [30.11, 29.6, 29.28, 29.4, 29.45, 29.46, 29.18, 29.32, 29.58, 29.48, 29.57, 29.5],
							'lineStyle': 'solid'
						}, {
							'name': '西安2017年',
							'data': [30.28, 29.63, 29.38, 29.41, 29.51],
							'lineStyle': 'dotted'
						}, {
							'name': '全省2016年 ',
							'data': [29.52, 29.42, 29.28, 29.46, 29.38, 29.3, 29.17, 29.26, 29.55, 29.28, 29.22, 29.31],
							'lineStyle': 'solid'
						}, {
							'name': '全省2017年',
							'data': [29.98, 29.45, 29.33, 29.44, 29.46],
							'lineStyle': 'dotted'
						}]

					};
				},
				set: function() {

				}
			}
		},
		components: {
			boxBase
		},
		methods: {
			drarChart: function() {
				var option = {
					title: {
						text: ''
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						top:10,
						data: [{
							name: this.lineData.data[0].name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.lineData.data[1].name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.lineData.data[2].name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.lineData.data[3].name,
							textStyle: {
								color: '#fff'
							}
						}]
					},
					grid: {
						top: '50',
						left: '20',
						right: '20',
						bottom: '10',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: true,
						data: this.lineData.xLineData,
						axisLine: {
							lineStyle: {
								color: '#fff', //x轴颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							interval: 0
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
							},
							formatter: function(v, index) {
								return v + '%'
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
						},
						max: 30.5,
						min: 29.1,
						interval: 0.2
					},
					series: [{
						name: this.lineData.data[0].name,
						type: 'line',
						color: ['#efb90f'],
						data: this.lineData.data[0].data,
						symbol: 'circle'
					}, {
						name: this.lineData.data[1].name,
						type: 'line',
						color: ['#f94800'],
						data: this.lineData.data[1].data,
						symbol: 'circle'
					}, {
						name: this.lineData.data[2].name,
						type: 'line',
						color: ['#22efbd'],
						data: this.lineData.data[2].data,
						lineStyle: {
							normal: {
								type: 'dotted'
							}
						},
						symbol: 'circle'
					}, {
						name: this.lineData.data[3].name,
						type: 'line',
						color: ['#005eff'],
						data: this.lineData.data[3].data,
						lineStyle: {
							normal: {
								type: 'dotted'
							}
						},
						symbol: 'circle'
					}]
				};
				let chart = this.chart = echarts.init(this.$refs.chart);
				chart.setOption(option);
			}
		},
		mounted() {
			this.drarChart();
		},
		beforeDestroy(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 2.55rem;
	}
</style>