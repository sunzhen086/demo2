<template>
	<div class="bottomPie" ref="pieChart"></div>
</template>

<script>
	import echarts from 'echarts';
	
	export default {
		props: {
			curCity: String
		},
		data() {
			return {
				chartData: {
					'西安': [
						{name:'新品货源',value:74801},
						{name:'紧俏货源',value:36606},
						{name:'完全满足',value:1638166},
						{name:'均衡满足',value:181538},
					],
					'榆林': [
						{name:'新品货源',value:84801},
						{name:'紧俏货源',value:98106},
						{name:'完全满足',value:1068284},
						{name:'均衡满足',value:181538},
					]
				}
			}
		},
		watch: {
			curCity: function() {
				this.chart.dispose();
				clearInterval(this.timmer);
				this.drawPie();
			}
		},
		methods: {
			drawPie: function() {
				var option = {
					series: [{
						color: [ 'rgb(79,212,247)','rgb(54,169,250)','rgb(9,88,253)','rgb(7,222,155)','rgb(121,132,194)', 'rgb(138,220,92)','rgb(245,232,30)','rgb(255,255,255)'],
						name: '',
						type: 'pie',
						radius: ['62%', '80%'],
						avoidLabelOverlap: false,
						center: ['50%', '50%'],
						selectedMode: "single",
						label: {
							normal: {
								show: false,
								position: 'center',
								color: '#fff',
								fontSize: '16',
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '16',
									fontWeight: 'normal',
									color: '#fff'
								},
								formatter: '{b}\n{d}%'
							}
						},
						data: this.chartData[this.curCity]
					}]
				};
				let chart = this.chart = echarts.init(this.$refs.pieChart);
				chart.setOption(option);
				var length = option.series[0].data.length;
				var cur = 0;
				var last = -1;
				chart.dispatchAction({type: 'highlight',dataIndex: cur});
				var b = true;
				this.timmer = setInterval(function(){
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
		beforeDestory(){
			this.chart.dispose();
			clearInterval(this.timmer)
		}
	}
</script>

<style lang="scss" scoped>
	.bottomPie{
		width: 1.7rem;
		height: 1.7rem;
		margin-top: -0.2rem;
		margin-left: 0.6rem;
		position: absolute;
		z-index: 1;
	}
</style>