<template>
	<div>
		<div class="middleMapChart" ref="mapchart"></div>
		<el-dialog v-model="dialogVisible" size="small" class="cma" top='20%' :title="dialogTitle">
			<floatTable :tableData=tableData></floatTable>
		</el-dialog>
	</div>
</template>

<script>
	import echarts from 'echarts';
	import shanxi_geoJson_data from 'static/js/map.js';
	import floatTable from './floatTable.vue';
	export default {
		props: {
			mapChartData: Array
		},
		computed: {
			//弹出页面，表格数据
			tableData: function() {
				return [{
					'index': '1',
					'level': '严重',
					'type': '销量',
					'desc': '',
				}, {
					'index': '2',
					'level': '严重',
					'type': '销量',
					'desc': '',
				}, {
					'index': '3',
					'level': '一般',
					'type': '市场',
					'desc': '',
				}, {
					'index': '4',
					'level': '较轻',
					'type': '客户',
					'desc': '',
				}, {
					'index': '5',
					'level': '较轻',
					'type': '品牌',
					'desc': '',
				}];
			}
		},
		data() {
			return {
				dialogTitle: '',
				dialogVisible: false,
				chartData: {
					title: '',
					pieces: [ //填写数值的分段格式，用于地图旁边的分段文字说明
						{
							min: 20
						},
						{
							min: 15,
							max: 20
						},
						{
							min: 10,
							max: 15
						},
						{
							min: 5,
							max: 10
						},
						{
							max: 5
						},
					],
					color: [ //填写分段文字的颜色数组
						'rgb(27,70,172)',
						'rgb(59,84,166)',
						'rgb(65,143,205)',
						'rgb(86,185,224)',
						'rgb(195,231,247)'
					].reverse()
				}
			}
		},
		methods: {
			initMap: function() {
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.mapchart) || echarts.init(this.$refs.mapchart);
				var self = this;
				var option = {
					visualMap: {
						type: 'piecewise',
						showLabel: true,
						text: [this.chartData.title],
						calculable: true,
						pieces: this.chartData.pieces,
						//inverse: true,
						inRange: {
							symbol: 'rect',
							color: this.chartData.color,
						},
						textStyle: {
							color: "#fff"
						},
						orient: 'vertical',
						formatter: function(value1, value2) {
							var str = '';
							var m = 0;
							if(value1 == 20) {
								for(var i = 0; i < self.mapChartData.length; i++) {
									var value = self.mapChartData[i].value;
									if(value >= 20) {
										m++;
									}
								}
								str = value1 + '个以上 ( ' + m + '家单位 )';
							} else if(value1 == 15) {
								for(var i = 0; i < self.mapChartData.length; i++) {
									var value = self.mapChartData[i].value;
									if(value >= 15 && value < 20) {
										m++;
									}
								}
								str = '[' + 15 + ', ' + 20 + ' ) ( ' + m + '家单位 )';
							} else if(value1 == 10) {
								for(var i = 0; i < self.mapChartData.length; i++) {
									var value = self.mapChartData[i].value;
									if(value >= 10 && value < 15) {
										m++;
									}
								}
								str = '[' + 10 + ', ' + 15 + ' )  ( ' + m + '家单位 )';
							} else if(value1 == 5) {
								for(var i = 0; i < self.mapChartData.length; i++) {
									var value = self.mapChartData[i].value;
									if(value >= 5 && value < 10) {
										m++;
									}
								}
								str = '[' + value1 + ', ' + value2 + ' ) ( ' + m + '家单位 )';
							} else if(value2 == 5) {
								for(var i = 0; i < self.mapChartData.length; i++) {
									var value = self.mapChartData[i].value;
									if(value < 5) {
										m++;
									}
								}
								str = '' + 5 + '个以下 ( ' + m + '家单位 )';
							}
							return str; // 范围标签显示内容。
						}
					},
					backgroundColor: 'rgba(0,0,0,0)',
					tooltip: {
						trigger: 'item',
						show: true,
						formatter: '<big style="font-weight: bold;color:#2edbff">{b}</big><br />问题个数：{c}'
//						formatter: '{b}<br />问题个数：{c}',
					},
					series: [{
						type: 'map',
						top: 38,
						left: 245,
						mapType: 'shanxi',
						zoom: 1.2,
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
								borderColor: 'rgba(0,0,0,0.5)',
								borderWidth: 1,
								areaColor: '#389BB7',
							},
							emphasis: {
								areaColor: '',
								borderWidth: 0,
								borderColor: '#fff',
								shadowColor: 'rgba(0, 0, 0, 0.5)',
								shadowBlur: 20,
								shadowOffsetX: 1,
								shadowOffsetY: 1
							}
						},
						animation: false,
						data: self.mapChartData,
					}]
				};

				echarts.registerMap('shanxi', shanxi_geoJson_data);
				chart.setOption(option);
				var $this = this;
				chart.on('click', function(params) {
					$this.$router.push("/extended/warncentercity");
				});
			},
		},
		components: {
			floatTable
		},
		mounted() {
			//this.initMap();
		},
		watch: {
			mapChartData: {
				handler: function(val, oldVal) {
					this.mapChartData = val;
					this.initMap();
				},
				deep: true
			}
		},
		beforeDestroy() {
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.middleMapChart {
		width: 4.6rem;
		height: 3.8rem;
	}
</style>