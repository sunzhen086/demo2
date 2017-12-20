<template>
	<div>
		<box-base class="main">
			<div slot="box-title">
				<p class="title">营销部流失客户</p>
			</div>
			<div ref="barchart" class="content"></div>
		</box-base>
	</div>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import echarts from 'echarts';

	export default {
		data() {
			return {
				barChartData:{
					organArr:['未\n央','雁\n塔','碑\n林','长\n安','灞\n桥','新\n城','莲\n湖','户\n县','周\n至','蓝\n田','高\n新','高\n陵','阎\n良','临\n潼'],
					rateInc:[104,50,32,29,29,22,21,20,19,17,15,14,14,13]
				}
			}
			
		},
		methods:{
			drawLineBar: function() {
				var that = this;

				var option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						},
						formatter: '<big style="font-weight: bold;color:#2edbff">{b}</big><br />{a}：{c}户'
					},
					legend: {
						data: ['流失'],
						show:false
					},
					grid: {
						left: 0,
						right: 5,
						top: 10,
						bottom: 5,
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: that.barChartData.organArr,
						axisLabel: {
							interval: 0,
							textStyle: {
								color: '#ffffff'
							}
						}
					}],
					yAxis: [{
						type: 'value',
						scale: true,
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							textStyle: {
								color: '#ffffff'
							}
						},
						axisLine: {
							lineStyle: {
								color: '#ffffff'
							}

						}
					}],
					series: [{
						name: '流失',
						color: ['#22efbd'],
						type: 'bar',
						barWidth: 12,
						label: {
			                normal: {
			                    show: false,
			                    position: 'top'
			                }
		                },
						data: that.barChartData.rateInc
					}]
				};
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.barchart) || echarts.init(this.$refs.barchart);
				chart.setOption(option);
			}
		},
		components: {
			boxBase,
			echarts
		},
		mounted() {
			this.drawLineBar();
		},
		beforeDestory(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../../styles/variables.scss";
	
	.main{
		height: 2.1rem;
		margin-top: $box-distince;
		margin-top: 2.38rem;
		
		.content{
			margin:0.1rem;
			height:1.7rem;
		}
	}
</style>
