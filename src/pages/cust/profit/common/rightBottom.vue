<template>
	<div class="rightPanels rightBottom">
		<box-base>
			<div slot="box-title">全省分类别卷烟零售客户毛利率月度走势</div>
			<div class="content">
				<div class="lineChart" ref="lineChart"></div>
			</div>
		</box-base>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	
	import echarts from 'echarts';
	
	export default {
		data() {
			return {
				lineChart: {
					'category': ['6月','7月','8月','9月','10月','11月','12月','1月','2月','3月','4月','5月'],
					'value1': [8.2,8.4,6.5,6.2,7.1,7.2,7.6,8,7.8,8.1,7.7,7.9],
					'value2': [10.1,9.3,7.8,9.7,8.6,8.7,8.5,8.3,8.4,8.3,8.4,8.9],
					'value3': [7.8,8.3,7.2,7.3,5.9,6.9,6,6,5.8,6.1,6.3,6],
					'value4': [11.3,10.6,10.8,10.5,10.4,10.1,10.3,11.2,10.6,10.2,11,10.1],
					'value5': [14.2,7.7,10.1,9.5,11.9,10.3,10,6.8,14.4,13.8,14.1,14.2],
					'names': ['一类烟','二类烟','三类烟','四类烟','五类烟']
				}
			}
		},
		components: {
			boxBase
		},
		methods: {
			initChart: function() {
    		    var myChart = this.myChart = echarts.init(this.$refs.lineChart);
        		let option = {
            		grid: {
            			show: false,
            			top: '15%',
                		left: '4%',
                		right: '5%',
                		bottom: '3%',
                		containLabel: true
            		},
            		legend: {
            			show: true,
		                data: this.lineChart.names,
		                textStyle: {
		                	color: '#fff'
		                },
		                right: '4%'
		            },
		            tooltip: {
		            	show: true,
		            	formatter: "{b}<br />{a0}：{c0}%<br />{a1}：{c1}%<br />{a2}：{c2}%<br />{a3}：{c3}%<br />{a4}：{c4}%",
		            	trigger: 'axis',
                		axisPointer: {
                    		type: 'cross',
                    		label: {
		                        backgroundColor: '#6a7985'
                    		}
                    	}
		            },
            		xAxis: {
            			show: true,
                		type: 'category',
                		data: this.lineChart.category,
                		axisLine: {
        					show: true,
        					lineStyle: {
        						color: 'white'
        					}
        				},
        				axisLine: {
        					show: true,
        					lineStyle: {
        						color: "#fff"
        					}
        				},
        				axisTick: {
        					show: false
        				},
        				axisLabel: {
        					textStyle: {
        						color: "#fff"
        					}
        				}
            		},
            		yAxis: {
            			nameTextStyle: {
            				color: "#FFF"
            			},
            			nameLocation: 'middle',
            			nameGap: 35,
            			type: 'value',
            			min: 0,
            			max: 16,
            			interval: 2,
            			axisLabel: {
            				margin: 10,
            				formatter: "{value}%",
            				textStyle:{
                				color: 'white'
            				}
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
        						color: '#263B68'
        					}
        				}
            		},
            		series: [
            			{
            				name: '一类烟',
		                    type: 'line',
		                    itemStyle: {
		                        normal: {
		                            color: '#efb90f'
		                        }
		                    },
		                    barWidth: 12,
		                    data: this.lineChart.value1,
		                    symbol: 'circle',
                    		symbolSize: 7,
                    		smooth: true
		               },
		               {
            				name: '二类烟',
		                    type: 'line',
		                    itemStyle: {
		                        normal: {
		                            color: '#f94800'
		                        }
		                    },
		                    barWidth: 12,
		                    data: this.lineChart.value2,
		                    symbol: 'circle',
                    		symbolSize: 7,
                    		smooth: true
		               },
		               {
            				name: '三类烟',
		                    type: 'line',
		                    itemStyle: {
		                        normal: {
		                            color: '#22efbd'
		                        }
		                    },
		                    barWidth: 12,
		                    data: this.lineChart.value3,
		                    symbol: 'circle',
                    		symbolSize: 7,
                    		smooth: true
		               },
		               {
            				name: '四类烟',
		                    type: 'line',
		                    itemStyle: {
		                        normal: {
		                            color: '#005eff'
		                        }
		                    },
		                    barWidth: 12,
		                    data: this.lineChart.value4,
		                    symbol: 'circle',
                    		symbolSize: 7,
                    		smooth: true
		               },
		               {
            				name: '五类烟',
		                    type: 'line',
		                    itemStyle: {
		                        normal: {
		                            color: '#1cd9ff'
		                        }
		                    },
		                    barWidth: 12,
		                    data: this.lineChart.value5,
		                    symbol: 'circle',
                    		symbolSize: 7,
                    		smooth: true
		               },
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
	.rightPanels {
		width: 7rem;
		height: 2.95rem;
		
		.lineChart {
			width: 6.84rem;
			height: 2.56rem;
			margin-top: 0.05rem;
		}
	}
	
	.rightBottom {
		margin-top: 0.1rem;
	}
</style>