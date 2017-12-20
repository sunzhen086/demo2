<template>
	<div ref="pricechart" class="pricechart">
	</div>
</template>

<script>
	import echarts from 'echarts';
	export default {
		props: {
			chartData: Object //这样可以指定传入的类型，如果类型不对，会警告
		},
		data(){
			return {
				
			}
		},
		methods: {
			getOption:function(){
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
						formatter: function(params) {		
							var str = '<big style="font-weight: bold;color:#2edbff">' + params[0].name + '</big>' ;
							for(var i=0;i<params.length;i++){
								str += "<br/>"+params[i].seriesName+"："+params[i].value;
							}
							return str;
						}
					},
					legend: {
						data: [{
							name: that.chartData.priceKind.name
						}, {
							name: that.chartData.item1.name
						}, {
							name: that.chartData.item2.name
						}, {
							name: that.chartData.item3.name
						}],
						textStyle: {
							color: '#fff'
						},
						y: 'top',
						x:'right'					
					},
					grid: {
						left: 0,
						right: 20,
						top: 30,
						bottom: 10,
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: that.chartData.date,
						axisLine: {
							lineStyle: {
								color: '#fff', //x轴颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							rotate: 0,
							textStyle: {
								color: '#fff' //x轴信息颜色
							},
							formatter:function(val){
								var str="";
								var month = val.substr(4,2);
								if(month == '01'){
									str=parseInt(month,10)+"月\n"+val.substr(0,4)+"年";
								}else{
									str=parseInt(month,10)+"月";
								}								
								return str;
							}
						},
						splitLine: {
							show: false
						},
						axisTick: {
							show: false //显示分割点
						}
					}],
					yAxis: {
						type: 'value',
						min:that.chartData.min,
						max:that.chartData.max,
						axisLine: {
							show: false, //是否显示y轴的线
							lineStyle: {
								color: '#fff'
							}
						},
						axisLabel: {
							textStyle: {
								color: '#fff'
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisTick: {
							show: false
						},
						axisPointer:{
							show:false 
						}
					},
					series: [{
						name: that.chartData.priceKind.name,
						type: 'line',
						color: ['#efb90f'],
						smooth: true,
						symbol: 'circle',
						data: that.chartData.priceKind.datas
					}, {
						name: that.chartData.item1.name,
						type: 'line',
						color: ['#f94800'],
						smooth: true,
						symbol: 'circle',
						data: that.chartData.item1.datas
					}, {
						name: that.chartData.item2.name,
						type: 'line',
						color: ['#22efbd'],
						smooth: true,
						symbol: 'circle',
						data: that.chartData.item2.datas
					}, {
						name: that.chartData.item3.name,
						type: 'line',
						color: ['#005eff'],
						smooth: true,
						symbol: 'circle',
						data: that.chartData.item3.datas
					}]
				};
				return option;
			},
			drawLine: function() {
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.pricechart) || echarts.init(this.$refs.pricechart);
			},
			flushChartData:function(){
				var that = this;
				that.chart = that.chart = echarts.getInstanceByDom(this.$refs.pricechart) || echarts.init(this.$refs.pricechart);
				that.chart.setOption(this.getOption());
			}			
		},
		watch:{
			chartData:{
				handler:function(val){
					this.flushChartData();
				},
				deep: true
			}
		},
		mounted() {
			this.drawLine();
		},
		beforeDestory(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.pricechart {
		width: 100%;
		height: 100%;
		float: left;
		-webkit-tap-highlight-color: transparent;
		user-select: none;
		position: relative;
		background: transparent;
	}
</style>