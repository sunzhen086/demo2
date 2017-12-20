<template>
	<div class="chart" ref="chart"></div>
</template>

<script>
	import echarts from 'echarts';
	export default {
		props:{
			chartData:Object
		},
		data() {
			return {
				
			}
		},
		methods: {
			drawChart: function() {
				var $this = this;
				var option = {
					tooltip: {
						trigger: 'axis',
						formatter:function(data){
							var str = ''
							if(data[0].name){
								str += data[0].name + '<br/>' ;
							}
							for(var i = 0; i<data.length; i++){
								var param = data[i];
								if(param.value != '-' || param.value == 0){
									if(param.seriesName){
										str += param.seriesName 
									}
									str += '：' + param.value 
									if(i==2){
										str += $this.chartData.chartUnit[1] + '<br/>';
									}else{
										str += $this.chartData.chartUnit[0] + '<br/>';
									}
								}
							}
							return str;
						}
					},
					legend: {
						data: [{
							name: this.chartData.chartName[0],
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.chartData.chartName[1],
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.chartData.chartName[2],
							textStyle: {
								color: '#fff'
							}
						}],
						top:'2%',
						right:'8%'
					},
					grid: {
						top: '15%',
						left: '2%',
						right: '2%',
						bottom: '0%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: true,
						data: this.chartData.xData,
						axisLine: {
							lineStyle: {
								color: '#fff', //x轴颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							interval: 0,
							formatter:function(value){  
                            	return value.split("").join("\n");  
                        	} 
						},
						axisTick: {
							show: false,
							alignWithLabel: true
						}
					},
					yAxis: [{
						name:this.chartData.chartUnit[0] + '       ',
						type: 'value',
						min:this.chartData.yData[0]['min'],
						max:this.chartData.yData[0]['max'],
						position: 'left',
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							},
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
							show: false,
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						}
					}, {
						name:'        '+this.chartData.chartUnit[1],
						type: 'value',
						min:this.chartData.yData[1]['min'],
						max:this.chartData.yData[1]['max'],
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
							},
							formatter: function(v, i) {
								return v ;//+ '%';
							}
						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: false, //是否显示y轴的线
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						}
					}],
					series: [{
						type: 'bar',
						barWidth: '50%',
						stack:'sum',
						name: this.chartData.chartName[0],
						color: ['#22eebd'],
						data: this.chartData.bar1Data,
					},
					{
						type: 'bar',
						barWidth: '50%',
						stack:'sum',
						name: this.chartData.chartName[0],
						color: ['#22eebd'],
						data: this.chartData.bar2Data,
						itemStyle:{
							normal: {
								color: 'rgba(0,0,0,0)',
								barBorderColor: "#09F1FF",
								barBorderWidth: 2
							}
						}
					},{
						name: this.chartData.chartName[1],
						type: 'line',
						smooth:true,
						yAxisIndex: 1,
						symbol:'circle',
						color: ['#efb90f'],
						data: this.chartData.line1Data
					},{
						name: this.chartData.chartName[2],
						type: 'line',
						smooth:true,
						symbol:'circle',
						color: ['#f94b00'],
						data: this.chartData.line2Data
					}]
				};
				let chart = this.chart = echarts.init(this.$refs.chart);
				chart.setOption(option);
			}
		},
		mounted() {
			this.drawChart();
		},
		watch:{
			chartData:function(val,oldval){
				this.chart.dispose();
				this.drawChart();
			}
		},
		beforeDestroy(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';
	.chart {
		height: 2.8rem;
		width: 12.265rem;
	}
</style>