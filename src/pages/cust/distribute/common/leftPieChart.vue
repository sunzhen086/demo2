<template>
	<div class="bottomPie" ref="pieChart"></div>
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
				var option = {
					series: [{
						color: ['rgb(9,88,253)', 'rgb(79,212,247)','rgb(54,169,250)','rgb(7,222,155)','rgb(121,132,194)', 'rgb(138,220,92)','rgb(245,232,30)','rgb(255,255,255)'],
						name: '',
						type: 'pie',
						radius: ['70%', '83%'],
						avoidLabelOverlap: false,
						center: ['50%', '50%'],
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
						data: this.chartData.data
					}]
				};
				var chart = this.chart = echarts.init(this.$refs.pieChart);
				chart.setOption(option);
				
				var length = option.series[0].data.length;
				var cur = 0;
				var last = -1;
				chart.dispatchAction({type: 'highlight',dataIndex: cur});
				var b = true;
				var t = this.t =  setInterval(function(){
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
		beforeDestroy(){
			this.chart.dispose();
			clearInterval(this.t);
		}
	}
</script>

<style lang="scss" scoped>
	.bottomPie{
		width: 1.3rem;
		height: 1.32rem;
		margin-top: 0.08rem;
	}
</style>