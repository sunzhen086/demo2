<template>
	<box-base style="margin-bottom: 0.14rem;">
		<div slot="box-title">
			<p class="title">西安市分业态卷烟零售客户毛利率对比分析</p>
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
					var xLineData = ['便利店', '服务娱乐', '商城', '其他', '超市', '烟酒商店', '食杂店'];
					return {
						'xLineData': xLineData,
						'data': [{
							'name': '本期毛利率',
							'color': ['#efb90f'],
							'data': [29, 30.5, 29.1, 29.9,29.8,30.5, 31.5 ]
						}, {
							'name': '同期毛利率',
							'color': ['#f94800'],
							'data': [28.9, 30.4, 29, 29.9,27.3,30.49, 32.5]
						}, {
							'name': '本期毛利额',
							'color': ['#22efbd'],
							'data': [40500, 18500, 13000, 2500,1000,500, 400 ]
						}, {
							'name': '同期毛利额',
							'color': ['#005eff'],
							'data': [32000, 18000, 15500,2400, 1000,500, 800]
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
						top: 10,
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
					yAxis: [{
						name:'单位：万元',
						type: 'value',
						position: 'left',
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
						max: 45000,
						min: 0,
						interval: 5000
					}, {
						type: 'value',
						position: 'right',
						splitLine: {
							show: false,
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
						max: 34,
						min: 24,
						interval: 1
					}],
					series: [{
						name: this.lineData.data[0].name,
						type: 'line',
						color: this.lineData.data[0].color,
						data: this.lineData.data[0].data,
						yAxisIndex: 1,
						symbol: 'circle'
					}, {
						name: this.lineData.data[1].name,
						type: 'line',
						color: this.lineData.data[1].color,
						data: this.lineData.data[1].data,
						yAxisIndex: 1,
						symbol: 'circle'
					}, {
						name: this.lineData.data[2].name,
						type: 'bar',
						color: this.lineData.data[2].color,
						data: this.lineData.data[2].data,
						barWidth: 15,
						barGap: '20%'
					}, {
						name: this.lineData.data[3].name,
						type: 'bar',
						color: this.lineData.data[3].color,
						data: this.lineData.data[3].data,
						barWidth: 15,
						barGap: '20%'
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
		height: 2.41rem;
	}
</style>