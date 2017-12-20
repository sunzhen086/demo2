<template>
		<div class="content">
			<div class="chart" ref="chart"></div>
		</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import echarts from 'echarts';
	export default {
		data() {
			return {
				xLineData: ['1月', '2月', '3月', '4月', '5月'],
				'monthData': {
					name: '本年各月订货量',
					type:'bar',
					color: ['rgb(7,222,155)'],
					data: [
						90, 163, 160, 90, 100
					]
				},
				'sameSegData': {
					name: '同档位人均订货量',
					type:'bar',
					color: ['rgb(3,185,255)'],
					data: [
						150, 152, 153, 155, 146
					]
				},
				'sameSlsData': {
					name: '同客户经理人均订货量',
					type:'line',
					color: ['rgb(9,88,253)'],
					data: [
						120, 140, 130, 122, 125
					]
				},
				'sameAreaData': {
					name: '同片区人均订货量',
					type:'line',
					color: ['#efb90f'],
					data: [
						110, 115, 112, 116, 112
					]
				}
			};
		},
		components: {
			//boxBase
		},
		methods: {
			tabClick: function(curTab) {

			},
			drarChart: function() {
				var option = {
					title: {
						text: '订购量走势',
						left:'center',
						textStyle: {
							color: '#fff'
						}
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						},
						formatter:function(data){
							var str = ''
							if(data[0].name){
								str += data[0].name + '<br/>' ;
							}
							for(var i = 0; i<data.length; i++){
								var param = data[i];
								if(param.seriesName){
									str +='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + param.color + '"></span>' + param.seriesName 
								}
								str += '：' + param.value + '条<br/>';
							}
							return str;
						}
					},
					legend: {
						right: 10,
						height:20,
						top:'28px',
						data: [{
							name: this.monthData.name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.sameSegData.name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.sameSlsData.name,
							textStyle: {
								color: '#fff'
							}
						}]
					},
					grid: {
						top: '60',
						left: '20',
						right: '20',
						bottom: '10',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: true,
						data: this.xLineData,
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
						type: 'value',
						name:"订购量（条）",
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
						}
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
								color: '#fff',
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
						}
					}],
					series: [{
						type: 'bar',
						barWidth: 20,
						name: this.monthData.name,
						color: this.monthData.color,
						data: this.monthData.data
					}, {
						type: 'line',
            			smooth: true,
	                    symbol: 'circle',
						name: this.sameSegData.name,
						color: this.sameSegData.color,
						data: this.sameSegData.data
					}, {
						type: 'line',
            			smooth: true,
	                    symbol: 'circle',
						name: this.sameSlsData.name,
						color: this.sameSlsData.color,
						data: this.sameSlsData.data
					}, {
						type: 'line',
            			smooth: true,
	                    symbol: 'circle',
						name: this.sameAreaData.name,
						color: this.sameAreaData.color,
						data: this.sameAreaData.data
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
	@import '../../../../../styles/variables.scss';
	.title {
		padding-right: 0.05rem;
	}
	
	.content {
		height: 2.50rem;
		.tip {
			margin-left: 0.1rem;
			margin-right: 0.6rem;
			background-color: rgb(36, 62, 136);
			padding: 0.1rem;
			span {
				font-size: 0.18rem;
				font-weight: bold;
			}
			.red {
				color: $red;
			}
			.green {
				color: $green;
			}
			.orange {
				color: $orange;
			}
		}
		.chart {
			margin-top: 0.1rem;
			height: 2.0rem;
		}
	}
</style>