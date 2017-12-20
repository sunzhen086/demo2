<template>
    <div ref="rightlinechart" class="rightlinechart">
    </div>
</template>

<script>
	import echarts from 'echarts';
	
	export default {
		props: {
    		chartData: Array
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
						}
					},
					color:['#efb90f','#f94800','#22efbd','#005eff'],
					legend: {
						data:['一类','中华(软)','中华(硬)','芙蓉王(硬)'],
						textStyle:{
							color:"#ffffff"
						},
						x: 'right',
						y: 'top'
					},
					grid:{
						left: 40,
						right: 0,
						top: 30,
						bottom: 60
					},
					xAxis : {
						type : 'category',
						data : that.chartData[1],
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
							
					},
					yAxis : {
				        type: 'value',
				        name: '',
				        min: that.chartData[6][0],
				        max: that.chartData[6][1],
				        interval: that.chartData[6][2],
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
				          	show: false,
				          	lineStyle:{
				            	color:'#ffffff'
				            }
				        }
				    },
					series :[
						{
				            name:'一类',
				            type:'line',
				            color: ['#2edbff'],
				            smooth: true,
							symbol: 'circle',
				            data:that.chartData[2]
				        },
						{
				            name:'中华(软)',
				            type:'line',
				            color: ['#f0833a'],
				            smooth: true,
							symbol: 'circle',
				            data:that.chartData[3]
				        },
				        {
				            name:'中华(硬)',
				            type:'line',
				            color: ['#00cc00'],
				            smooth: true,
							symbol: 'circle',
				            data:that.chartData[4]
				        },
				        {
				            name:'芙蓉王(硬)',
				            type:'line',
				            color: ['#ffff00'],
				            smooth: true,
							symbol: 'circle',
				            data:that.chartData[5]
				        }
					],
					
				};
				let chart = this.chart = echarts.init(this.$refs.rightlinechart);
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
	.rightlinechart{
		width: 100%;
	    height: 3rem;
	    float: left;
	    /*-webkit-tap-highlight-color: transparent;*/
	    /*user-select: none;*/
	    /*position: relative;*/
	    /*background: transparent;*/
	}
</style>