<template>
    <div ref="linebarchart" class="linebarchart">
    </div>
</template>

<script>
	import echarts from 'echarts';
	
	export default {
		props: {
    		chartData: Array,
    		chartRuler: String
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
	                	formatter: '{b}<br/>'
	                				+'{a0}：{c0} '+ that.chartRuler+ '<br/>'
	                				+'{a1}：{c1} '+ that.chartRuler+ '<br/>'+'{a2}：{c2}% <br/>'
					},
					color:['#22eebd','#015fff','#efb90f'],
					legend: {
						data:['本期','同期','同比'],
						textStyle:{
							color:"#ffffff"
						},
						x: 'right'
					},
					grid:{
						left: 40,
						right: 30,
						bottom: 40
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
								rotate: 0,
								textStyle:{
									color:'#ffffff'
								},
								formatter:function(val){
									var str="";
									var month = val.substr(4,2);
									if(month == '07'){
										str=parseInt(month,10)+"月\n"+val.substr(0,4)+"年";
									}else if(month == '01'){
										str=parseInt(month,10)+"月\n"+val.substr(0,4)+"年";
									}else{
										str=parseInt(month,10)+"月";
									}								
									return str;
								}
							}
							
						}
					],
					yAxis : [
						{
				            type: 'value',
				            name: that.chartRuler,
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
				        },
						{
				            type: 'value',
				            name: '%',
				            min: -50,
				            max: 50,
				            interval: 10,
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
				            barWidth:15,
				            data:that.chartData[2]
				        },
						{
				            name:'同期',
				            type:'bar',
				            barWidth:15,
				            data:that.chartData[1]
				        },
				        {
				            name:'同比',
				            type:'line',
				            yAxisIndex: 1,
				            smooth: true,
							symbol: 'circle',
				            data:that.chartData[3]
				        }
					],
					
				};
				var chart = this.chart = echarts.init(this.$refs.linebarchart);
				chart.setOption(option);
			}
		},
		mounted() {
			this.drawLineBar();
		},
		beforeDestroy() {
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.linebarchart{
		width: 100%;
	    height: 3rem;
	    float: left;
	    /*-webkit-tap-highlight-color: transparent;*/
	    /*user-select: none;*/
	    /*position: relative;*/
	    /*background: transparent;*/
	}
</style>