<template>
	<div class="centerPanel">
		<div class="centerTop">
			<box-base class="centerBoxBase">
					<div slot="box-title">销售计划完成进度</div>
					<link-btn class="topRightMenu" @on-click="showPlanDetail"></link-btn>
				
				<div class="content">
					<div class="dataShow1">{{this.doneRate}}%</div>
					<div class="charts" ref="ringChart"></div>
				</div>
			</box-base>
		</div>
		<div class="centerBottom">
			<box-base class="centerBoxBase">
				<div slot="box-title">单箱均价计划执行情况</div>
				<div class="content">
					<div class="dataShow2">差距：{{this.diffValue}} 元</div>
					<div class="charts" ref="barChart"></div>
				</div>
			</box-base>
		</div>
		
		<el-dialog :title="popTableData.title" :visible.sync="popTableVisible" class="cma" size="large">
			<popTable v-bind:popTableData = "popTableData.data"></popTable>
		</el-dialog>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import linkBtn from 'components/detailbutton/link-button.vue';
	import popTable from './popTable.vue';
	
	import echarts from 'echarts';
	
	export default {
		data() {
			return {
				popTableVisible: false,
				popTableData: {
					'title': '各地市销售计划完成进度',
					'data': [
						{
							'index': 1,
							'com': '西安',
							'sale': 15.50,
							'plan': 32.10,
							'doneRate': '48.29%'
						},
						{
							'index': 2,
							'com': '宝鸡',
							'sale': 13.20,
							'plan': 30.00,
							'doneRate': '44.00%'
						},
						{
							'index': 3,
							'com': '杨凌',
							'sale': 14.89,
							'plan': 33.50,
							'doneRate': '44.45%'
						},
						{
							'index': 4,
							'com': '汉中',
							'sale': 12.21,
							'plan': 32.00,
							'doneRate': '38.16%'
						},
						{
							'index': 5,
							'com': '商洛',
							'sale': 12.87,
							'plan': 31.8,
							'doneRate': '40.47%'
						},
						{
							'index': 6,
							'com': '铜川',
							'sale': 13.51,
							'plan': 22.15,
							'doneRate': '60.99%'
						},
						{
							'index': 7,
							'com': '安康',
							'sale': 13.87,
							'plan': 23.63,
							'doneRate': '58.70%'
						},
						{
							'index': 8,
							'com': '延安',
							'sale': 12.80,
							'plan': 23.00,
							'doneRate': '55.65%'
						},
						{
							'index': 9,
							'com': '咸阳',
							'sale': 11.76,
							'plan': 25.00,
							'doneRate': '47.04%'
						},
						{
							'index': 10,
							'com': '榆林',
							'sale': 12.48,
							'plan': 28.50,
							'doneRate': '43.79%'
						},
						{
							'index': 11,
							'com': '渭南',
							'sale': 12.01,
							'plan': 20.00,
							'doneRate': '60.05%'
						}
					]
				},
				ringChartData: {
					data: [
						{name: '完成', value: 145.10},
						{name: '未完成', value: 301.68}
					]
				},
				barChartData: {
					data: {
						'title': ['实际', '计划'],
						'value': [29751, 31051],
						'lineData': [29751, 29751]
					},
					tickData: {
						'min': 26000,
						'max': 31051
					}
				}
			}
		},
		components: {
			boxBase,
			popTable,
			linkBtn
		},
		computed: {
			diffValue: function() {
				return this.barChartData.data.value[1]-this.barChartData.data.value[0];
			},
			doneRate: function() {
				return (100*this.ringChartData.data[0].value/(this.ringChartData.data[0].value + this.ringChartData.data[1].value)).toString().substring(0,2);
			}
		},
		methods: {
			showPopTable: function() {
				this.popTableVisible = true;
			},
			initRingChart: function() {
				var that = this;
				var myChart1 = this.myChart1 = echarts.init(this.$refs.ringChart);
				var option = {
					tooltip: {
						show: false
					},
					color: [new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                                offset: 0,
		                                color: '#07DE9B'
		                            }, {
		                                offset: 1,
		                                color: '#0958FD'
		                            }]), '#23539D'],
					series: [
						{
							type:'pie',
							center: ['50%', '58%'],
							radius: ['60%', '70%'],
							avoidLabelOverlap: false,
							label: {
								normal: {
									show: false,
									position: 'center'
								}
							},
							silent: false,
							data: this.ringChartData.data
						}
					]
				};
				myChart1.setOption(option);
				myChart1.on('click', function (param) {
					that.showPopTable();
				});
			},
			initBarChart: function() {
    		    var myChart2 = this.myChart2 = echarts.init(this.$refs.barChart);
        		var option = {
            		grid: {
            			show: false,
            			top: '20%',
                		left: '5%',
                		right: '15%',
                		bottom: '1%',
                		containLabel: true
            		},
            		xAxis: [
	            		{
	            			show: false,
	                		type: 'value',
	                		min: this.barChartData.tickData.min,
	                		max: this.barChartData.tickData.max
	            		},
	            		{
	            			show: false,
	                		type: 'value',
	                		min: this.barChartData.tickData.min,
	                		max: this.barChartData.tickData.max
	            		}
            		],
            		yAxis: {
                		type: 'category',
                		data: this.barChartData.data.title,
                		axisLabel: {
            				textStyle: {
                				color: 'white'
            				}
        				},
        				axisLine: {
        					show: true,
        					lineStyle: {
                				color: '#23539D'
                			}
        				},
        				axisTick: {
        					show: false
        				}
            		},
            		series: [
            			{
            				name:this.barChartData.data.title[1],
		                    type: 'bar',
		                    stack:'sum',
		                    itemStyle: {
		                        normal: {
		                        	color: 'rgb(34,238,189)'
		                        }
		                    },
		                    label: {
		                    	normal: {
		                    		show: true,
		                    		textStyle: {
		                    			color: '#2F2E58'
		                    		},
		                    		position: 'inside',
		                    		offset: [0, -2],
		                    		formatter:'{c} 元'
		                    	}
		                    },
		                    barWidth: 20,
		                    data: [
		                    	'-',
		                    	this.barChartData.data.value[1]
		                    ],
		                    silent: true
		             	},
		             	{
		             		name:this.barChartData.data.title[0],
		                    type: 'bar',
		                    stack:'sum',
		                    itemStyle: {
		                        normal: {
		                        	color: 'rgb(0,96,255)'
		                        }
		                    },
		                    label: {
		                    	normal: {
		                    		show: true,
		                    		textStyle: {
		                    			color: '#2F2E58'
		                    		},
		                    		position: 'inside',
		                    		offset: [0, -2],
		                    		formatter:'{c} 元'
		                    	}
		                    },
		                    barWidth: 20,
		                    data: [
		                    	this.barChartData.data.value[0],
		                    	'-'
		                    ],
		                    silent: true
		             	},
		             	{
		             		type: 'line',
		                    data: this.barChartData.data.lineData,
		                    silent: true,
		                    lineStyle: {
		                    	normal: {
		                    		type: 'dotted',
		                    		color: 'white'
		                    	}
		                    },
		                    itemStyle: {
		                    	normal: {
		                    		opacity: 0
		                    	}
		                    }
		            	}
		             ]
        		};
        		myChart2.setOption(option);
    		},
    		showPlanDetail:function(){
    			this.$router.push({ path: '/overview/cityQuotaRanking', query:{activePane: 'table4'}});
    		}
		},
		mounted() {
			this.initRingChart();
			this.initBarChart();
		},
		beforeDestroy() {
			this.myChart1.dispose();
			this.myChart2.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';

	.centerPanel {
		width: 2.41rem;
		height: 4.24rem;
		
		.centerTop {
			width: inherit;
		}
		
		.centerBottom {
			width: inherit;
			margin-top: $box-distince;
		}
		
		.centerBoxBase {
			width: inherit;
			height: 2.03rem;
			position: relative;
			
			.topRightMenu {
				float: right;
				margin-top: -0.2rem;
			}
			
			
			.dataShow1 {
				position: absolute;
				top: 49%;
				left: 40%;
				font-size: x-large;
			}
			
			.dataShow2 {
				position: absolute;
				top: 0.5rem;
				left: 1.1rem;
				color: $red;
				font-weight: bold;
			}
			
			.charts {
				height: 1.4rem;
			}
		}
	}
</style>