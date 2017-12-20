<template>
	<div class="rightBar" ref="barChart"></div>
</template>

<script>
	import echarts from 'echarts';
	
	export default {
		data() {
			return {
				xData:{},
				yData:['西安','渭南','咸阳','汉中','安康','榆林','宝鸡','商洛','延安','铜川','杨凌'], //11
				barData:[3.0159, 1.4953, 1.4714, 1.2957, 1.1982, 1.0903,1.0210,0.8543,0.8131,0.2383,0.0662],
				max:3,
				min:0
			}
		},
		methods: {
			initBar:function(){
				var option = {
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'none'
				        },
				        formatter:'{b}<br/>{a} : {c}万户'
				    },
				    grid: {
				        left: '8%',
				        right: '10%',
				        bottom: '5%',
				        containLabel: true
				    },
				    xAxis: {
				    	name:'单位：万户',
				    	nameLocation:'middle',
				    	nameGap:25,
				    	min:this.min,
				    	max:this.max,
				        type: 'value',
				        boundaryGap: [0, 0.01],
				        axisLine:{
				        	show:false,
				        	lineStyle:{
				        		color:'#fff'
				        	}
				        },
				        axisTick:{
				        	show:false
				        },
				        splitLine:{
				        	lineStyle:{
				        		color: '#fff', //y轴分割线颜色
								opacity: 0.2
				        	}
				        }
				    },
				    yAxis: {
				        type: 'category',
				        inverse:true,
				        axisLine:{
				        	show:false
				        },
				        axisTick:{
				        	show:false
				        },
				        axisLabel:{
				        	textStyle:{
				        		color:'#fff'
				        	}
				        },
				        data: this.yData
				    },
				    series: [
				        {
				            name: '订货户数',
				            type: 'bar',
				            itemStyle:{
				            	normal:{
				            		color:'#22eebd'
				            	}
				            },
				            barWidth:'30%',
				            data: this.barData
				        }
				    ]
				};
				let chart = this.chart = echarts.init(this.$refs.barChart);
				chart.setOption(option);
			}
		},
		mounted() {
			this.initBar();
		},
		beforeDestroy(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.rightBar{
		width: 2rem;
		height: 3.9rem;
	}
</style>