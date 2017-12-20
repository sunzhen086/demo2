<template>
	<div class="rightPanels rightTop">
		<box-base>
			<div slot="box-title">全省市场零售客户毛利率月度走势</div>
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
					'category': ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
					'value1': [9.56,9.27,9.87,9.66,8.92,10.48,10.01,9.92,9.64,8.82,8.27,8.03],
					'value2': [8.99,9.04,10.01,10.15,10.35],
					'names': ['2016年','2017年']
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
		            	formatter: function(value) {
                			if(value.length == 2) {
                				return value[0].axisValue + "<br />2016年：" + value[0].data + "%<br />2017年：" + value[1].data + "%";
                			} else if (value.length ==1) {
                				return value[0].axisValue + "<br />2016年：" + value[0].data + "%";
                			}
                		},
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
            			min: 5,
            			max: 11,
            			interval: 1,
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
            				name: '2016年',
		                    type: 'line',
		                    itemStyle: {
		                        normal: {
		                            color: '#0958FD'
		                        }
		                    },
		                    barWidth: 12,
		                    data: this.lineChart.value1,
		                    symbol: 'circle',
                    		symbolSize: 7,
                    		smooth: true
		               },
		               {
            				name: '2017年',
		                    type: 'line',
		                    itemStyle: {
		                        normal: {
		                            color: '#07DE9B'
		                        }
		                    },
		                    barWidth: 12,
		                    data: this.lineChart.value2,
		                    symbol: 'circle',
                    		symbolSize: 7,
                    		smooth: true
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
	.rightPanels {
		width: 7rem;
		height: 2.95rem;
		
		.lineChart {
			width: 6.84rem;
			height: 2.55rem;
			margin-top: 0.05rem;
		}
	}
</style>