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
				xLineData: ['延安\n（软）', '兰州\n（软盒黄）', '好猫\n（细支长乐）', '哈德门\n（精品）', 
							'南京\n（炫赫门）','黄鹤楼\n（硬天下名楼）','南京\n（雨花石）',
							'长白山\n（777）','娇子\n（X）','玉溪\n（硬）'],
				'itemData': {
					name: '订购量',
					type:'bar',
					color: ['rgb(7,222,155)'],
					data: [
						320, 310, 289, 276, 252,242, 231, 210, 200, 185
					]
				}
			};
		},
		methods: {
			drarChart: function() {
				var option = {
					title: {
						text: '订购量T10商品',
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
						hight:20,
						data: [{
							name: this.itemData.name,
							textStyle: {
								color: '#fff'
							}
						}]
					},
					grid: {
						top: '40',
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
						name: this.itemData.name,
						color: this.itemData.color,
						data: this.itemData.data
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