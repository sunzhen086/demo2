<template>
	<div class="chart" ref="chart">

	</div>
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
			drawLine: function() {
				var that = this;
				//alert(that.chartData.xLineData);
				
				var option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						},
						 formatter: function(params) {//展示浮动框的内容
							var str = params[0].name+"<br/>";	
							
				            for (var i = 0, l = params.length; i < l; i++) {
				            	str += params[i].seriesName+"："+parseFloat(params[i].value).toFixed(2)+"</br>";
				            }
							
							return str;
						}
						
					},
					legend: {
						right: 0,
						hight:20,
						orient: 'vertical',//图例竖排
						top:30,
						data: [{
							name: that.chartData.data1.name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: that.chartData.data2.name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: that.chartData.data3.name,
							textStyle: {
								color: '#fff'
							}
						}]
					},
					grid: {//画出的图的大小
						//width:604,
						height:130,
						left: 10,
						right: 110,
						top: 30,
						bottom: 0,
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						boundaryGap: true,
						data: that.chartData.xLineData,
						axisLine: {
							
							lineStyle: {
								color: '#fff', //x轴颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							interval:0,  
							rotate: that.chartData.rotate,
							textStyle: {
								color: '#fff' //x轴信息颜色
							}
						},
						splitLine: {
							show: false
						},
						axisTick: {
							show: false //显示分割点
						}
					}],
					yAxis: [{
						type: 'value',
						name: '单位：箱',
						position: 'left',
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisLabel: {//纵坐标轴的属性
							textStyle: {
								color: '#fff'
							},
							formatter: function(v){
								return  (v || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
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
						//name: that.chartData.data2.name,
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
							formatter: function(v,i){
								return  v + '%';
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
						name: that.chartData.data1.name,
						barWidth: 10,//柱子宽度
						type: that.chartData.data1.type,
						color: [that.chartData.data1.color],
						smooth: true,
						yAxis: 1, //主坐标轴
						areaStyle:that.chartData.data1.areaStyle,
						
						data: that.chartData.data1.datas
					}, {
						name: that.chartData.data2.name,
						barWidth: 10,
						type: that.chartData.data2.type,
						color: [that.chartData.data2.color],
						smooth: true,
						yAxis: 1,
						areaStyle:that.chartData.data2.areaStyle,
						data: that.chartData.data2.datas
					}, {
						name: that.chartData.data3.name,
						
						type: that.chartData.data3.type,
						color: [that.chartData.data3.color],
						smooth: true,
						yAxisIndex: 1,//次坐标轴
						symbol: 'circle',
						areaStyle:that.chartData.data3.areaStyle,
						data: that.chartData.data3.datas
					}]
				};
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart);//初始化
				chart.setOption(option);
			}
		},
		mounted() {//页面初始化进来调用
			this.drawLine();
		},
		watch:{//数据变化监控
			chartData:function(){
				this.drawLine();
			}
		},
		beforeDestroy(){//销毁
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';

	.chart {
		//margin-top: 0.3rem;
		//margin-bottom: 0.3rem;
		height: 1.7rem;
	}

</style>