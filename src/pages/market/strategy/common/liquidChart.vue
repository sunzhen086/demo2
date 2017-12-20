<template>
	<div ref="fillchart" class="fillchart"></div>
</template>

<script>
	import echarts from 'echarts';
	import 'static/js/echarts-liquidfill.js';
	export default {
		props: {
			chartData: Object //这样可以指定传入的类型，如果类型不对，会警告
		},
		data() {
			return {

			}
		},
		watch: {
			chartData: function() {
				this.drawFill();
			}
		},
		methods: {
			drawFill: function() {
				var that = this;
				var option = {
					grid: {
						bottom: 35
					},
					legend: {
						show: false,
					},
					xAxis: [{
						/*data: [{
							value: that.chartData.text,
							textStyle: {
								fontSize: 13,
								color: '#fff'
							}
						}],*/
						type: 'category',
						axisLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						axisLable: {
							interval: 0
						}
					}],
					yAxis: [{
						show: false
					}],
					series: [{
						type: 'liquidFill',
						data: that.chartData.data,
						animationDuration: 0,
				        animationDurationUpdate: 0,
				        //animationEasingUpdate: 'cubicOut',
						center: ['50%', '50%'],
						color: ['rgb(2,85,225)','rgb(3,199,179)'],//波浪颜色
						outline: {
							show: true,
							borderDistance: 4,
							itemStyle: {
								color: '#0a2481',
								borderColor: '#2edbff', //边框颜色
								borderWidth: 1.5,
								shadowBlur: 10,
								shadowColor: 'rgba(255, 255, 255, 0)', //边框阴影
								opacity: 0.6
							}
						},
						backgroundStyle: {
							color: '#0a2481'
						},
						label: {
							normal: {
								show: true,
								formatter: function(d) {
									return d.name + '\n' + (d.value * 100).toFixed(2) + '%';
								},
								textStyle: {
									fontSize: 13,
									fontWeight: 'normal',
									color: '#fff', //字体颜色
									align: 'center',
									baseline: 'middle'
								},
								position: 'inside'
							}
						},
						itemStyle:{
							normal:{
								color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgb(3,199,179)'
	                            }, {
	                                offset: 1,
	                                color: 'rgb(2,85,225)'
	                            }])
							}
						},
						radius: '90%'
					}],
					tooltip: {
						show: false,
						formatter: function(d) {
							return d.name + '\n' + (d.value * 100).toFixed(2) + '%';
						}
					}
				};
				let chart = this.chart= echarts.init(this.$refs.fillchart);
				chart.setOption(option);
			}
		},
		mounted() {
			this.drawFill();
		},
		beforeDestroy(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.fillchart {
		width: 1.1rem;
		height: 1.1rem;
		-webkit-tap-highlight-color: transparent;
		user-select: none;
		background: transparent;
	}
</style>