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
				xData:[
					'1','2','3','4','5','6','7','8','9','10',
					'11','12','13','14','15','16','17','18','19','20',
					'21','22','23','24','25','26','27','28','29','30'
				],
				yData:[
					{max:700,min:200},
				],
				line1Data:[
					600, 500, 380, 450, 300, 480, 520,600, 500, 380, 
					600, 500, 380, 450, 300, 480, 520,600, 500, 380,
					600, 500, 380, 450, 300, 480, 520,450, 300, 480,
				],
				line2Data:[
					420, 380, 300, 350, 270, 320, 310,600, 500, 380,
					450, 300, 480, 520,600, 500, 380, 450, 300, 480, 
					520,600, 500, 380, 450, 300, 480, 520, 300, 480, 
				],
				chartName:['订购量','投放量']				
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
								str += data[0].name + '档<br/>' ;
							}
							for(var i = 0; i<data.length; i++){
								var param = data[i];
								if(param.seriesName){
									str += param.seriesName 
								}
								if(param.value || param.value == 0){
									str += '：' + param.value + '条 <br/>';
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
						}],
						top:'2%',
						right:'2%'
					},
					grid: {
						top: '20%',
						left: '2%',
						right: '2%',
						bottom: '2%',
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
							/*rotate: 45,*/
						},
						axisTick: {
							show: false,
							alignWithLabel: true
						}
					},
					yAxis: [{
						type: 'value',
						min:this.yData[0]['min'],
						max:this.yData[0]['max'],
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
							show: true, //是否显示y轴的线
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						}
					}],
					series: [{
						name: this.chartName[0],
						type: 'line',
						smooth:true,
						symbol: 'circle',
						color: ['#22efbd'],
						data: this.line1Data
					}, {
						name: this.chartName[1],
						type: 'line',
						smooth:true,
						symbol: 'circle',
						color: ['#005eff'],
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