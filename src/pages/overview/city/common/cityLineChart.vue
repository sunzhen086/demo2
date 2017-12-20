<template>
	<box-base class="leftBox">
		<div slot="box-title">
			<p class="title">各区县销售整体情况对比</p>

		</div>
		<div slot="box-extend" class="extend-height">
			<link-btn @on-click="showTable"></link-btn>
		</div>

		<div class="content">
			<div ref="linechart" class="linechart"></div>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import echarts from 'echarts';
	import linkBtn from 'components/detailbutton/link-button.vue'
	export default {
		computed: {
			datas: function() {

				var d1 = [],
					d2 = [],
					d3 = [];
				for(var i = 0; i < this.xLineData.length; i++) {
					d1.push(this.random(-20, 20, 2));
					d2.push(this.random(-20, 20, 2));
					d3.push(this.random(-20, 20, 2));
				}

				return [{
					name: '销量同比',
					data: d1
				}, {
					name: '收入同比',
					data: d2
				}, {
					name: '单箱同比',
					data: d3
				}]
			}
		},
		data() {
			return {
				xLineData: ['高新区', '新城区', '碑林区', '莲湖区', '雁塔区', '灞桥区', '未央区', '周至县', '户县', '蓝田县', '阎良区','高陵区','长安区','临潼区'],
			}
		},
		methods: {
			drawLine: function() {
				var that = this;
				var option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					color: ['#22eebd', '#1cd8ff', '#015fff'],
					legend: {
						data: [{
							name: this.datas[0].name,
							textStyle: {
								color: '#fff'
							},
							icon: 'line'
						}, {
							name: this.datas[1].name,
							textStyle: {
								color: '#fff'
							},
							icon: 'line'
						}, {
							name: this.datas[2].name,
							textStyle: {
								color: '#fff'
							},
							icon: 'line'
						}],
						right: '1%'
					},
					grid: {
						left: '2%',
						right: '2%',
						top: '15%',
						bottom: '0%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						boundaryGap: true,
						data: this.xLineData,
						axisLine: {
							lineStyle: {
								color: '#fff', //x轴颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							rotate: 0,
							textStyle: {
								color: '#fff' //x轴信息颜色
							}
						},
						splitLine: {
							show: false
						},
						axisTick: {
							show: false //显示分割点
						}
					}],
					yAxis: {
						type: 'value',
						axisLine: {
							show: false, //是否显示y轴的线
							lineStyle: {
								color: '#fff'
							}
						},
						axisLabel: {
							textStyle: {
								color: '#fff'
							},
							formatter: function(v, index) {
								return v.toFixed(2) + '%';
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisTick: {
							show: false
						},
						axisPointer: {
							show: true,
							label: {
								formatter: function(parms) {
									return(parms.value).toFixed(2) + '%'; //y轴显示的数据
								}
							}
						}
					},
					series: [{
						name: that.datas[0].name,
						type: 'line',
						data: that.datas[0].data,
						symbol: 'circle'
					}, {
						name: that.datas[1].name,
						type: 'line',
						data: that.datas[1].data,
						symbol: 'circle'
					}, {
						name: that.datas[2].name,
						type: 'line',
						data: that.datas[2].data,
						symbol: 'circle'
					}]
				};
				let chart = this.chart = echarts.init(this.$refs.linechart);
				chart.setOption(option);
			},
			showTable: function() {
				this.$router.push({ path: '/overview/dptsalesrpt' });
			}
		},
		components: {
			boxBase,
			linkBtn
		},
		mounted() {
			this.drawLine();
		},
		beforeDestroy() {
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';
	.leftBox {
		margin-top: $box-distince;
		.content {
			.linechart {
				height: 1.66rem;
				width: 7.8rem;
			}
		}
	}
</style>