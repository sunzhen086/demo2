<template>
	<box-base class="centerBoxBase">
		<div slot="box-title">单箱均价计划执行情况</div>
		<div class="content">
			<div class="dataShow">差距：{{this.diffValue}} 元</div>
			<div class="charts" ref="barChart"></div>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import echarts from 'echarts';
	
	export default {
		data() {
			return {
				barChartData: {
					data: {
						'title': ['实际', '计划'],
						'value': [30021, 31051],
						'lineData': [30021, 30021]
					},
					tickData: {
						'min': 26000,
						'max': 31051
					}
				}
			}
		},
		components: {
			boxBase
		},
		computed: {
			diffValue: function() {
				return this.barChartData.data.value[1]-this.barChartData.data.value[0];
			}
		},
		methods: {
			initBarChart: function() {
        		var option = {
            		grid: {
            			show: false,
            			top: '20%',
                		left: '5%',
                		right: '15%',
                		bottom: '1%',
                		containLabel: true
            		},
            		xAxis: [
	            		{
	            			show: false,
	                		type: 'value',
	                		min: this.barChartData.tickData.min,
	                		max: this.barChartData.tickData.max
	            		},
	            		{
	            			show: false,
	                		type: 'value',
	                		min: this.barChartData.tickData.min,
	                		max: this.barChartData.tickData.max
	            		}
            		],
            		yAxis: {
                		type: 'category',
                		data: this.barChartData.data.title,
                		axisLabel: {
            				textStyle: {
                				color: 'white'
            				}
        				},
        				axisLine: {
        					show: true,
        					lineStyle: {
                				color: '#23539D'
                			}
        				},
        				axisTick: {
        					show: false
        				}
            		},
            		series: [
            			{
            				name:this.barChartData.data.title[1],
		                    type: 'bar',
		                    stack:'sum',
		                    itemStyle: {
		                        normal: {
		                        	color: 'rgb(34,238,189)'
		                        }
		                    },
		                    label: {
		                    	normal: {
		                    		show: true,
		                    		textStyle: {
		                    			color: '#2F2E58'
		                    		},
		                    		position: 'inside',
		                    		offset: [0, -2],
		                    		formatter:'{c} 元'
		                    	}
		                    },
		                    barWidth: 20,
		                    data: [
		                    	'-',
		                    	this.barChartData.data.value[1]
		                    ],
		                    silent: true
		             	},
		             	{
		             		name:this.barChartData.data.title[0],
		                    type: 'bar',
		                    stack:'sum',
		                    itemStyle: {
		                        normal: {
		                        	color: 'rgb(0,96,255)'
		                        }
		                    },
		                    label: {
		                    	normal: {
		                    		show: true,
		                    		textStyle: {
		                    			color: '#2F2E58'
		                    		},
		                    		position: 'inside',
		                    		offset: [0, -2],
		                    		formatter:'{c} 元'
		                    	}
		                    },
		                    barWidth: 20,
		                    data: [
		                    	this.barChartData.data.value[0],
		                    	'-'
		                    ],
		                    silent: true
		             	},
		             	{
		             		type: 'line',
		                    data: this.barChartData.data.lineData,
		                    silent: true,
		                    lineStyle: {
		                    	normal: {
		                    		type: 'dotted',
		                    		color: 'white'
		                    	}
		                    },
		                    itemStyle: {
		                    	normal: {
		                    		opacity: 0
		                    	}
		                    }
		            	}
		             ]
        		};
        		var myChart = this.myChart = echarts.init(this.$refs.barChart);
        		myChart.setOption(option);
    		}
		},
		mounted() {
			this.initBarChart();
		},
		beforeDestroy() {
			this.myChart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';
	.centerBoxBase {
		margin-left:$box-distince;
		margin-top:$box-distince;
		position: relative;
		.dataShow {
			position: absolute;
			top: 0.55rem;
			left: 1rem;
			color: $red;
			font-weight: bold;
		}
		
		.charts {
			height: 1.41rem;
			width:2rem;
		}
	}
</style>