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
					'blueLine': [7302.32,8202.08,9812.43,10699.54,4864.65,1465.18,3148.17,5000.95,5863.92,6932.81,7377.06,7637.24,6402.16,4984.73,5939.87,6715.8,7514.21,5091.97,5702.7,7263.97,4795.86,4029.17,5407.53,4887.48,5318.44,5084.83,6483.91,6299.51,6073.85,6033.78,5804.82,6189.47,6415.37,6145.1,6171.36,6876.17,6582.04,8256.29,7284.07,5406.88,5690.66,6519,7279.46,4548.74,6287.89,5384.43,6271.68,6692.29,6494.76,6795.67,6681.01,5683.75],
					'greenLine': [6850.46,10913.4,10744,3699.33,1782.2,4005.07,4439.03,6908.78,4957.13,5888.75,5093.01,7553.8,6924.7,3745.23,5880.18,5945.04,8285.71,3828.13,5267.24,5339.26,5437.07]
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
                				return "第 " + (parseInt(value[0].dataIndex)+1) + " 周<br />2016年：" + value[0].data +"条"+ "<br />2017年：" + value[1].data+ "条";
                			} else if (value.length ==1) {
                				return "第 " + (parseInt(value[0].dataIndex)+1) + " 周<br />2016年：" + value[0].data + "条";
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
		                    min: 1200,
		                    max: 11200,
		                    interval: 2000,
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