<template>
	<div class="panel">
		<box-base class="middleRightBox">
			<div slot="box-title">超 5 倍户户数分布趋势</div>
			<div class="content">
				<div ref="barsLinesChart" class="barsLinesChart"></div>
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
				data: {
					'months': ['一月','二月','三月','四月','五月'],
					'blueBar': [236,32,185,76,150],
					'greenBar': [218,45,152,154,148],
					'purpleLine': [0.77,0.11,0.61,0.25,0.49],
					'yellowLine': [0.71,0.15,0.50,0.50,0.48]
				},
				showHeader: false,
				tableData: [{
					title: '',
					Jan: '一月',
					Feb: '二月',
					Mar: '三月',
					Apr: '四月',
					May: '五月'
				},{
					title: '同期',
					Jan: '236',
					Feb: '32',
					Mar: '185',
					Apr: '76',
					May: '150'
				},{
					title: '本期',
					Jan: '218',
					Feb: '45',
					Mar: '152',
					Apr: '154',
					May: '148'
				},{
					title: '同期占比',
					Jan: '0.77%',
					Feb: '0.11%',
					Mar: '0.61%',
					Apr: '0.25%',
					May: '0.49%'
				},{
					title: '本期占比',
					Jan: '0.71%',
					Feb: '0.15%',
					Mar: '0.50%',
					Apr: '0.50%',
					May: '0.48%'
				}]
			}
		},
		components: {
			boxBase
		},
		methods: {
			initChart: function(){
        		// 基于准备好的dom，初始化echarts实例
        		var myChart = this.myChart = echarts.init(this.$refs.barsLinesChart);
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
                		formatter: "{b}<br />本期：{c0}<br />同期：{c1}<br />本期占比：{c2}%<br />同期占比：{c3}%"
            		},
            		legend: {
		                data: [{
							name: this.tableData[2].title
						}, {
							name: this.tableData[1].title
						}, {
							name: this.tableData[4].title
						}, {
							name: this.tableData[3].title
						}],
						top: '5%',
						right: '1%',
		                textStyle: {
		                	color: '#fff'
		                }
		            },
            		grid: {
            			top: '20%',
                		left: '3%',
                		right: '3%',
                		bottom: '0%',
                		containLabel: true
            		},
            		xAxis : [
                		{
                    		type : 'category',
                    		boundaryGap : false,
                    		data : this.data.months,
                    		axisLabel: {
            					textStyle: {
            						color: "#FFF"
            					}
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
		                    min: 20,
		                    max: 270,
		                    interval: 50,
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
		                    max: 1,
		                    interval: 0.2,
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
            		color: ['#EFB90F','#F94800'],
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
                    		barWidth: '20'
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
                    		barWidth: '20'
                		},
                		{
                    		name: '本期占比',
                    		type: 'line',
                    		yAxisIndex: 1,
                    		data: this.data.yellowLine,
                    		lineStyle: {
                    			normal: {
                    				color: '#EFB90F',
                    				width: 3
                    			}
                    		},
                    		symbol: 'circle',
                    		symbolSize: 3,
                    		smooth: false
                		},
                		{
                    		name: '同期占比',
                    		type: 'line',
                    		yAxisIndex: 1,
                    		data: this.data.purpleLine,
                    		lineStyle: {
                    			normal: {
                    				color: '#F94800',
                    				width: 3
                    			}
                    		},
                    		symbol: 'circle',
                    		symbolSize: 3,
                    		smooth: false
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
	.panel {
		
		.middleRightBox {
			.barsLinesChart {
				width: inherit;
				height: 2.5rem;
				z-index: 10;
			}
		}
	}
</style>