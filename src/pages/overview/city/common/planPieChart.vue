<template>
	<box-base class="centerBoxBase">
		<div slot="box-title">销售计划完成进度</div>
		<div slot="box-extend">
			<link-btn @on-click="detailClick"></link-btn>
		</div>
		<div class="content">
			<div class="dataShow">{{this.ringChartData.doneRate}}%</div>
			<div class="charts" ref="ringChart"></div>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import linkBtn from 'components/detailbutton/link-button.vue'
	import echarts from 'echarts';
	export default {
		data() {
			return {
				ringChartData: {
					data: [
						{name: '完成', value: 200},
						{name: '未完成', value: 200}
					],
					doneRate: 50
				}
			}
		},
		components: {
			boxBase,
			linkBtn
		},
		methods: {
			detailClick:function(){
				
			},
			initRingChart: function() {
				var that = this;
				var option = {
					tooltip: {
						show: false
					},
					color: [new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                                offset: 0,
		                                color: 'rgb(0,97,254)'
		                            }, {
		                                offset: 1,
		                                color: 'rgb(32,239,185)'
		                            }]), 'rgb(35,83,155)'],
					series: [
						{
							type:'pie',
							center: ['50%', '45%'],
							radius: ['65%', '80%'],
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
				var myChart = this.myChart = echarts.init(this.$refs.ringChart);
				myChart.setOption(option);
			}
		},
		mounted() {
			this.initRingChart();
		},
		beforeDestroy() {
			this.myChart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';
	.centerBoxBase {
		margin-left:$box-distince;
		position: relative;
		
		.dataShow {
			position: absolute;
			top: 0.80rem;
			left: 0.78rem;
			font-size: 0.28rem;
		}
		.charts {
			height: 1.32rem;
			width:2rem;
		}
	}
</style>