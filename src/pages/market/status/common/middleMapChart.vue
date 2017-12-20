<template>
	<div>
		<div class="middleMapChart" ref="mapchart"></div>
	</div>
</template>

<script>
	import echarts from 'echarts';
	import shanxi_geoJson_data from 'static/js/map.js';
	
	export default {
		props: {
			chartData: Object
		
		},
		data() {
			return {
				
			}
		},
		methods: {
			initMap: function(){
				let chart = this.chart = echarts.init(this.$refs.mapchart);
				var self = this;
				var option = {
					visualMap: {
						type: 'piecewise', 
						showLabel: true,
						text: [self.chartData.title],
						calculable: true,
						pieces: self.chartData.pieces,
						inverse:true,
						inRange: {
							symbol:'rect',
							color: self.chartData.color,
						},
						textStyle:{
							color:"#ffffff"
						},
						orient:'vertical',
						formatter:function(value1,value2){
							var str = '';
							var m = 0;
							//这个方法写的还是有问题，无法灵活共用，后期再完善
							if(value1==100){
								for(var i = 0 ;i< self.chartData.mapChartData.length; i++){
									var value = self.chartData.mapChartData[i].value;
									if(value >= 100){
										m++;
									}
								}
								str = '紧，' + value1 + '以上 ( ' + m + '家单位 )';
							}else if(value1==95){
								for(var i = 0 ;i< self.chartData.mapChartData.length; i++){
									var value = self.chartData.mapChartData[i].value;
									if(value >= 95 && value < 100){
										m++;
									}
								}
								str = '稍紧，[' + value1 + ', ' + value2 + ' ) ( ' + m + '家单位 )';
							}else if(value1==85){
								for(var i = 0 ;i< self.chartData.mapChartData.length; i++){
									var value = self.chartData.mapChartData[i].value;
									if(value >= 85 && value < 95){
										m++;
									}
								}
								str = '平衡，[' + value1 + ', ' + value2 + ' ) ( ' + m + '家单位 )';
							}else if(value1==80){
								for(var i = 0 ;i< self.chartData.mapChartData.length; i++){
									var value = self.chartData.mapChartData[i].value;
									if(value >= 80 && value < 85){
										m++;
									}
								}
								str = '稍松，[' + value1 + ', ' + value2 + ' ) ( ' + m + '家单位 )';
							}else if(value2==80){
								for(var i = 0 ;i< self.chartData.mapChartData.length; i++){
									var value = self.chartData.mapChartData[i].value;
									if(value < 80){
										m++;
									}
								}
								str =  '松，' + value2 + '以下 ( ' + m + '家单位 )';
							}
							return str; // 范围标签显示内容。
						}
					},
	                backgroundColor: 'rgba(0,0,0,0)',
	                tooltip: {
	                	trigger: 'item',
	                	show: true,
	                	formatter: '<big style="font-weight: bold;color:#2edbff">{b}</big></b><br />'+self.chartData.title+'：{c}'
	                },
	                series: [
						{
							type: 'map',
							top: 38,
							left: 245,
							mapType: 'shanxi',
							zoom: 1.2,
							label: {
								normal: {
									show: false
								},
								emphasis: {
									show: false
								}
							},
							itemStyle: {
								normal: {
									borderColor:'rgba(0,0,0,0.5)',
									borderWidth: 1,
									areaColor: '#389BB7',
								},
								emphasis: {
									areaColor: '',
									borderWidth: 0,
									borderColor:'#fff',
									shadowColor: 'rgba(0, 0, 0, 0.5)',
    								shadowBlur: 20,
									shadowOffsetX:1,
									shadowOffsetY:1
								}
							},
							animation: false,
							data:self.chartData.mapChartData,
						}
					]
            	};
								
				echarts.registerMap('shanxi', shanxi_geoJson_data);
				chart.setOption(option);
				var $this = this;
				chart.on('click', function (params) {
				    //console.log(params.name);
				    $this.$router.push({ path: '/market/statuscity', query:{cityId: params.name}})
				});
			},
			
		},
		mounted() {
			this.initMap();
		},
		beforeDestroy(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.middleMapChart {
		width: 4.6rem;
		height: 3.8rem;
	}
	.mapCity {
		color: #2edbff;
	}
</style>