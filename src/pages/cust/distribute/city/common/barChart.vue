<template>
	<div>
		<div ref="barChart" class="barChart"></div>
	</div>
</template>

<script>
	import echarts from 'echarts';
	
	export default {
		data() {
			return {
				data: {
					'category': ['0-60元','60-80元','80-100元','100-120元','120-140元','140-160元','160元以上'],
					'blueBar': [10759,43970,35241,23968,13054,6891,8235],
					'greenBar': [11547,44938,38157,22014,11975,6752,8124],
					'legend': ['本期','同期']
				}
			}
		},
		methods: {
			initChart: function() {
        		// 基于准备好的dom，初始化echarts实例
        		var myChart = this.myChart = echarts.init(this.$refs.barChart);
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
                		formatter: '{b}<br />本期：{c0}<br />同期：{c1}'
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
		                    max: 50000,
		                    interval: 10000,
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
                		}
            		]
        		};
        		myChart.setOption(option);
			}
		},
		mounted() {
			this.initChart();
		},
		beforeDestroy() {
			this.myChart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.barChart {
		width: inherit;
		height: 2.46rem;
	}
</style>