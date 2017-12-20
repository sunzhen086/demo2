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
					'blueLine': [29406,28861,28661,27462,19924,12847,19045,26151,27497,27775,28058,27928,27403,
										26904,28009,27975,27679,26903,27230,27695,27410,27084,27862,28121,28186,27766,
										28432,28585,28310,28257,27991,28267,28120,28424,28061,28467,27882,28856,24377,
										25324,27403,28029,27914,25993,27546,27332,27533,27522,27797,27927,27799,25064],
					'greenLine': [28011,28852,27983,14131,11869,26057,27598,28412,27589,28119,28119,28558,27942,21650,28730,28580,28822,21651,28537,28375,28679]
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
                				return "第 " + (parseInt(value[0].dataIndex)+1) + " 周<br />2016年：" + value[0].data+"户"+ "<br />2017年：" + value[1].data+"户";
                			} else if (value.length ==1) {
                				return "第 " + (parseInt(value[0].dataIndex)+1) + " 周<br />2016年：" + value[0].data+"户";
                			}
                		}
            		},
            		grid: {
            			top: '10%',
                		left: '3%',
                		right: '5%',
                		bottom: '12%',
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
		                    min: 10000,
		                    max: 30000,
		                    interval: 5000,
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