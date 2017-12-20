<template>
	<div class="rightPanel">
		<div class="rightTop">
			<box-base class="rightBoxBase">
					<div slot="box-title">各价类卷烟销量对比图</div>
					<link-btn class="topRightMenu" @on-click="showPriceTypeDetail"></link-btn>
				<div class="content">
					<div ref="barChart1" class="barCharts"></div>
				</div>
			</box-base>
		</div>
		<div class="rightBottom">
			<box-base class="rightBoxBase">
					<div slot="box-title">各类别卷烟销量对比图</div>
					<link-btn class="topRightMenu" @on-click="showTypeDetail"></link-btn>
				<div class="content">
					<div ref="barChart2" class="barCharts"></div>
				</div>
			</box-base>
		</div>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import linkBtn from 'components/detailbutton/link-button.vue';
	import echarts from 'echarts';
	
	export default {
		data() {
			return {
				barChart1: {
					'category': ['一类', '二类', '三类', '四类', '五类'],
					'tq': [29.1504, 16.2458, 38.5978, 50.2147, 10.0024],
					'bq': [39.8754, 12.8756, 51.2482, 40.2579, 13.4582],
					'names': ['本期', '同期']
				},
				barChart2: {
					'category': ['重点品牌', '地产烟', '低焦油', '细支烟'],
					'tq': [72.5964, 43.5765, 98.6765, 124.8975],
					'bq': [99.5751, 36.2458, 135.4876, 100.2459],
					'names': ['本期', '同期']
				}
			}
		},
		components: {
			boxBase,
			linkBtn
		},
		methods: {
			initBarChart1: function() {
    		    var myChart1 = this.myChart1 = echarts.init(this.$refs.barChart1);
        		let option = {
            		grid: {
            			show: false,
            			top: '22%',
                		left: '5%',
                		right: '8%',
                		bottom: '0%',
                		containLabel: true
            		},
            		legend: {
            			show: true,
		                data: this.barChart1.names,
		                right: '8%',
		                top: '-2%',
		                textStyle: {
		                	color: '#fff'
		                }
		            },
		            tooltip: {
		            	show: true,
		            	formatter: "{a}：{c} 万箱"
		            },
            		xAxis: {
            			show: true,
                		type: 'category',
                		data: this.barChart1.category,
                		axisLine: {
        					show: true,
        					lineStyle: {
        						color: 'white'
        					}
        				}
            		},
            		yAxis: {
            			name: '单位：万箱',
            			type: 'value',
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
                			name: '本期',
                    		type: 'bar',
                    		data: this.barChart1.bq,
                    		barWidth: 15,
                    		itemStyle: {
                        		normal: {
                            		color: '#07DE9B'
                        		}
                    		}
                		},
                		{
            				name: '同期',
		                    type: 'bar',
		                    itemStyle: {
		                        normal: {
		                            color: '#0958FD'
		                        }
		                    },
		                    barWidth: 15,
		                    data: this.barChart1.tq
		                }
            		]
        		};
        		myChart1.setOption(option);
			},
			initBarChart2: function() {
				var myChart2 = this.myChart2 = echarts.init(this.$refs.barChart2);
        		let option = {
            		grid: {
            			show: false,
            			top: '22%',
                		left: '5%',
                		right: '8%',
                		bottom: '1%',
                		containLabel: true
            		},
            		legend: {
            			show: true,
		                data: this.barChart2.names,
		                right: '8%',
		                top: '-2%',
		                textStyle: {
		                	color: '#fff'
		                }
		            },
		            tooltip: {
		            	show: true,
		            	formatter: "{a}：{c} 万箱"
		            },
            		xAxis: {
            			show: true,
                		type: 'category',
                		data: this.barChart2.category,
                		axisLine: {
        					show: true,
        					lineStyle: {
        						color: 'white'
        					}
        				}
            		},
            		yAxis: {
            			name: '单位：万箱',
            			type: 'value',
            			axisLabel: {
            				margin: 10,
            				textStyle:{
                				color: 'white'
            				}
        				},
        				splitNumber: 3,
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
                			name: '本期',
                    		type: 'bar',
                    		data: this.barChart2.bq,
                    		barWidth: 15,
                    		itemStyle: {
                        		normal: {
                            		color: '#07DE9B'
                        		}
                    		}
                		},
                		{
            				name: '同期',
		                    type: 'bar',
		                    itemStyle: {
		                        normal: {
		                            color: '#0958FD'
		                        }
		                    },
		                    barWidth: 15,
		                    data: this.barChart2.tq
		                }
            		]
        		};
        		myChart2.setOption(option);
			},
			showPriceTypeDetail:function(){
    			this.$router.push({ path: '/overview/cityPriceTypeInfo'});
    		},
    		showTypeDetail:function(){
    			this.$router.push({ path: '/overview/cityTypeInfo'});
    		}
		},
		mounted() {
			this.initBarChart1();
			this.initBarChart2();
		},
		beforeDestroy() {
			this.myChart1.dispose();
			this.myChart2.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.rightPanel {
		width: 4.92rem;
		height: 4.24rem;
		
		.rightTop {
			width: inherit;
		}
		
		.rightBottom {
			width: inherit;
			margin-top: 0.14rem;
		}
		
		.rightBoxBase {
			width: inherit;
			height: 2.03rem;
			
			.barCharts {
				height: 1.6rem;
			}
		}
		.topRightMenu {
			float: right;
			margin-top: -0.2rem;
		}
	}
</style>