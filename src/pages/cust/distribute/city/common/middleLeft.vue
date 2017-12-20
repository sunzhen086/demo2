<template>
	<div class="panel">
		<box-base class="middleLeftBox">
			<div class="titleBar"></div>
			<div slot="box-title">周订货户数同期对比</div>
			<div slot="box-extend">
				<tab-base class="tabBox" :option=paneOption @tab-click="tabClick"></tab-base>
				<div class="topRightMenu"><detail-btn  @on-click="showDetail"></detail-btn></div>
			</div>
			<div class="content">
				<div class="contentTitle">
					2017 年 6 月份第一周西安有效户数 
					<span class="orangeText">
						<!--{{validValue}}-->
						<number-format format='to-thousand' :strValue='validValue'></number-format>
					</span> 
					户，订货户数 
					<span class="orangeText">
						<!--{{ordersValue}}-->
						<number-format format='to-thousand' :strValue='ordersValue'></number-format>
					</span> 
					户，同比增加 
					<span class="greenText">
						<!--{{diffValue}}-->
						<number-format format='to-thousand' :strValue='diffValue'></number-format>
					</span> 户。
				</div>
				<div class="chartPanel">
					<div ref="multiLineChart" class="multiLineCharts"></div>
				</div>
			</div>
		</box-base>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import numberFormat from 'components/numberFormat/number-format.vue';
	import detailBtn from 'components/detailbutton/detail-button.vue';
	import echarts from 'echarts';
	
	export default {
		data() {
			return {
				paneOption: {
					data:[
						{
							key: 'tab1',
							text: '年'
						},
						{
							key: 'tab2',
							text: '周'
						}
					],
					activePane:'tab1'
				},
				validValue: 30159,
				ordersValue: 30825,
				diffValue: 400,
//				validValue: '30,159',
//				ordersValue: '30,825',
//				diffValue: '400',
				data: {
					'weeks': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15',
									'16','17','18','19','20','21','22','23','24','25','26','27','28','29','30',
									'31','32','33','34','35','36','37','38','39','40','41','42','43','44','45',
									'46','47','48','49','50','51','52'],
					'blueLine': [29406,28861,28661,27462,19924,12847,19045,26151,27497,27775,28058,27928,27403,
										26904,28009,27975,27679,26903,27230,27695,27410,27084,27862,28121,28186,27766,
										28432,28585,28310,28257,27991,28267,28120,28424,28061,28467,27882,28856,24377,
										25324,27403,28029,27914,25993,27546,27332,27533,27522,27797,27927,27799,25064],
					'greenLine': [28011,28852,27983,14131,11869,26057,27598,28412,27589,28119,28119,28558,27942,21650,28730,28580,28822,21651,28537,28375,28679]
				}
			}
		},
		components: {
			boxBase,
			tabBase,
			numberFormat,
			detailBtn
		},
		methods: {
			tabClick:function(curTab){
				console.log(curTab);
			},
			showDetail:function(){
				this.$emit('showDetail','');
			},
			initLine: function(){
        		// 基于准备好的dom，初始化echarts实例
        		var myChart = this.myChart = echarts.init(this.$refs.multiLineChart);
        		// 指定图表的配置项和数据
        		var option = {
            		tooltip : {
                		trigger: 'axis',
                		axisPointer: {
                    		type: 'cross',
                    		label: {
		                        backgroundColor: '#6a7985'
                    		}
                		},
                		formatter: function(value) {
                			if(value.length == 2) {
                				return "第 " + (parseInt(value[0].dataIndex)+1) + " 周<br />2016年：" + value[0].data + "<br />2017年：" + value[1].data;
                			} else if (value.length ==1) {
                				return "第 " + (parseInt(value[0].dataIndex)+1) + " 周<br />2016年：" + value[0].data;
                			}
                		}
            		},
            		grid: {
            			top: '10%',
                		left: '3%',
                		right: '5%',
                		bottom: '8%',
                		containLabel: true
            		},
            		xAxis : [
                		{
                    		type : 'category',
                    		boundaryGap : false,
                    		data : this.data.weeks,
                    		splitNumber: 8,
                    		axisLabel: {
            					textStyle:{
                					color: 'white'
            					},
            					interval: 2
        					},
        					axisLine: {
        						show: false
        					},
        					axisTick: {
        						show: false
        					}
                		}
            		],
            		yAxis : [
                		{
		                    type : 'value',
		                    min: 10000,
		                    max: 30000,
		                    interval: 5000,
		                    axisLabel: {
            					textStyle: {
                					color: 'white'
            					},
            					margin: 15
        					},
        					axisLine: {
        						show: false
        					},
        					axisTick: {
        						show: false
        					},
        					splitLine: {
        						show: true,
        						lineStyle: {
        							color: '#4B68B8',
        							width: 1
        						}
        					}
                		}
            		],
            		color: ['#0958FD', '#07DE9B'],
            		series : [
                		{
                    		name: '',
                    		type: 'line',
                    		data: this.data.blueLine,
                    		lineStyle: {
                    			normal: {
                    				color: '#0958FD',
                    				width: 3
                    			}
                    		},
                    		symbol: 'circle',
                    		symbolSize: 7,
                    		smooth: true
                		},
                		{
                    		name: '',
                    		type: 'line',
                    		data: this.data.greenLine,
                    		lineStyle: {
                    			normal: {
                    				color: '#07DE9B',
                    				width: 3
                    			}
                    		},
                    		symbol: 'circle',
                    		symbolSize: 7,
                    		smooth: true
                		}
            		]
        		};
        		myChart.setOption(option);
    		}
		},
		mounted() {
			this.initLine();
		},
		beforeDestroy() {
			this.myChart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../../../styles/variables.scss";

	.panel {
		
		.middleLeftBox {
			width: 6.8rem;
			
			.titleBar {
				width: inherit;
				height: 0.15rem;
			}
			
			.tabBox {
				margin-top: 0rem;
				margin-right: 0.1rem;
			}
			
			.contentTitle {
				width: 6.2rem;
				height: 0.35rem;
				margin-left: 0.1rem;
				margin-top: -0.05rem;
				background-color: #263E84;
				line-height: 0.35rem;
				text-align: center;
				
				.orangeText {
					font-weight: bold;
					color: $orange;
				}
				.greenText {
					font-weight: bold;
					color: $green;
				}
			}
			
			.multiLineCharts {
				width: inherit;
				height: 1.93rem;
			}
			
			.topRightMenu{
				float: left;
			}
		}
	}
</style>