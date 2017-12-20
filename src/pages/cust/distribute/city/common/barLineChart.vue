<template>
	<div>
		<div ref="barLineChart" class="barLineChart"></div>
	</div>
</template>

<script>
	import echarts from 'echarts';
	
	export default {
		data() {
			return {
				data: {
					'category': ['[0,40)','[40,70)','[70,100)','[100,200)','[200,300)','[300,400)','[400,500)','[500,700)','[700,1000)','[1000,+∞)'],
					'blueBar': [2100,3035,2900,8190,4020,2900,1800,2156,1709,1600],
					'greenBar': [2015,3017,3136,7763,4420,2853,1931,2292,1534,1399],
					'line': [6.6,9.9,10.3,25.6,14.6,9.4,6.4,7.5,5.1,4.6],
					'legend': ['本期','同期','客户占比数']
				}
			}
		},
		methods: {
			initChart: function() {
        		// 基于准备好的dom，初始化echarts实例
        		var myChart = this.myChart = echarts.init(this.$refs.barLineChart);
        		// 指定图表的配置项和数据
        		var option = {
            		tooltip : {
                		trigger: 'axis',
                		axisPointer: {
                    		type: 'cross',
                    		label: {
		                        backgroundColor: '#6a7985'
                    		}
                		},
                		formatter: '{b}<br />本期：{c0}<br />同期：{c1}<br />客户占比数：{c2}%'
            		},
            		legend: {
            			show: true,
            			data: this.data.legend,
            			textStyle: {
            				color: '#FFF'
            			},
            			top: '0%',
            			right: '2%'
            		},
            		grid: {
            			top: '15%',
                		left: '3%',
                		right: '3%',
                		bottom: '8%',
                		containLabel: true
            		},
            		xAxis : [
                		{
                    		type : 'category',
                    		boundaryGap : false,
                    		data : this.data.category,
                    		axisLabel: {
            					textStyle:{
                					color: 'white'
            					},
            					rotate: 20,
            					interval: 0
        					},
        					axisLine: {
        						show: false
        					},
        					axisTick: {
        						show: false
        					},
        					boundaryGap: []
                		}
            		],
            		yAxis : [
                		{
		                    type : 'value',
		                    min: 0,
		                    max: 9000,
		                    interval: 1500,
		                    axisLabel: {
            					textStyle: {
                					color: 'white'
            					},
            					margin: 15
        					},
        					axisLine: {
        						show: false
        					},
        					axisTick: {
        						show: false
        					},
        					splitLine: {
        						show: true,
        						lineStyle: {
        							color: '#4B68B8',
        							width: 1
        						}
        					}
                		},
                		{
                			nameTextStyle: {
                				color: 'white'
                			},
		                    type : 'value',
		                    min: 0,
		                    max: 30,
		                    interval: 5,
		                    axisLabel: {
		                    	formatter: '{value}%',
            					textStyle: {
                					color: 'white'
            					},
            					margin: 15
        					},
        					axisLine: {
        						show: false
        					},
        					axisTick: {
        						show: false
        					},
        					splitLine: {
        						show: true,
        						lineStyle: {
        							color: '#4B68B8',
        							width: 1
        						}
        					}
                		}
            		],
            		color: ['#27F4FF'],
            		series : [
            			{
                    		name: '本期',
                    		type: 'bar',
                    		data: this.data.greenBar,
                    		itemStyle: {
                    			normal: {
                    				color: '#07DE9B',
                    				width: 3
                    			}
                    		},
                    		barWidth: '10'
                		},
            			{
                    		name: '同期',
                    		type: 'bar',
                    		data: this.data.blueBar,
                    		itemStyle: {
                    			normal: {
                    				color: '#0958FD',
                    				width: 3
                    			}
                    		},
                    		barWidth: '10'
                		},
                		{
                    		name: '客户占比数',
                    		type: 'line',
                    		yAxisIndex: 1,
                    		data: this.data.line,
                    		lineStyle: {
                    			normal: {
                    				color: '#27F4FF',
                    				width: 3
                    			}
                    		},
                    		symbol: 'circle',
                    		symbolSize: 7,
                    		smooth: true
                		}
            		]
        		};
        		myChart.setOption(option);
			}
		},
		mounted(){
			this.initChart();
		},
		beforeDestroy() {
			this.myChart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.barLineChart {
		width: inherit;
		height: 2.46rem;
	}
</style>