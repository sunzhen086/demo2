<template>
	<div class="chart" ref="chart"></div>
</template>

<script>
	import echarts from 'echarts';
	export default {
		computed: {
			barData:function(){
				var data = this.lineData;
				for(var i=0;i<data.length;i++){
					var tmp = data[i];
					var itemStyle = {
						normal:{
							color:this.numColor[tmp.value-1]
						}
					}
					tmp.itemStyle = itemStyle;
					tmp.symbolSize = ['60%','100%'];
					//倒立
					tmp.value = this.sum - parseInt(tmp.value);
					data[i] = tmp;
				}
				return data;
			}
		},
		data() {
			return {
				xData:[
					'2017年1月','2017年2月','2017年3月','2017年4月','2017年5月','2017年6月'
				],
				yData:[
					{max:11,min:1}
				],
				sum:12,
				numColor: [
					'#4cb050','#8bc24a','#2196f3','#00bbd4','#673bb7',
					'#9c28b1','#fec107','#ffeb3c','#f54337','#e91d62'
				],
				lineData:[
					{
						value:6,
					},
					{
						value:3,
					},
					{
						value:4,
					},
					{
						value:2,
					},
					{
						value:2,
					},
					{
						value:1,
					}
				],
			}
		},
		methods: {
			drawChart: function() {
				var $this = this;
				var option = {
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'none'
				        },
				        formatter: function (params) {
				            return params[0].name + ' : 第 ' + ($this.sum - parseInt(params[0].value)) + " 名";
				        }
				    },
				    grid:{
				    	top:'12%',
				    	left:'5%',
				    	right:'3%',
				    	bottom:'15%'
				    },
				    xAxis: {
				        data: this.xData,
				        axisTick: {show: false},
				        axisLine: {show: false},
				        axisLabel: {
				            textStyle: {
				                color: '#fff'
				            }
				        }
				    },
				    yAxis: {
				        type: 'value',
						min:this.yData[0]['min'],
						max:this.yData[0]['max'],
						interval:2,
						position: 'left',
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							},
						},
						axisLabel: {
							textStyle: {
								color: '#fff'
							},
							formatter:function(param){
								return ($this.sum-parseInt(param));
							}
						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: false,
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						},
						//inverse:true
				    },
				    series: [{
				        name: '排名',
				        type: 'pictorialBar',
				        barCategoryGap: '-130%',
				        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
				        label:{
							normal:{
								show:true,
								position:'top',
								textStyle:{
									fontSize:16
								},
								formatter:function(param){
									return '第 '+($this.sum - parseInt(param.value))+' 名'
								}
							}
						},
				        itemStyle: {
				            normal: {
				                opacity: 1
				            },
				            emphasis: {
				                opacity: 1
				            }
				        },
				        data: this.barData,
				        z: 10
				    }]
				};
				let chart = this.chart = echarts.init(this.$refs.chart);
				chart.setOption(option);
			}
		},
		mounted() {
			this.drawChart();
		},
		beforeDestroy(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';
	.chart {
		height: 2rem;
		width: 6.3rem;
	}
</style>