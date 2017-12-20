<template>
    <div ref="leftboxchart" class="leftboxchart">
    </div>
</template>

<script>
	import echarts from 'echarts';
	
	export default {
		props: {
    		chartData: Array,
    		unit: String
		},
		data() {
			return {
			
			}
		},
		methods:{
			drawLine : function(){
				var that = this;
				var option = {
					tooltip : {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						},
//						formatter: '{b} 月<br/>'+'{a0}：{c0} <br/>'+'{a1}：{c1} <br/>'
					},
					color:['#22eebd','#005eff'],
					legend: {
						data:[that.chartData[0][0],that.chartData[0][1]],
						textStyle:{
							color:"#ffffff"
						},
						x: 'right',
						y: 'top'
						
					},
					grid:{
						left: 30,
						right: 10,
						top: 22,
						bottom: 60
						
					},
					xAxis : [
						{
							type : 'category',
							nameGap: 10,
							data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
							axisTick: {
								show: false //显示分割点
							},
							axisLine: {
								lineStyle: {
									color: '#fff', //x轴颜色
									opacity: 0.2
								}
							},
				            axisLabel: {
				            	textStyle: {
				            		color:'#ffffff'
				            	},
				            	formatter:function(val){
									var str="";
									var str = val.substr(0, val.length-1);
													
									return str;
								}
				            }
							
						}
					],
					yAxis : [
						{
				            type: 'value',
				            name: that.unit,
				            nameGap: 10,
				            min: that.chartData[3][0],
				            max: that.chartData[3][1],
				            interval: that.chartData[3][2],
				            axisTick: {
								show: false //显示分割点
							},
				            splitLine: {
								show: true,
								lineStyle: {
									color: '#fff', //y轴分割线颜色
									opacity: 0.2
								}
							},
				            axisLabel: {
				                formatter: '{value}',
				                rotate: 0,
								textStyle:{
									color:'#ffffff'
								}
				            },
				            axisLine:{
				            	show: false, //是否显示y轴的线
				            	lineStyle:{
				            		color:'#ffffff'
				            	}
				            }
				        }
					],
					series :[
						{
				            name:that.chartData[0][0],
				            type:'line',
				            smooth: true,
							symbol: 'circle',
				            data:that.chartData[1]
				        },
						{
				            name:that.chartData[0][1],
				            type:'line',
				            smooth: true,
							symbol: 'circle',
				            data:that.chartData[2]
				        }
					]
				};
				let chart = this.chart = echarts.init(this.$refs.leftboxchart);
				chart.setOption(option);
			}
		},
		mounted() {
			this.drawLine();
		},
		beforeDestroy(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.leftboxchart{
		width: 100%;
	    height: 1.4rem;
	    /*float: left;*/
	    /*-webkit-tap-highlight-color: transparent;*/
	    /*user-select: none;*/
	    /*position: relative;*/
	    /*background: transparent;*/
	}
</style>