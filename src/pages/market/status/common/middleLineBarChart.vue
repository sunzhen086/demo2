<template>
    <div ref="middleLinebarchart" class="middleLinebarchart">
    </div>
</template>

<script>
	import echarts from 'echarts';
	
	export default {
		props: {
    		chartData: Array,
    		yAxisName: String
		},
		data() {
			return {
			
			}
		},
		methods:{
			drawLineBar : function(){
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
						position: function (pos, params, dom, rect, size) {
						      // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
						    var obj = {top: 10};
						    obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
						    return obj;
						}
					},
					color:['#22eebd','#015fff','#efb90f'],
					legend: {
						data:['本期','同期','环比'],
						textStyle:{
							color:"#ffffff"
						},
						x: 'right'
					},
					grid:{
						left:'6%',
						right:'6%',
						top: '10%',
						bottom: '42%'
					},
					xAxis : [
						{
							type : 'category',
							data : that.chartData[0],
							axisTick: {
								show: false //显示分割点
							},
							axisLine: {
								lineStyle: {
									color: '#fff', //x轴颜色
									opacity: 0.2
								}
							},
							axisLabel:{
								interval: 0,
								textStyle:{
									color:'#ffffff'
								}
							}
							
						}
					],
					yAxis : [
						{
				            type: 'value',
				            name: that.yAxisName,
				            min: that.chartData[4][0],
				            max: that.chartData[4][1],
				            interval: that.chartData[4][2],
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
								textStyle:{
									color:'#ffffff'
								}
				            },
				            axisLine:{
				            	show: false,
				            	lineStyle:{
				            		color:'#ffffff'
				            	}
				            }
				        },
						{
				            type: 'value',
				            name: '',
				            min: -5,
				            max: 5,
				            interval: 2,
				            splitLine : {
								show:false
							},
				            axisLabel: {
				                formatter: '{value}',
				                textStyle:{
									color:'#ffffff'
								}
				            },
				            axisLine:{
				            	show: false,
				            	lineStyle:{
				            		color:'#ffffff'
				            	}
				            }
				        }
					],
					series :[
						{
				            name:'本期',
				            type:'bar',
				            barWidth:10,
				            data:that.chartData[2]
				        },
						{
				            name:'同期',
				            type:'bar',
				            barWidth:10,
				            data:that.chartData[1]
				        },
				        {
				            name:'环比',
				            type:'line',
				            yAxisIndex: 1,
				            smooth: true,
							symbol: 'circle',
				            data:that.chartData[3]
				        }
					]
				};
				let chart = this.chart = echarts.init(this.$refs.middleLinebarchart);
				chart.setOption(option);
			}
		},
		mounted() {
			this.drawLineBar();
		},
		beforeDestroy(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.middleLinebarchart{
		width: 4.4rem;
	    height: 100%;
	    margin-top: 0.4rem;
	    /*-webkit-tap-highlight-color: transparent;*/
	    /*user-select: none;*/
	    /*position: relative;*/
	    /*background: transparent;*/
	}
</style>