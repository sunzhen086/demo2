<template>
	<div class="barChartPanel">
		<tab-base class="tabs" :option=paneOption @tab-click="tabClick"></tab-base>
		<link-btn class="tightTopBtn" @on-click="measureReportClick"></link-btn>
		<div class="barChart" ref="barChart"></div>
	</div>
</template>

<script>
	import tabBase from 'components/tab/tab-base.vue';
	import linkBtn from 'components/detailbutton/link-button.vue';
	
	import echarts from 'echarts';
	
	export default {
		data() {
			return {
				paneOption: {
					data:[
						{
							key: 'tab1',
							text: '销量'
						},
						{
							key: 'tab2',
							text: '单箱结构'
						},
						{
							key: 'tab3',
							text: '规格数'
						},
						{
							key: 'tab4',
							text: '新品数'
						}
					],
					activePane:'tab1'
				},
				data: {
					'title': ['山东中烟','重庆中烟','浙江中烟','安徽中烟','陕西中烟','江西中烟','中烟实业','河北中烟','广西中烟','河南中烟','福建中烟','贵州中烟','云南中烟','湖南中烟','上海烟草','湖北中烟','江苏中烟','四川中烟','广东中烟','浙江中烟'],
					'value': [3212,2940,2848,2793,2723,2689,2623,2589,2493,2313,2290,2103,2038,1932,1831,1829,1722,1635,1538,1461]
				}
			}
		},
		components: {
			tabBase,
			linkBtn
		},
		methods: {
			measureReportClick: function (){
				this.$router.push("/overview/comMeasureReport"); 
			},
			tabClick:function(curTab){
				console.log(curTab);
			},
			initBar: function() {
    		    var myChart = this.myChart = echarts.init(this.$refs.barChart);
        		var option = {
            		grid: {
            			show: false,
            			top: '0%',
                		left: '2%',
                		right: '2%',
                		bottom: '-2%',
                		containLabel: true
            		},
            		xAxis: {
            			show: false,
                		type: 'value',
                		max: 3300,
                		min: 1300
            		},
            		yAxis: [
            		{
            			inverse: true,
                		type: 'category',
                		data: this.data.title,
                		axisLabel: {
            				textStyle: {
                				color: '#4AC0E6'
            				}
        				},
        				axisLine: {
        					show: false
        				},
        				axisTick: {
        					show: false
        				}
            		},
            		{
            			inverse: true,
            			type: 'category',
            			data: this.data.value,
            			axisLabel: {
            				margin: -5,
            				textStyle:{
                				color: '#4AC0E6'
            				}
        				},
        				axisLine: {
        					show: false
        				},
        				axisTick: {
        					show: false
        				}
            		}
            		],
            		series: [
                		{
                    		type: 'bar',
                    		data: this.data.value,
                    		barWidth: 12,
                    		itemStyle: {
                        		normal: {
                            		color: '#25EDBE'
                        		},
                        		emphasis: {
                            		color: 'rgba(88,255,255,1)'
                        		}
                    		}
                		}
            		]
        		};
        		myChart.setOption(option);
    		}
		},
		mounted() {
			this.initBar();
		},
		beforeDestroy() {
			this.myChart.dispose();
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.barChartPanel {
		width: 4rem;
		height: 5.6rem;
		background-color: rgba(12,33,78,0.6);
		position: relative;
		
		.tightTopBtn {
			position: absolute;
			top: 0.13rem;
			right: 0.08rem;
		}
		
		.tabs {
			margin: 0.15rem 0.48rem;
		}
		
		.barChart {
			width: 3.8rem;
			height: 4.8rem;
			margin-top: 0.63rem;
			margin-left: 0.09rem;
		}
	}
</style>