<template>
	<div class="leftMap" ref="mapchart"></div>
</template>

<script>
	import echarts from 'echarts';
	import shanxi_geoJson_data from 'static/js/map.js';
	
	export default {
		data() {
			return {
				chartData: [
					{name: '榆林市', value: 1.06},
					{name: '延安市', value: -3.05},
					{name: '咸阳市', value: -1.57},
					{name: '铜川市', value: 7.65},
					{name: '渭南市', value: -6.49},
					{name: '宝鸡市', value: -1.45},
					{name: '西安市', value: 1.29},
					{name: '商洛市', value: 0.84},
					{name: '汉中市', value: -0.68},
					{name: '安康市', value: -0.97},
					{name: '杨凌示范区', value: -1.57}
				]
			}
		},
		methods: {
			initMap: function(){
				let chart = this.chart = echarts.init(this.$refs.mapchart);
				var option = {
					visualMap: {
						type: 'piecewise', 
						left: '2%',
						top:'55%',
						text:['订货户数同比'],           
						showLabel:true,
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
							//color: ['rgb(47,46,88)','rgb(9,88,253)', 'rgb(79,212,247)','rgb(54,169,250)','rgb(7,222,155)'],
							//color: ['rgb(63,81,181)','rgb(86,119,252)', 'rgb(103,59,183)','rgb(3,169,243)','rgb(0,188,213)'],
							color: ['rgb(195,231,247)','rgb(86,185,224)', 'rgb(65,143,205)','rgb(59,84,166)','rgb(27,70,172)'],
						},
						itemWidth:30,
						itemHeight:20,
						textStyle:{
							color:"#ffffff"
						},
						orient:'vertical',
						formatter:function(value1,value2){
							var str = '';
							if(value1==5){
								str = value1 + '%以上';
							}else if(value1==0){
								str = '[' + value1 + '% , ' + value2 + '% )';
							}else if(value1==-5){
								str = '[' + value1 + '% , ' + value2 + '% )';
							}else if(value1==-10){
								str = '[' + value1 + '% , ' + value2 + '% )';
							}else if(value2==-10){
								str =  value2 + '%以下';
							}
							return str; // 范围标签显示内容。
						}
					},
	                tooltip: {
	                	trigger: 'item',
	                	formatter: '<big style="font-weight: bold;color:#2edbff">{b}</big><br />{a}：{c}%'
//	                	formatter: '{b} <br/> {a}：{c}%',
	                },
	                series: [
						{
							name:'订货户数同比',
							type: 'map',
							top: '12%',
							left: '40%',
							mapType: 'shanxi',
							zoom: 1.1,
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
									borderWidth:0,
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
							data:this.chartData,
						}
					]
            	};
								
				echarts.registerMap('shanxi', shanxi_geoJson_data);
				chart.setOption(option);
				var $this = this;
				chart.on('click', function (params) {
				    //console.log(params);
				    $this.$router.push({ path: '/cust/citydistribute' })
				});
			}
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
	.leftMap {
		width: 3.2rem;
		height: 3.9rem;
	}
</style>