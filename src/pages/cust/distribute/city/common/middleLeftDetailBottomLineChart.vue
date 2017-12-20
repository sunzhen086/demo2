<template>
	<div class="chart" ref="chart">

	</div>
</template>

<script>
	
	import echarts from 'echarts';
	
	export default {
		data() {
			return {
				
//				validValue: 30159,
//				ordersValue: 30825,
//				diffValue: 400,
				validValue: '30,159',
				ordersValue: '30,825',
				diffValue: '400',
				data: {
					'weeks': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15',
									'16','17','18','19','20','21','22','23','24','25','26','27','28','29','30',
									'31','32','33','34','35','36','37','38','39','40','41','42','43','44','45',
									'46','47','48','49','50','51','52'],
					'blueLine': [103.45,99.25,107.43,109.83,121.32,113.82,111.44,104.05,100.08,100.42,96.65,97.61,101.77,111.21,111.59,113.73,108.61,108.42,124.46,112.6,115.69,117.08,108.35,107.15,107.94,105.18,106.75,104.46,106.05,103.61,106.52,105.21,104.78,104.44,108.38,111.67,111.05,100.73,104.32,108.04,105.54,106.61,108.98,110.29,112.32,110.66,107.62,111.09,112.96,112.4,108.79,105.05],
					'greenLine': [110.69,102.69,106.31,118.82,100.18,99.83,101.85,98.79,102.16,102.37,99.06,93.52,92.7,106.77,104.01,105.82,104.2,106.14,111.14,112.52,112.91]
				}
			}
		},
		components: {
			
		},
		methods: {
			tabClick:function(curTab){
				console.log(curTab);
			},
			initLine: function(){
        		// 基于准备好的dom，初始化echarts实例
        		var myChart = this.myChart = echarts.init(this.$refs.chart);
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
                		formatter: function(value) {
                			if(value.length == 2) {
                				return "第 " + (parseInt(value[0].dataIndex)+1) + " 周<br />2016年：" + value[0].data +"元"+ "<br />2017年：" + value[1].data+"元";
                			} else if (value.length ==1) {
                				return "第 " + (parseInt(value[0].dataIndex)+1) + " 周<br />2016年：" + value[0].data+"元";
                			}
                		}
            		},
            		grid: {
            			top: '10%',
                		left: '3%',
                		right: '5%',
                		bottom: '10%',
                		containLabel: true
            		},
            		xAxis : [
                		{
                    		type : 'category',
                    		boundaryGap : false,
                    		data : this.data.weeks,
                    		splitNumber: 8,
                    		axisLabel: {
            					textStyle:{
                					color: 'white'
            					},
            					interval: 2
        					},
        					axisLine: {
        						show: false
        					},
        					axisTick: {
        						show: false
        					}
                		}
            		],
            		yAxis : [
                		{
		                    type : 'value',
		                    min: 85,
		                    max: 130,
		                    interval: 5,
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
            		color: ['#0958FD', '#07DE9B'],
            		series : [
                		{
                    		name: '',
                    		type: 'line',
                    		data: this.data.blueLine,
                    		lineStyle: {
                    			normal: {
                    				color: '#0958FD',
                    				width: 3
                    			}
                    		},
                    		symbol: 'circle',
                    		symbolSize: 7,
                    		smooth: true
                		},
                		{
                    		name: '',
                    		type: 'line',
                    		data: this.data.greenLine,
                    		lineStyle: {
                    			normal: {
                    				color: '#07DE9B',
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
		mounted() {
			this.initLine();
		},
		beforeDestroy() {
			this.myChart.dispose();
		}
	}
</script>

<style lang="scss" scoped>

	.chart {
		//margin-top: 0.3rem;
		//margin-bottom: 0.3rem;
		height: 1.7rem;
	}

</style>