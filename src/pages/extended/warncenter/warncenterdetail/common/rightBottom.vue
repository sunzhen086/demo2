<template>
	<div>
		<box-base class="main">
			<div slot="box-title">
				<p class="title">最近12月客户流失情况</p>
			</div>
			<div slot="box-extend">
			</div>
			<div class="content" ref="chart">
			</div>
		</box-base>
	</div>

</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import echarts from 'echarts';
	export default {
		data() {
			return {
				datas: [{
						name: '流失客户数',
						data: [452, 351, 327, 275, 269, 335, 368, 360, 372, 382, 430, 399]
					}, {
						name: '稳定客户户数',
						data: [29947, 30056, 30112, 30195, 30133, 30020, 30071, 30010, 29692, 29670, 30052, 30159]
					}

				]
			}
		},
		computed: {
			xLineData: function() {
				var now = new Date();
				var last = new Date();
				last.setYear(last.getFullYear() - 1);
				var months = [];
				while(now > last) {
					var year = last.getFullYear();
					var month = last.getMonth() + 1;
					last.setMonth(month);
					if(month < 10) {
						month = '0' + month;
					}
					months.push(year + '' + month);
				}
				return months;
			}
		},
		methods: {
			draw: function() {
				var option = {
					title: {
						text: ''
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						},
					},
					color: ['rgb(7,222,155)', 'rgb(9,88,253)'],
					legend: {
						data: [{
							name: this.datas[0].name,
							textStyle: {
								color: '#fff'
							}
						}, {
							name: this.datas[1].name,
							textStyle: {
								color: '#fff'
							}
						}]
					},
					grid: {
						top: '40',
						left: '20',
						right: '20',
						bottom: '10',
						containLabel: true
					},
					xAxis: {
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
							formatter:function(val){
								var str = "";
								var month = val.substr(4, 2);
								var nowMonth = new Date().getMonth()+1;
								
								if(month*1 == nowMonth){
									str = parseInt(month, 10) + "月\n" + val.substr(0, 4) + "年";
								}else if(month == '01') {
									str = parseInt(month, 10) + "月\n" + val.substr(0, 4) + "年";
								} else {
									str = parseInt(month, 10) + "月";
								}
								return str;
							}
						},
						axisTick: {
							show: false,
							alignWithLabel: true
						}
					},
					yAxis: [{
						name: '单位：户',
						position: 'left',
						type: 'value',
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							textStyle: {
								color: '#fff'
							}
						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: false, //是否显示y轴的线
							lineStyle: {
								color: '#fff'
							}
						},
						min:200,
						max:700,
						interval:100
					}, {
						name: '单位：户',
						position: 'right',
						type: 'value',
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							textStyle: {
								color: '#fff'
							}
						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: false, //是否显示y轴的线
							lineStyle: {
								color: '#fff'
							}
						},
						min:22000,
						max:32000,
						interval:2000
					}],
					series: [{
						name: this.datas[0].name,
						type: 'line',
						data: this.datas[0].data,
						symbol: 'circle'
					}, {
						name: this.datas[1].name,
						type: 'line',
						data: this.datas[1].data,
						symbol: 'circle',
						yAxisIndex: 1,
					}]
				};
				var chart = this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart);
				chart.setOption(option, true);
			}
		},
		components: {
			boxBase
		},
		mounted() {
			this.draw();
		},
		beforeDestroy() {
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../../styles/variables.scss";
	.main {
		height: 2.1rem;
		margin-top: $box-distince;
		.content {
			height: 1.85rem;
			width: 100%
		}
	}
</style>