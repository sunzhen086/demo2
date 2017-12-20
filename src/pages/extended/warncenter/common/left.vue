<template>
	<box-base class="leftBox">
		<div slot="box-title">
			<p class="title">各类型问题预警情况</p>
		</div>
		<div slot="box-extend" class="extend-height">
			<detail-btn  @on-click="showTable"></detail-btn> 
		</div>

		<div class="content">
			<div class="note">
				经过分析诊断共发现问题
				<span class="orange">{{sum()}}</span>个
				<br /> 严重问题主要集中在
				<span class="orange">{{max()}}</span>
			</div>
			<div ref="chart" class="chart"></div>
		</div>

	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import detailBtn from 'components/detailbutton/detail-button.vue';

	import echarts from 'echarts';
	export default {
		data() {
			return {
				tableShow:false,
				yAxisData: ['品牌', '销量', '单箱均价', '市场', '客户', '工业', '销售收入'].reverse(),
				color: ['rgb(255,88,88)', 'rgb(255,149,52)', 'rgb(255,229,106)'
				],
				name: ['严重', '一般', '较轻'],
				data: [
					[3, 2, 2, 2, 2, 1, 1].reverse(), [3, 5, 5, 4, 2, 3, 3].reverse(), [3, 7, 3, 5, 3, 5, 2].reverse()
				]
			}
		},
		methods: {
			showTable:function(){
				this.tableShow = !this.tableShow;
				this.$emit('show-table',this.tableShow);
			},
			sum: function() {
				var data = this.data;
				var sum = 0;
				for(var i = 0; i < data.length; i++) {
					for(var k = 0; k < data[i].length; k++) {
						sum += data[i][k];
					}
				}
				return sum;
			},
			max: function() {
				var data = this.data[0];
				var max = 0;
				var maxIndex = 0;
				for(var i = 0; i < data.length; i++) {
					if(data[i] > max) {
						max = data[i];
						maxIndex = i;
					}
				}
				return this.yAxisData[maxIndex];
			},
			drawLine: function() {
				var option = {
					tooltip: {
						trigger: 'axis',
					},
					legend: {
						data: [{
							name: this.name[0],
							textStyle: {
								color: this.color[0]
							}
						}, {
							name: this.name[1],
							textStyle: {
								color: this.color[1]
							}
						}, {
							name: this.name[2],
							textStyle: {
								color: this.color[2]
							}
						}],

					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						top: '40',
						containLabel: true
					},
					xAxis: {
						type: 'value',
					//	boundaryGap: true,
						axisLine: {
							show: false,
							lineStyle: {
								color: '#fff', //x轴颜色
								opacity: 0.2
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							interval: 0
						},
						axisTick: {
							show: false,
							alignWithLabel: true
						},
						min: 0,
						max: 16,
						interval: 2
					},
					yAxis: {
						type: 'category',
						splitLine: {
							show: false,
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
							show: true, //是否显示y轴的线
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						},
						data: this.yAxisData
					},
					series: [{
						name: this.name[0],
						type: 'bar',
						stack: '合计',
						color: [this.color[0]],
						barWidth: 25,
						label: {
							normal: {
								show: true,
								position: 'insideRight',
								textStyle:{
									color:'#000'
								}
							}
						},
						data: this.data[0]
					}, {
						name: this.name[1],
						type: 'bar',
						stack: '合计',
						color: [this.color[1]],
						label: {
							normal: {
								show: true,
								position: 'insideRight',
								textStyle:{
									color:'#000'
								}
							}
						},
						data: this.data[1]
					}, {
						name: this.name[2],
						type: 'bar',
						stack: '合计',
						color: [this.color[2]],
						label: {
							normal: {
								show: true,
								position: 'insideRight',
								textStyle:{
									color:'#000'
								}
							}
						},
						data: this.data[2]
					}, ]
				};
				let chart = this.chart = echarts.init(this.$refs.chart);
				chart.setOption(option);
			}
		},
		components: {
			boxBase,
			detailBtn
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
		height: 6.05rem;
		.content {
			.note {
				background-color: rgb(36, 62, 136);
				margin-top: 0.1rem;
				font-size: 0.14rem;
				line-height: 0.22rem;
				padding: 0.15rem;
				position: absolute;
				span {
					font-size: 0.18rem;
					margin: 0 0.05rem 0 0.01rem;
				}
				.orange {
					color: $orange;
				}
			}
			.chart {
				position: absolute;
				top: 2rem;
				height: 4.68rem;
				width: 5rem;
			}
		}
	}
</style>