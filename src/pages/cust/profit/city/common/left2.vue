<template>
	<box-base>
		<div slot="box-title">
			<p class="title">西安市场分类别卷烟零售客户毛利率月度走势</p>
		</div>
		<div slot="box-extend">
			<detail-btn  @on-click="tableShowHide"></detail-btn> 
		</div>

		<div class="content" ref="chart">

		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import detailBtn from 'components/detailbutton/detail-button.vue';

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
						'xLineData': xLineData,
						'data': [{
							'name': '一类烟',
							'color': ['#d37336'],
							'data': [8.3, 8.5, 6.4, 6.2, 6.8, 7, 7.5, 8.1, 7.7, 8, 7.8, 7.98]
						}, {
							'name': '二类烟',
							'color': ['#0af1ff'],
							'data': [10.1, 9.2, 7.9, 9.7, 8.8,8.85,8.7,8.2,8.25,8.18,8.2,8.8]
						}, {
							'name': '三类烟',
							'color': ['#652098'],
							'data': [7.8, 8.4, 7.2, 7.3, 5.99, 6.9, 6.1, 6.1, 5.8, 6, 6.2, 6]
						}, {
							'name': '四类烟',
							'color': ['#0958fd'],
							'data': [11.2, 10.9, 11, 10.9, 10.8,10.2,10.9,11.2,10.9,11.1,10.2]
						}, {
							'name': '五类烟',
							'color': ['#0958fd'],
							'data': [14.4, 7.8, 10.1, 9.5, 12,10.9,10,6.9,14.9,13.9,14.1,14.2]
						}]
					};
				},
				set: function() {

				}
			}
		},
		components: {
			boxBase,
			detailBtn
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
						}, {
							name: this.lineData.data[4].name,
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
						max: 16,
						min: 0,
						interval: 2
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
						symbol: 'circle'
					}, {
						name: this.lineData.data[3].name,
						type: 'line',
						color: ['#005eff'],
						data: this.lineData.data[3].data,
						symbol: 'circle'
					}, {
						name: this.lineData.data[4].name,
						type: 'line',
						color: ['#1cd9ff'],
						data: this.lineData.data[4].data,
						symbol: 'circle'
					}]
				};
				let chart = this.chart = echarts.init(this.$refs.chart);
				chart.setOption(option);
			},
			tableShowHide:function(){
				
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
		height: 2.56rem;
	}
</style>