<template>
	<box-base>
		<div slot="box-title">
			<p class="title">客户商品毛利率上月分布</p>
		</div>
		<div slot="box-extend">
			<detail-btn  @on-click="tableShowHide"></detail-btn> 
		</div>

		<div class="content" ref="chart">
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
				//按价类排序，第一个元素代表一类，第二个代表二类。。。
				chartData: [
					[{
						'name': '钻石（荷花）',
						'rate': '37.46',
						'sales': '38'
					}, {
						'name': '黄鹤楼（硬攀登）',
						'rate': '36.81',
						'sales': '154'
					}, {
						'name': '云烟（软大重九）',
						'rate': '35.96',
						'sales': '2'
					}],
					[{
						'name': '好猫（招财猫1600）',
						'rate': '18.58',
						'sales': '17'
					}, {
						'name': '万宝路（硬红）',
						'rate': '17.92',
						'sales': '5'
					}, {
						'name': '兰州（硬珍品）',
						'rate': '17.92',
						'sales': '9'
					}],
					[{
						'name': '牡丹（软）',
						'rate': '36.2',
						'sales': '41'
					}, {
						'name': '好猫（招财进宝）',
						'rate': '22.68',
						'sales': '47.43'
					}, {
						'name': '好猫（磨砂猴王）',
						'rate': '20.08',
						'sales': '657'
					}],
					[{
						'name': '延安（软）',
						'rate': '22.98',
						'sales': '92'
					}, {
						'name': '兰州（软盒黄）',
						'rate': '22.29',
						'sales': '6'
					}, {
						'name': '哈德门（精品）',
						'rate': '16.82',
						'sales': '255'
					}],
					[{
						'name': '黄果树（软）',
						'rate': '28.2',
						'sales': '258'
					}, {
						'name': '延安（硬红）',
						'rate': '25.79',
						'sales': '43'
					}, {
						'name': '黄果树（软）',
						'rate': '25.63',
						'sales': '613'
					}]
				]
			}
		},
		methods: {
			drawChart: function() {

				function getPos(pos, posArr) {
					for(var i = 0; i < posArr.length; i++) {
						var a = posArr[i];
						if(pos > a[0] && pos < a[1]) {
							return i;
						}
					}
					return -1;
				}

				//根据传过来的数据生成x轴随机位置和圆圈大小
				var parms = this.chartData;

				var datas = [];
				var _pos, _left, _right;
				for(var i = 0; i < parms.length; i++) {
					var parm = parms[i]; //每个价位的商品
					parm.sort(function(a, b) {
						return a.sales * 1 - b.sales * 1;
					})
					var data = [];
					var len = parm.length;

					var avg = 1 / len;
					var posArr = [];
					for(var m = 0; m < len; m++) {
						posArr.push([i + (m * avg), i + ((m + 1) * avg)]);
					}

					for(var k = 0; k < len; k++) {
						var o = parm[k];
						var rate = o.rate; //数组第二位,毛利率
						var sale = o.sales; //数组第三位，销量
						var area = (4 * len) * (k + 1); //数组第四位，根据销量生成圆圈大小
						var name = o.name; //数组第5️位，规格名称

						//数组第一位,生成x轴随机位置,规则：数据位于2个坐标点直接，如：一类(0,1),二类(1,2)..
						var pos = Math.random() * (i + 1);
						while(true) {
							var a = getPos(pos, posArr);
							var left = ((pos - i) * 125) - (area / 2); //左边距
							var right = ((i + 1 - pos) * 125) - (area / 2); //右边距
							if(getPos(pos, posArr) > -1 && left >= 0 && right > 0) {
								//								if(_pos > pos) {
								//									if(_left > right) {
								//										posArr.splice(a, 1);
								//										break;
								//									}
								//								} else {
								//									if(_right<left){
								//										posArr.splice(a, 1);
								//										break;
								//									}
								//								}
								posArr.splice(a, 1);
								break;
							}
							pos = Math.random() * (i + 1);
						}
						_pos = pos;
						_left = left;
						_right = right;
						data.push([pos, rate, sale, area, name])
					}
					datas.push({
						'data': data
					});

				}
				//console.log(JSON.stringify(datas))

				var option = {
					legend: {
						show: false
					},
					grid: {
						top: '30',
						left: '20',
						right: '20',
						bottom: '10',
						containLabel: true
					},
					color: ['rgb(7,222,155)'],
					tooltip: {
						padding: 10,
						borderWidth: 1,
						trigger: 'item',
						formatter: function(obj) {
							if(obj.componentType == 'series') {
								var data = obj.data;
								return obj.marker + data[4] + "<br />" + "毛利率" + data[1] + "%<br/>" + "销量" + data[2];
							}

						}
					},
					xAxis: {
						type: 'value',
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						},
						axisLine: {
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							textStyle: {
								color: '#fff',
								align: 'right'
							},
							formatter: function(o) {
								var txt = '';
								switch(o) {
									case 1:
										txt = '一类              ';
										break;
									case 2:
										txt = '二类              ';
										break;
									case 3:
										txt = '三类              ';
										break;
									case 4:
										txt = '四类              ';
										break;
									case 5:
										txt = '五类              ';
										break;
									default:
										break;
								}
								return txt;
							}
						},
						max: 5,
						min: 0,
						interval: 1
					},
					yAxis: {
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						},
						axisTick: {
							show: false
						},
						splitLine: {
							show: false,
							lineStyle: {
								color: '#fff',
								opacity: 0.2
							}
						},
						axisLabel: {
							formatter: function(o) {
								return o + '%';
							}
						},
						max: 50,
						min: 0,
						interval: 10
					},
					series: [{
							type: 'scatter',
							data: datas[0].data,
							symbolSize: function(value) {
								return value[3];
							},
							markLine: {
								itemStyle: {
									normal: {
										lineStyle: {
											type: 'solid',
											color: '#fff'
										}
									}
								},
								data: [
									[{
										coord: [0, '10']
									}, {
										coord: [5, '10']
									}]
								],
								symbolSize: 0,
								label: {
									normal: {
										show: true
									}
								}
							}
						},
						{
							type: 'scatter',
							data: datas[1].data,
							symbolSize: function(value) {
								return value[3];
							},
						},
						{
							type: 'scatter',
							data: datas[2].data,
							symbolSize: function(value) {
								return value[3];
							},
						},
						{
							type: 'scatter',
							data: datas[3].data,
							symbolSize: function(value) {
								return value[3];
							},
						},
						{
							type: 'scatter',
							data: datas[4].data,
							symbolSize: function(value) {
								return value[3];
							},
						}
					]
				};
				let chart = this.chart = echarts.init(this.$refs.chart);
				chart.setOption(option);
			},
			tableShowHide:function(){
				
			}
		},
		components: {
			boxBase,
			detailBtn
		},
		mounted() {
			this.drawChart();
		},
		beforeDestroy(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 2.56rem;
	}
</style>