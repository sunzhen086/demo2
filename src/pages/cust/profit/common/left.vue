<template>
	<div class="leftPanel">
		<box-base class="leftBoxBase">
			<div slot="box-title">各地市户均毛利率</div>
			<div slot="box-extend">
				<detail-btn  @on-click="tableShowHide"></detail-btn> 
				<!--<div class="changeBtn">
					<div @click="tableShowHide" class="tableBtn Btn" :class="{active:this.showTable===1}" ></div>
				</div>-->
			</div>
			<div class="content">
				<div class="tipPanel">
					2017 年 5 月份全省户均毛利率 <span class="orangeText">{{tipData.profit}}%</span><br  />
					比同期上升 <span class="greenText">{{tipData.up}}</span> 个百分点
				</div>
				<div class="mapChart" ref="mapChart"></div>
				<div class="barChart" ref="barChart"></div>
			</div>
		</box-base>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import detailBtn from 'components/detailbutton/detail-button.vue';
	
	import echarts from 'echarts';
	import shanxi_geoJson_data from 'static/js/map.js';
	
	export default {
		data() {
			return {
				tipData: {
					'profit': 7.95,
					'up': 0.77
				},
				chartName: '同比增幅',
				chartData: [
					{name: '榆林市', value: -10.2},
					{name: '延安市', value: -6.5},
					{name: '咸阳市', value: -1.9},
					{name: '铜川市', value: 4.1},
					{name: '渭南市', value: 5.2},
					{name: '宝鸡市', value: 2.4},
					{name: '西安市', value: -11.2},
					{name: '商洛市', value: -13.2},
					{name: '汉中市', value: -3.4},
					{name: '安康市', value: -7.2},
					{name: '杨凌示范区', value: -3.2}
				],
				barChart: {
					'category': ['铜川','汉中','安康','延安','宝鸡','榆林','西安','杨凌','咸阳','渭南'],
					'value': [16.3,12.2,11.7,10.9,10.1,8.8,7.6,7.2,6.7,6.6]
				},
				barChartName: "户均毛利率",
			}
		},
		components: {
			boxBase,
			detailBtn
		},
		methods: {
			initMap: function() {
				var chart = this.chart = echarts.init(this.$refs.mapChart);
				var option = {
					visualMap: {
						type: 'piecewise', 
						left: '5%',
						top:'45%',
						showLabel:true,
						text:['同比增幅'],
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
								str = value1 + '%以上 ( 1家单位 )';
							}else if(value1==0){
								str = '[' + value1 + '% , ' + value2 + '% ) ( 2家单位 )';
							}else if(value1==-5){
								str = '[' + value1 + '% , ' + value2 + '% ) ( 3家单位 )';
							}else if(value1==-10){
								str = '[' + value1 + '% , ' + value2 + '% ) ( 2家单位 )';
							}else if(value2==-10){
								str =  value2 + '%以下 ( 3家单位 )';
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
							top: 46,
							left: 250,
							mapType: 'shanxi',
							zoom: 1.24,
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
				let $this = this;
				chart.on('click', function (params) {
				    //console.log(params);
				    $this.$router.push({ path: '/cust/cityProfit' })
				});
			},
			initBarChart: function() {
    		    var myChart = this.myChart = echarts.init(this.$refs.barChart);
        		let option = {
            		grid: {
            			show: false,
            			top: '15%',
                		left: '5%',
                		right: '11%',
                		bottom: '3%',
                		containLabel: true
            		},
		            tooltip: {
		            	show: true,
		            	formatter: "{b}<br />{a}：{c}%"
		            },
            		xAxis: {
            			show: true,
                		type: 'category',
                		data: this.barChart.category,
                		axisLine: {
        					show: true,
        					lineStyle: {
        						color: 'white'
        					}
        				},
        				axisLine: {
        					show: true,
        					lineStyle: {
        						color: "#fff"
        					}
        				},
        				axisTick: {
        					show: false
        				},
        				axisLabel: {
        					textStyle: {
        						color: "#fff"
        					}
        				}
            		},
            		yAxis: {
            			nameTextStyle: {
            				color: "#FFF"
            			},
            			nameLocation: 'middle',
            			nameGap: 35,
            			type: 'value',
            			min: 6,
            			max: 16,
            			interval: 2,
            			axisLabel: {
            				margin: 10,
            				textStyle:{
                				color: 'white'
            				},
            				formatter: "{value}%"
        				},
        				axisLine: {
        					show: true,
        					lineStyle: {
        						color: "#FFF"
        					}
        				},
        				axisTick: {
        					show: true,
        					lineStyle: {
        						color: "#FFF"
        					}
        				},
        				splitLine: {
        					show: false
        				}
            		},
            		series: [
            			{
            				name: this.barChartName,
		                    type: 'bar',
		                    itemStyle: {
		                        normal: {
		                            color: '#07DE9B'
		                        }
		                    },
		                    markLine: {
		                    	silent: true,
		              			data: [
		              				[{
		              					name: '户均毛利率\n7.95%',
							            coord: [0, 7.95],
							            lineStyle: {
							            	normal: {
							            		color: "#FFF"
							            	}
							            }
							        },
							        {
							            coord: [9, 7.95]
							        }]
							   	]
		              		},
		                    barWidth: 12,
		                    data: this.barChart.value
		              }
            		]
        		};
        		myChart.setOption(option);
			},
			tableShowHide:function(){
				
			}
		},
		mounted() {
			this.initMap();
			this.initBarChart();
		},
		beforeDestroy() {
			this.chart.dispose();
			this.myChart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';

	.leftPanel {
		width: 5.29rem;
		height: 6rem;
		
		.leftBoxBase {
			width: inherit;
			height: 6rem;
			position: relative;
			
			.tipPanel {
				width: 2.5rem;
				height: 0.5rem;
				padding: 0.05rem 0.2rem;
				background-color: #263E84;
				color: #FFF;
				font-size: 0.14rem;
				line-height: 0.25rem;
				text-align: left;
				position: absolute;
				top: 0.3rem;
				left: 0.3rem;
				z-index: 10;
				
				.orangeText {
					font-weight: bold;
					color: $orange;
				}
				.greenText {
					font-weight: bold;
					color: $green;
				}
			}
			
			.mapChart {
				width: inherit;
				height: 4.5rem;
				margin-top: 0.1rem;
				z-index: 1000;
			}
			
			.barChart {
				width: 5.29rem;
				height: 2.1rem;
				position: absolute;
				left: 0rem;
				bottom: 0.1rem;
				z-index: 999;
			}
		}
	}
</style>