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
					grid: {
						bottom: 35
					},
					legend: {
						show: false,
					},
					xAxis: [{
						show: false,
						data:[
						{
							value:that.chartData.text,
							textStyle: {
								fontSize: 13,
								color:'#fff'
								}
						}],
						type: 'category',
						axisLine:{show:false},
						axisTick:{show:false},
						axisLable:{interval:0}
					}],
					yAxis: [{
						show: false
					}],
					series: [{
						color:['#61a0a8', '#91c7ae', '#c4ccd3','rgb(9,88,253)', 'rgb(79,212,247)','rgb(54,169,250)','rgb(7,222,155)'],
						name: '',
						type: 'pie',
						radius: ['45%', '55%'],
						avoidLabelOverlap: false,
						center: ['50%', '45%'],
						selectedMode: "single",
						label: {
							normal: {
								show: false,
								position: 'center',
								textStyle: {
									fontSize: '14',
									fontWeight: 'normal',
									color: '#fff'
								}
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '14',
									fontWeight: 'normal',
									color: '#fff'
								},
								formatter: '{b}\n{d}%'
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						tooltip: {
							show: false
						},
						data: that.chartData.data
					}]
				};
				var chart = this.chart = echarts.init(this.$refs.piechart);
				chart.setOption(option);
				
				var length = option.series[0].data.length;
				var cur = 0;
				var last = -1;
				chart.dispatchAction({type: 'highlight',dataIndex: cur});
				var b = true;
				var timer = this.timer = setInterval(function(){
					cur++;
					cur = cur < length ? cur : 0;
					last = cur - 1 < 0 ? length-1 : cur - 1;
					if(b) {
						chart.dispatchAction({type: 'downplay',dataIndex: last});
						chart.dispatchAction({type: 'highlight',dataIndex: cur});
					}
				},2000);
				chart.on('mouseover', function(params) {
					b = false;
					if(cur != params.dataIndex) {
						chart.dispatchAction({
							type: 'downplay',
							dataIndex: cur
						});
					}
				});
				chart.on('mouseout', function(params) {
					b = true;
					chart.dispatchAction({
						type: 'highlight',
						dataIndex: cur
					});
				});
			}
		},
		mounted() {
			this.drawPie();
		},
		beforeDestroy() {
			this.chart.dispose();
			clearInterval(this.timer);
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