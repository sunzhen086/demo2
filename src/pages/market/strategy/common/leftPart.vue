<template>
	<box-base class="main-left">
		<div slot="box-title">
			<p>货源投放分析</p>
		</div>
		<div slot="box-extend">
			<tab-base :option=paneOption @tab-click="tabClick" class="tabClass"></tab-base>	
		</div>
		<div class="content">
			<div class="note">
				<div>紧俏货源投放比较均衡</div>
				<div style="margin-top: 0.1rem;">有<span class="red">8</span>家单位紧俏货源投放面大于<span class="green">60%</span></div>
			</div>
			<div class="leftMap" ref="mapChart"></div>
		</div>
	</box-base>
</template>

<script>
	import echarts from 'echarts';
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import shanxi_geoJson_data from 'static/js/map.js';
	
	export default {
		data() {
			return {
				chartData: [],
				chartData0: {
					name:'投放面',
					pieces:[2,0,1,4,4],
					data:[
						{name: '榆林市', value: 77},
						{name: '延安市', value: 56},
						{name: '咸阳市', value: 55},
						{name: '铜川市', value: 85},
						{name: '渭南市', value: 15},
						{name: '宝鸡市', value: 54},
						{name: '西安市', value: 75},
						{name: '商洛市', value: 76},
						{name: '汉中市', value: 35},
						{name: '安康市', value: 36},
						{name: '杨凌示范区', value: 66}
					]
				},
				chartData1: {
					name:'投放集中度',
					pieces:[0,0,2,6,3],
					data:[
						{name: '榆林市', value: 57},
						{name: '延安市', value: 66},
						{name: '咸阳市', value: 75},
						{name: '铜川市', value: 85},
						{name: '渭南市', value: 95},
						{name: '宝鸡市', value: 64},
						{name: '西安市', value: 75},
						{name: '商洛市', value: 76},
						{name: '汉中市', value: 45},
						{name: '安康市', value: 66},
						{name: '杨凌示范区', value: 56}
					]
				},
				paneOption: {
					data:[
						{
							key: 'chartData0',
							text: '投放面'
						},
						{
							key: 'chartData1',
							text: '投放集中度'
						}
					],
					activePane:'chartData0'
				},
			}
		},
		components: {
			boxBase,
			tabBase
		},
		methods: {
			tabClick:function(curTab){
				this.initMap(curTab);
			},
			initMap: function(curTab){
				this.chartData = this[curTab];
				var $this = this;
				let chart = this.chart = echarts.init(this.$refs.mapChart);
				var option = {
					visualMap: {
						type: 'piecewise', 
						left: '0%',
						top:'75%',         
						showLabel:true,
						calculable: true,
						splitNumber:5,
						pieces: [
							{min: 80},//7
						    {min: 20, max: 40},//8
						    {min: 40, max: 60},//8
						    {min: 60, max: 80},//6
						    {max: 20},//4
						],
						inverse:false,
						inRange: {
							symbol:'rect',
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
							if(value1==80){
								str = value1 + '%以上  ( ' + $this.chartData.pieces[4] + '家单位 )';
							}else if(value1==60){
								str = '[' + value1 + '% , ' + value2 + '% )  ( ' + $this.chartData.pieces[3] + '家单位 )';
							}else if(value1==40){
								str = '[' + value1 + '% , ' + value2 + '% )  ( ' + $this.chartData.pieces[2] + '家单位 )';
							}else if(value1==20){
								str = '[' + value1 + '% , ' + value2 + '% )  ( ' + $this.chartData.pieces[1] + '家单位 )';
							}else if(value2==20){
								str =  value2 + '%以下 ( ' + $this.chartData.pieces[0] + '家单位 )';
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
							name:this.chartData.name,
							type: 'map',
							top: '4%',
							left: '24%',
							mapType: 'shanxi',
							zoom: 0.8,
							aspectScale:0.8,
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
							data:this.chartData.data,
						}
					]
            	};
								
				echarts.registerMap('shanxi', shanxi_geoJson_data);
				chart.setOption(option);
				chart.on('click', function(param) {
					if(param.name=='西安市') {
						$this.$emit('changeCity','西安');
					} else if(param.name=='榆林市') {
						$this.$emit('changeCity','榆林');
					}
				});
			}
		},
		mounted() {
			this.initMap('chartData0');
		},
		beforeDestroy(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';
	.main-left{
		/*background:#0e2e69;
		border-top:4px solid #23559c;*/
		/*margin-bottom:$box-distince;*/
		.title{
			overflow: hidden;
		}
		.content{
			overflow:hidden;
			.note{
				background-color: rgb(36,62,136);
				margin-top:0.1rem;
				font-size: 0.14rem;
				line-height: 0.2rem;
				padding:0.10rem;
				position:absolute;
				span{
					font-size: 0.2rem;
					font-weight: bold;
					margin: 0 0.05rem 0 0.01rem;
				}
				.red{
					color: $red;
				}
				.green{
					color: $green;
				}
				.orange{
					color: $orange;
				}
			}
			.leftMap {
				width: 3.8rem;
				height: 5.65rem;
			}
		}
	}
</style>