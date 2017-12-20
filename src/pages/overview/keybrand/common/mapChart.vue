<template>
	<div ref="mapchart" class="mapchart">
	</div>
</template>

<script>
	import echarts from 'echarts';
	import shanxi_geoJson_data from 'static/js/map.js';

	export default {
		props: {
			chartData: Object //这样可以指定传入的类型，如果类型不对，会警告
		},
		data() {
			return {
			
			}
		},
		methods: {
			initMap: function(){
				var that = this;
				var option = {
					visualMap: {
						type: 'piecewise', 
						left: '5%',
						top:'60%',
						showLabel:true,
						text:[that.chartData.chartName],
						calculable: true,
						splitNumber:5,
						pieces: [	
							{min: that.chartData.splitData[0]},
							{min: that.chartData.splitData[1], max: parseFloat(that.chartData.splitData[0]-0.01)},
							{min: that.chartData.splitData[2], max: parseFloat(that.chartData.splitData[1]-0.01)},
							{min: that.chartData.splitData[3], max: parseFloat(that.chartData.splitData[2]-0.01)},
							{max: that.chartData.splitData[3]}
						],
						inverse:false,
						inRange: {
							symbol:'rect',
							color: ['rgb(195,231,247)','rgb(86,185,224)','rgb(65,143,205)','rgb(59,84,166)','rgb(27,70,172)']
						},
						textStyle:{
							color:"#ffffff"
						},
						orient:'vertical',
						formatter:function(value1,value2){
							var str = '';
							if(value1==that.chartData.splitData[0]){
								str = value1 + '%以上 ( '+that.chartData.comNum[0]+'家单位 )';
							}else if(value1==that.chartData.splitData[1]){
								str = '[' + value1 + '% , ' + that.chartData.splitData[0] + '% ) ( '+that.chartData.comNum[1]+'家单位 )';
							}else if(value1==that.chartData.splitData[2]){
								str = '[' + value1 + '% , ' + that.chartData.splitData[1] + '% ) ( '+that.chartData.comNum[2]+'家单位 )';
							}else if(value1==that.chartData.splitData[3]){
								str = '[' + value1 + '% , ' + that.chartData.splitData[2] + '% ) ( '+that.chartData.comNum[3]+'家单位 )';
							}else if(value2==that.chartData.splitData[3]){
								str =  value2 + '%以下 ( '+that.chartData.comNum[4]+'家单位 )';
							}
							return str; // 范围标签显示内容。
						}
					},
	                backgroundColor: 'rgba(0,0,0,0)',
	                tooltip: {
	                    trigger: 'item',	  
	                	show: true,
	                	formatter: '<big style="font-weight: bold;color:#2edbff">{b}</big><br />{a}：{c}%'
	                },
	                series: [
						{
							name: that.chartData.chartName,
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
									borderColor: '#2F2E58',
									areaColor: ['#2F2E58', '#0958FD', '#4FD3F9', '#36A9FA', '#07DE9B'],
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
							data:that.chartData.chartData
						}
					]
            	};
								
				echarts.registerMap('shanxi', shanxi_geoJson_data);
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.mapchart) || echarts.init(this.$refs.mapchart);
				chart.setOption(option);
				
				chart.on('click', function (params) {
				    that.$router.push({ path: '/brand/perform', query:{cityId: params.name}})
				});
			},
		},
		mounted() {
			this.initMap();
		},
		beforeDestory(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.mapchart {
		width: 100%;
		height: 100%;
	}
</style>