<template>
	<div class="mapBox">
		<box-base class='mapBoxBase'>
			<div slot="box-title">工业企业销售和在途情况</div>
			<div class="content">
				<barChart class="barChart"></barChart>
				<div class="tipPanel">
					共有 <span class="greenText">{{tipData.units}}</span> 家工业正在为陕西配货<br  />
					商品在途数量为 <span class="orangeText">{{tipData.total}}</span> 万支
				</div>
				<div class="mapChart" ref="mapChart"></div>
				<ELtable class="ELtable" @showPopTable='showPopTable'></ELtable>
			</div>
		</box-base>
		
		<el-dialog :title="popTableData.title['浙江中烟']" :visible.sync="zjpopTableVisible" class="cma" size="large">
			<popTable v-bind:popTableData = "popTableData.data['浙江中烟']"></popTable>
		</el-dialog>
		<el-dialog :title="popTableData.title['四川中烟']" :visible.sync="scpopTableVisible" class="cma" size="large">
			<popTable v-bind:popTableData = "popTableData.data['四川中烟']"></popTable>
		</el-dialog>
	</div>
</template>

<script>
	import echarts from 'echarts';
	
	import boxBase from 'components/box/box-base.vue';
	import barChart from './barChart.vue';
	import ELtable from './ELtable.vue';
	import popTable from './popTable.vue';
	
	import chinaJson from 'static/js/json/china.json';
	
	export default {
		props: {
			popTableData: Object
		},
		data() {
			return {
				zjpopTableVisible: false,
				scpopTableVisible: false,
				tipData: {
					units: 8,
					total: 220
				},
				dataValue: [{
					name: "山东中烟",
					value: [118.3352,36.5413],
					val: 30
				},{
					name: "吉林中烟",
					value: [125.8154,43.8584],
					val: 15
				},{
					name: "四川中烟",
					value: [102.7539,30.8904],
					val: 25
				},{
					name: "陕西中烟",
					value: [109.1162,37.0004],
					val: 45
				},{
					name: "浙江中烟",
					value: [120.5313,29.5773],
					val: 50
				},{
					name: "云南中烟",
					value: [101.5199,24.8663],
					val: 40
				},{
					name: "福建中烟",
					value: [118.0222,26.0581],
					val: 10
				},{
					name: "广西中烟",
					value: [108.6541,23.6662],
					val: 5
				}],
				charData:{
				    '山东中烟': [118.3352,36.5413],
				    '陕西': [108.5162,33.8004],
				    '云南中烟': [101.5199,24.8663],
				    '浙江中烟': [120.5313,29.5773],
				    '陕西中烟': [109.1162,37.0004],
				    '四川中烟': [102.7539,30.8904],
				    '吉林中烟': [125.8154,43.8584],
				    '福建中烟': [118.0222,26.0581],
				    '广西中烟': [108.6541,23.6662]
				},
				GZData:[
				    [{name:'陕西'},{name:'山东中烟'}],
				    [{name:'陕西'},{name:'吉林中烟'}],
				    [{name:'陕西'},{name:'四川中烟'}],
				    [{name:'陕西'},{name:'陕西中烟'}],
				    [{name:'陕西'},{name:'浙江中烟'}],
				    [{name:'陕西'},{name:'云南中烟'}],
				    [{name:'陕西'},{name:'福建中烟'}],
				    [{name:'陕西'},{name:'广西中烟'}]
				]
			}
		},
		components: {
			boxBase,
			barChart,
			ELtable,
			popTable
		},
		methods: {
			drawMap: function() {
					var that = this;
					var convertData = function (data) {
					    var res = [];
					    for (var i = 0; i < data.length; i++) {
					        var dataItem = data[i];
					        var fromCoord = that.charData[dataItem[1].name];
					        var toCoord = that.charData[dataItem[0].name];
					        if (fromCoord && toCoord) {
					            res.push({
					                fromName: dataItem[1].name,
					                toName: dataItem[0].name,
					                coords: [fromCoord, toCoord]
					            });
					        }
					    }
					    return res;
					};

						var series = [];
						[['陕西', this.GZData]].forEach(function (item, i) {
						    series.push(
						    {
						        name: item[0] + ' Top8',
						        type: 'lines',
						        zlevel: 1,
						        lineStyle: {
						            normal: {
						                color: '#fff',
						                width: 1,
						                opacity: 1,
						                curveness: 0.2
						            }
						        },
						        effect: {
									show: !0,
									period: 6,
									trailLength: 0.7,
									color: "#fff",
									symbolSize: 6
								},
								coordinateSystem: "geo",
						        data: convertData(item[1])
						    }
						    );
						});

						series.push(
							{
						        name: ' Top8',
						        type: 'effectScatter',
						        coordinateSystem: 'geo',
						        zlevel: 20,
						        rippleEffect: {
						            brushType: 'stroke'
						        },
						        label: {
						            normal: {
						                show: true,
						                position: 'left',
						                formatter: '{b}',
						                textStyle: {
						                	color: '#ffc400'
						                }
						            }
						        },
						        symbolSize: 17,
						        itemStyle: {
						            normal: {
						                color: '#ffffff'
						            }
						        },
						        data: [{name: '陕西', value: [108.5162,33.8004]}]
						    }
						);
						series.push(
							{
							type: "scatter",
							coordinateSystem: "geo",
							data: [
									{name: "吉林中烟",value: [125.8154,43.8584]},
									{name: "山东中烟",value: [118.3352,36.5413]},
									{name: "陕西中烟",value: [109.1162,37.0004]},
									{name: "四川中烟",value: [102.7539,30.8904]},
									{name: "浙江中烟",value: [120.5313,29.5773]},
									{name: "云南中烟",value: [101.5199,24.8663]},
									{name: "福建中烟",value: [118.0222,26.0581]},
									{name: "广西中烟",value: [108.6541,23.6662]}
							],
							symbolSize: 0.1,
							zlevel: 3,
							label: {
								normal: {
									show: true,
									position: "top",
									formatter: "{b}",
									textStyle: {
										color: "#fff",
										fontSize: 16,
										fontWeight: 'bold'
									}
								}
							},
							itemStyle: {
								normal: {
									color: "#ffa022",
									position: "right",
									show: true
								}
							},
						}
						);
						series.push(
							{
								zlevel:5,
								name: "",
								type: "scatter",
								rippleEffect: {
								brushType: "fill",
								period: 7,
								scale: 26
							},
							showEffectOn: "render",
							label: {
								normal: {
									show: true,
									position: [-30, 0],
									textStyle: {
										color: "#ffc400",
										fontWeight: 600,
										fontSize: 16
									},
									formatter: function(t) {
										return t.data.val + " 万支";
									}
								}
							},
							symbolSize: 0.1,
							coordinateSystem: "geo",
							zlevel: 2,
							itemStyle: {
								normal: {
									color: "#ffa022"
								}
							},
							data: this.dataValue
						}
						);
				var option = {
				    geo: {
				        map: 'china',
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
				                areaColor: '#5072ad',
				                borderColor: '#c8eaf4'
				            }
				        },
				        layoutSize:720,
				        layoutCenter: ['50%', '50%'],
				        silent: true
				    },
				    series: series
				};
				echarts.registerMap('china', chinaJson);
        		var chart = this.chart = echarts.init(this.$refs.mapChart);
        		chart.setOption({
            		series: [{
                		type: 'map',
                		map: 'china'
            		}]
        		});
        		chart.setOption(option);
        		chart.on('click', function (param) {
        			if(param.componentType == 'series' && param.componentSubType == 'lines') {
						if(param.data.fromName == '浙江中烟') {
							that.showPopTable('浙江中烟');
						} else if(param.data.fromName == '四川中烟') {
							that.showPopTable('四川中烟');
						}
					}
				});
			},
			showPopTable: function(unit) {
				if(unit=='浙江中烟') {
					this.zjpopTableVisible = true;
				} else if(unit=='四川中烟') {
					this.scpopTableVisible = true;
				}
			}
		},
		mounted() {
			this.drawMap()
		},
		beforeDestroy() {
			this.chart.dispose();
		}
	}
</script>

<style lang='scss' scoped="scoped">
@import '../../../../styles/variables.scss';

	.mapBox {
		height: 6.15rem;
		
		.box {
			background: none;
			border: none;
		}
		
		.mapBoxBase {
			width: 12.51rem;
			height: 6rem;
			margin-top: 0.1rem;
			margin-left: $box-distince;
			position: relative;
			
			.barChart {
				width: 4rem;
				height: 5.6rem;
				position: absolute;
				margin-top: 0.06rem;
				z-index: 1000;
			}
			
			.tipPanel {
				width: 2.1rem;
				height: 0.5rem;
				padding: 0.05rem 0.2rem;
				background-color: #263E84;
				color: #FFF;
				font-size: 0.14rem;
				line-height: 0.25rem;
				text-align: left;
				position: absolute;
				top: 0.35rem;
				left: 5.1rem;
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
				width: 10rem;
				height: 5.7rem;
				margin-top: 0.1rem;
				margin-left: 1.5rem;
			}
			
			.ELtable {
				width: 2.7rem;
				height: 1.77rem;
				position: absolute;
				right: 0.2rem;
				top: 2.4rem;
				z-index: 1000;
				background-color: #0B1948;
			}
		}
	}
</style>