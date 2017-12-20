<template>
	<div class="chart" ref="chart"></div>
</template>

<script>
	import echarts from 'echarts';
	export default {
		props:{
			dialogTitle:String
		},
		data() {
			return {
				xData:['4月第一周','4月第二周','4月第三周','4月第四周','5月第一周','5月第二周','5月第三周'],
				yData:[
					{max:700,min:200},
					{max:100,min:0},
				],
				bar1Data:[420, 380, 300, 350, 270, 320, 310],
				bar2Data:[600, 500, 380, 450, 300, 480, 520],
				line1Data:[13.56, 33.27, 25.38, 34.18, 75.99, 36.75, 32.58],
				line2Data:[91.62, 90.32, 90.93, 91.53, 91.87, 93.44, 94.34],
				chartName:['订购量','投放量','货源使用率','上柜率']				
			};
		},
		methods: {
			drawChart: function() {
				var option = {
					title:{
						show:false,
						text:this.dialogTitle,
						textStyle:{
							color:'#fff',
							fontSize:14
						},
						left:'45%',
						top:'8%'
					},
					tooltip: {
						trigger: 'axis',
						formatter:function(data){
							var str = ''
							if(data[0].name){
								str += "2017年" + data[0].name + '<br/>' ;
							}
							for(var i = 0; i<data.length; i++){
								var param = data[i];
								if(param.seriesName){
									str += param.seriesName 
								}
								if(param.value || param.value == 0){
									str += '：' + param.value 
									if(i>1){
										str += '% <br/>';
									}else{
										str += '箱 <br/>';
									}
								}
							}
							return str;
						}
					},
					legend: {
						data: [{
							name: this.chartName[0],
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.chartName[1],
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.chartName[2],
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.chartName[3],
							textStyle: {
								color: '#fff'
							}
						}],
						top:'2%',
						right:'2%',
					},
					grid: {
						top: '24%',
						left: '2%',
						right: '2%',
						bottom: '0%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: true,
						data: this.xData,
						axisLine: {
							lineStyle: {
								color: '#fff', //x轴颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							interval: 0,
							formatter:function(name){
								/*if(name == '1月'){
									return name + "\n2017年";
								}
								return name;*/
								return "2017年"+name;
							}
						},
						axisTick: {
							show: false,
							alignWithLabel: true
						}
					},
					yAxis: [{
						name:'单位：箱',
						type: 'value',
						min:this.yData[0]['min'],
						max:this.yData[0]['max'],
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
							show: true, //是否显示y轴的线
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						}
					}, {
						//name:'存销比',
						type: 'value',
						min:this.yData[1]['min'],
						max:this.yData[1]['max'],
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
								return v + '%';
							}
						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: true, //是否显示y轴的线
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						}
					}],
					series: [{
						type: 'bar',
						barWidth: '20%',
						name: this.chartName[0],
						color: ['#22eebd'],
						data: this.bar1Data
					}, {
						type: 'bar',
						barWidth: '20%',
						name: this.chartName[1],
						color: ['#015fff'],
						data: this.bar2Data
					}, {
						name: this.chartName[2],
						type: 'line',
						smooth:true,
						yAxisIndex: 1,
						symbol: 'circle',
						color: ['#efb90f'],
						data: this.line1Data
					}, {
						name: this.chartName[3],
						type: 'line',
						smooth:true,
						yAxisIndex: 1,
						symbol: 'circle',
						color: ['#f94b00'],
						data: this.line2Data
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
			dialogTitle:function(val,oldval){
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
		height: 2.4rem;
		width: 100%;
	}
</style>