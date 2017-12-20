<template>
		<div class="content">
			<div class="chart" ref="chart">
			</div>
		</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import echarts from 'echarts';
	export default {
		props: {
			chartData: Object //这样可以指定传入的类型，如果类型不对，会警告
		},
		data() {
			return {
				
			};
		},
		components: {
			//boxBase
		},
		methods: {
			tabClick: function(curTab) {

			},
			drarChart: function() {
				var xLineData = this.chartData.xLineData;
				var dataArr = this.chartData.qtySoldData.data;
				console.log(xLineData);
				console.log(dataArr);
				var num = dataArr.length;
				for(var i = 0; i < num; i++) {
					if(-1 != xLineData[i].indexOf("好猫") 
						|| -1 != xLineData[i].indexOf("延安")) {
						dataArr[i] = {
							value: dataArr[i],
							itemStyle: {
								normal: {
									color: '#EFB90F'
								}
							}
						};
					}
				}
				var option = {
					title: {
						left:'center',
						textStyle: {
							color: '#fff'
						},
						text: '2017年1-6月销量走势'
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
								if(param.value || param.value == 0){
									str += '：' + param.value 
									if(i==1){
										str += '% <br/>';
									}else{
										str += '万箱<br/>';
									}
								}
							}
							return str;
						}
					},
					legend: {
						right: 10,
						hight:20,
						data: [{
							name: this.chartData.qtySoldData.name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.chartData.tbData.name,
							textStyle: {
								color: '#fff'
							}
						}]
					},
					grid: {
						top: '50',
						left: '20',
						right: '20',
						bottom: '20',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: true,
						data: this.chartData.xLineData,
						axisLine: {
							lineStyle: {
								color: '#fff', //x轴颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							rotate:30,
							interval: 0
						},
						axisTick: {
							show: false,
							alignWithLabel: true
						}
					},
					yAxis: [{
						name:"销量（万箱）",
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
						}
					}, {
						name:"同比增减",
						type: 'value',
						position: 'right',
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							textStyle: {
								color: '#fff',
							},
							formatter: function(v, i) {
								return v + '%';
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
						name: this.chartData.qtySoldData.name,
						color: this.chartData.qtySoldData.color,
						data: this.chartData.qtySoldData.data
					}, {
						type: 'line',
            			smooth: true,
						yAxisIndex: 1,
		                    symbol: 'circle',
						name: this.chartData.tbData.name,
						color: this.chartData.tbData.color,
						data: this.chartData.tbData.data
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
		margin: 0rem !important;
		span{
			color:rgb(255,150,0);
			font-size: 0.2rem;
			font-weight: bold;
		}
	    
	    .chart {
	    	border: 1px #4169E1 solid;
		    margin-bottom: 0.2rem;
		    margin-right: 0.13rem;
			margin-top: 0.2rem;
			height: 2.0rem;
		}
	}
</style>