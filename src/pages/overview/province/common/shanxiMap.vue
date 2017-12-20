<template>
	<div>
		<div class="shanxiMap" ref="mapchart"></div>
	</div>
</template>

<script>
	import echarts from 'echarts';
	import shanxi_geoJson_data from 'static/js/map.js';
	
	export default {
		data() {
			return {
				chartName: '销售同比',
				chartData: [
					{name: '榆林市', value: 5.5},
					{name: '延安市', value: 2.4},
					{name: '咸阳市', value: 6.1},
					{name: '铜川市', value: -8.1},
					{name: '渭南市', value: -1.5},
					{name: '宝鸡市', value: -6.4},
					{name: '西安市', value: -11.2},
					{name: '商洛市', value: -3.2},
					{name: '汉中市', value: -12.5},
					{name: '安康市', value: -6.7},
					{name: '杨凌示范区', value: 5.1}
				]
			}
		},
		methods: {
			initMap: function(){
				var chart = this.chart = echarts.init(this.$refs.mapchart);
				var option = {
					visualMap: {
						type: 'piecewise', 
						left: '5%',
						top:'60%',
						showLabel:true,
						text:['销量同比'],
						calculable: true,
						splitNumber:5,
						pieces: [
							{min: 5},//7
						    {min: 0, max: 5},//8
						    {min: -5, max: 0},//8
						    {min: -10, max: -5},//6
						    {max: -10},//4
						],
						inverse:false,
						inRange: {
							symbol:'rect',
							color: ['rgb(195,231,247)','rgb(86,185,224)','rgb(65,143,205)','rgb(59,84,166)','rgb(27,70,172)'],
						},
						textStyle:{
							color:"#ffffff"
						},
						orient:'vertical',
						formatter:function(value1,value2){
							var str = '';
							if(value1==5){
								str = value1 + '%以上 ( 3家单位 )';
							}else if(value1==0){
								str = '[' + value1 + '% , ' + value2 + '% ) ( 1家单位 )';
							}else if(value1==-5){
								str = '[' + value1 + '% , ' + value2 + '% ) ( 2家单位 )';
							}else if(value1==-10){
								str = '[' + value1 + '% , ' + value2 + '% ) ( 3家单位 )';
							}else if(value2==-10){
								str =  value2 + '%以下 ( 2家单位 )';
							}
							return str; // 范围标签显示内容。
						}
					},
	                backgroundColor: 'rgba(0,0,0,0)',
	                tooltip: {
	                    trigger: 'item'
	                },
	                tooltip: {
	                	show: true,
	                	formatter: '<big style="font-weight: bold;color:#2edbff">{b}</big><br />{a}：{c}%'
//	                	formatter: '{b}<br />{a}：{c}%',
	                },
	                series: [
						{
							name: this.chartName,
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
							data:this.chartData,
						}
					]
            	};
								
				echarts.registerMap('shanxi', shanxi_geoJson_data);
				chart.setOption(option);
				var $this = this;
				chart.on('click',function(param){
					$this.$router.push({path:'/overview/city'});
				});
			},
		},
		mounted() {
			this.initMap();
		},
		beforeDestroy() {
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.shanxiMap {
		width: 4.6rem;
		height: 3.6rem;
	}
</style>