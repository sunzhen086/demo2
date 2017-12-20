<template>
	<box-base class="rightBoxBase">
		<div slot="box-title">
			<p class="title" v-on:click="goto()">客户分布</p>
		</div>
		<div class="content">
			<div ref="barChart" class="barCharts"></div>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import echarts from 'echarts';
	
	export default {
		data() {
			return {
				barChart: {
					'category': ['201701', '201702', '201703', '201704', '201705'],
					'bq': [100869, 96306, 98381, 97743, 98297],
					'tq': [30509, 30191, 30655, 30719, 30825],
					'xData':[150000,0],
					'names': ['西安','全省']
				}
			}
		},
		components: {
			boxBase
		},
		methods: {
			goto:function(){
				this.$router.push({path:'/cust/citydistribute'});
			},
			initBarChart: function() {
        		let option = {
            		grid: {
            			show: false,
            			top: '25%',
                		left: '3%',
                		right: '3%',
                		bottom: '0%',
                		containLabel: true
            		},
            		legend: {
            			show: true,
		                data: this.barChart.names,
		                right: '2%',
		                top: '2%',
		                selectedMode :false,
		                textStyle: {
		                	color: '#fff'
		                }
		            },
		            tooltip: {
		            	trigger:'axis',
		            	formatter: function(params) {		
							var str = '<big style="font-weight: bold;color:#2edbff">' + params[0].name + '</big><br/>' ;
							str += params[0].seriesName+"："+params[0].value+" 户 <br/>";
							str += params[1].seriesName+"："+parseInt(params[0].value+params[1].value)+" 户 <br/>";
							return str;
						}
		            },
            		xAxis: {
            			show: true,
                		type: 'category',
                		data: this.barChart.category,
                		axisLine: {
        					show: true,
        					lineStyle: {
        						color: 'white'
        					}
        				},
        				axisTick: {
        					show: false
        				},
            		},
            		yAxis: {
            			name: '',
            			type: 'value',
            			max:this.barChart.xData[0],
            			min:this.barChart.xData[1],
            			axisLabel: {
            				margin: 10,
            				textStyle:{
                				color: 'white'
            				}
        				},
        				axisLine: {
        					show: true,
        					lineStyle: {
        						color: 'white'
        					}
        				},
        				axisTick: {
        					show: true
        				},
        				splitLine: {
        					show: false
        				}
            		},
            		series: [
                		{
            				name: this.barChart.names[0],
		                    type: 'bar',
		                    stack:'sum',
		                    color: ['#07DE9B'],
		                    itemStyle: {
		                        normal: {
		                            color: '#07DE9B',
		                            barBorderColor: '#0958FD',
				                    barBorderWidth: 2
		                        }
		                    },
		                    barWidth: '30%',
		                    data: this.barChart.tq
		                },
                		{
                			name: this.barChart.names[1],
                    		type: 'bar',
                    		stack:'sum',
                    		data: this.barChart.bq,
                    		barWidth: '30%',
                    		color: ['#0958FD'],
                    		itemStyle: {
                        		normal: {
                            		color: '#0958FD'
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
	.rightBoxBase {
		margin-left:$box-distince;
		margin-top:$box-distince;
		.title{
			cursor: pointer;
		}
		.barCharts {
			height: 1.41rem;
			width:4.20rem;
		}
	}
</style>