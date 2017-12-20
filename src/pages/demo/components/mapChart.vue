<template>
	<div class="chinaMap" ref="chinaMap">
	</div>
</template>
<script>
	import echarts from 'echarts';
	import chinaJson from 'static/js/json/china.json';
	import axios from "utils/axios";
	import EventBus from '../eventBus';

	export default {
		data() {
			return {
				queryKey:"saleQty",
				mapPieces: [5, 0, -5, -10],
				chartData: []
			}
		},
		computed: {
			//计算地图图例需要的数据
			mapPieceCount: function() {
				var arr = [0, 0, 0, 0, 0];
				var chartData = this.chartData;
				var pieces = this.mapPieces;
				if(chartData && chartData.length > 0) {
					chartData.forEach(function(item) {
						var value = item.value;
						if(value >= pieces[0]) {
							arr[0]++;
						} else if(value >= pieces[1] && value < pieces[0]) {
							arr[1]++;
						} else if(value >= pieces[2] && value < pieces[1]) {
							arr[2]++;
						} else if(value >= pieces[3] && value < pieces[2]) {
							arr[3]++;
						} else if(value <= pieces[3]) {
							arr[4]++;
						}
					})
				}
				return arr;
			},
			mapSubject: function() {
				var temp = {
					saleQty: {
						title: "卷烟销售",
						unit: "万箱"
					},
					saleAmt: {
						title: "销售收入",
						unit: "万元"
					},
					avePrice: {
						title: "单箱均价",
						unit: "万元"
					}
				}
				return temp[this.queryKey];
			}
		},
		methods: {
			drawMap: function() {
				var self = this,
					chartData = self.chartData,
					pieces = self.mapPieces,
					piecesCount = self.mapPieceCount,
					subject = self.mapSubject;

				var option = {
					animation: false,
					tooltip: {
						show: true,
						trigger: 'item',
						formatter: function(param) {
							var str = ''
							str += '<big style="font-weight: bold;color:#2edbff">' + param.name + '</big><br/>';
							str += '本期' + subject.title + ':' + param.data.cur + subject.unit + '<br/>';
							str += '同期' + subject.title + ':' + param.data.same + subject.unit + '<br/>';
							str += subject.title + '同比:' + param.data.value + '%';
							return str;
						}
					},
					visualMap: {
						type: 'piecewise',
						left: '0%',
						top: '68%',
						showLabel: true,
						text: [subject.title],
						calculable: true,
						splitNumber: pieces.length,
						pieces: [{
								min: pieces[0]
							},
							{
								min: pieces[1],
								max: pieces[0]
							},
							{
								min: pieces[2],
								max: pieces[1]
							},
							{
								min: pieces[3],
								max: pieces[2]
							},
							{
								max: pieces[3]
							},
						],
						inverse: false,
						inRange: {
							symbol: 'rect',
							color: ['rgb(195,231,247)', 'rgb(86,185,224)', 'rgb(65,143,205)', 'rgb(59,84,166)', 'rgb(27,70,172)']
						},
						itemWidth: 30,
						itemHeight: 20,
						textStyle: {
							color: "#ffffff"
						},
						orient: 'vertical',
						formatter: function(value1, value2) {
							var str = '';
							if(value1 == pieces[0]) {
								str = value1 + '%以上 ( ' + piecesCount[0] + '家单位 )';
							} else if(value1 == pieces[1]) {
								str = '[' + value1 + '% , ' + value2 + '% ) ( ' + piecesCount[1] + '家单位 )';
							} else if(value1 == pieces[2]) {
								str = '[' + value1 + '% , ' + value2 + '% ) ( ' + piecesCount[2] + '家单位 )';
							} else if(value1 == pieces[3]) {
								str = '[' + value1 + '% , ' + value2 + '% ) ( ' + piecesCount[3] + '家单位 )';
							} else if(value2 == pieces[3]) {
								str = value2 + '%以下 ( ' + piecesCount[4] + '家单位 )';
							}
							return str;
						}
					},
					series: [{
						name: subject.title,
						type: 'map',
						mapType: 'china',
						roam: false,
						aspectScale: 0.8,
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
						data: chartData,
						layoutCenter: ['52%', '52%'],
						layoutSize: 580
					}]
				};
				echarts.registerMap('china', chinaJson);
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.chinaMap) || echarts.init(this.$refs.chinaMap);
				chart.setOption(option);
			},
			getDataAndDrawMap: function() {
				var self = this;
				self.showLoading();
				axios.get('/overviewnation/getChinaMapData', {
						params: {
							queryKey: self.queryKey
						}
					})
					.then(function(resp) {
						self.chartData = resp.data.result;
						self.drawMap();
						self.closeLoading();
					})
					.catch(function(err) {
						self.closeLoading();
						console.log(err);
					})
			}
		},
		created(){
			var self = this;
			EventBus.$on("measureChanged",function(measureKey){
				self.queryKey = measureKey;
				self.getDataAndDrawMap();
			})
		},
		mounted() {
			this.getDataAndDrawMap();
		},
		beforeDestroy() {
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>

</style>