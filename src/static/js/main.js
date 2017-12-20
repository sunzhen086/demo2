$(document).ready(function(){
	page().init();
})

var page = function (){

	function randomNum(Min, Max,scale) {
	  scale = scale || 0;
	  var Range = Max - Min;
	  var Rand = Math.random();

	  var num = Min + Number((Rand * Range).toFixed(scale));

	  return num.toFixed(scale);
	}

	var row2leftlinechart = function (){
		var chartId = "row2leftboxlinechart";
		var chart = echarts.init(document.getElementById(chartId));
		var option = {
			tooltip : {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985'
					}
				}
			},
			legend: {
				show: false
			},
			grid: {
				left: -50,
				right: 10,
				top: 10,
				bottom: 10,
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					boundaryGap : false,
					data : ['2010年','2011年','2012年','2013年','2014年','2015年','2016年'],
					axisLabel:{
						textStyle:{
							color:'#ffffff'
						}
					}
				}
			],
			yAxis : {
				show: false,
				min:1200000
			},
			series :[
				{
					name:'邮件营销',
					type:'line',
					stack: '总量',
					 areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0.4,
								color: 'rgba(43,128,207,1)'  
							}, {
								offset: 1,
								color: 'rgba(0,0,0,0)'
							}], false)
						}
					},
					data:[1273516, 1336213, 1287028, 1303556, 1331035, 1307078, 1359694],
					lineStyle: {
						normal: {
							width: 4,
							color: '#49D9FD'
						}
					},
					label:{
						normal:{
							show:true
						}
					},
					symbolSize:6,
					itemStyle:{
						normal:{
							color:'#49D9FD'
						}
					}
				},

			]
		}
		return {
			init: function(){
				console.log(option.series[0].data);
				chart.setOption(option);
			}
		}
	}


	var row2rightpiechart = function(){
		var chartId="row2rightpiechart";
		var chart = echarts.init(document.getElementById(chartId));
		var option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				show:false,
				// orient: 'vertical',
				// x: 'right',
				// y: 'center',
				// data:['内贸企业','内资企业','内投企业','外贸企业','外资企业','外投企业'],
				// textStyle:{
				// 	color:'#ffffff'
				// }
			},
			color:['#4141F2','#0E8BAD','#FFFFFF','#A9E0FF','#3B73C4','#3FC6F3'],
			series: [
				{
					name:'各类型企业占比',
					type:'pie',
					radius: ['50%', '60%'],
					avoidLabelOverlap: false,
					center: ['50%', '50%'],
					selectedMode:"single",
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '25',
								fontWeight: 'bold'
							},
							formatter:'{b}\n{d}%'
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					tooltip:{
						show:false
					},
					data:[
						{value:192000, name:'外贸企业'},
						{value:16609, name:'外资企业'},
						{value:16023, name:'外投企业'},
						{value:391399, name:'内贸企业'},
						{value:1339331, name:'内资企业'},
						{value:1323308, name:'内投企业'}
					]
				}
			]
		};

		function doAnimate(){
			var length = option.series[0].data.length;
			var cur = 0;
			var last = -1;
			chart.dispatchAction({type: 'highlight',dataIndex: cur});
			setInterval(function(){
				cur++;
				cur = cur < length ? cur : 0;
				last = cur - 1 < 0 ? length-1 : cur - 1;

				chart.dispatchAction({type: 'downplay',dataIndex: last});
				chart.dispatchAction({type: 'highlight',dataIndex: cur});
			},2000)

		}

		return {
			init:function(){
				chart.setOption(option);
				doAnimate();
			}
		}
	}

	var row2rightcolumnchart = function(){
		var chartId="row2rightcolumnchart";
		var chart = echarts.init(document.getElementById(chartId));
		var option = {
			color: ['#3398DB'],
			tooltip: {
				trigger: 'axis',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				left: -50,
				right: 10,
				top: 20,
				bottom: 10,
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				data:['内贸企业','内资企业','内投企业','外贸企业','外资企业','外投企业'],
				axisLabel:{
					textStyle:{
						color:'#ffffff'
					}
				}
			}],
			yAxis : {
				show: false
			},
			series: [{
					name: '直接访问',
					type: 'bar',
					barWidth: '40%',
					data: [1339331, 391399, 1323308,192000, 16609, 16023 ]
				},

			],

			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0.4,
						color: 'rgba(78,173,254,0.7)'  
					}, {
						offset: 1,
						color: 'rgba(43,128,207,1)'
					}], false)
				}
			}
		};

		return {
			init:function(){
				chart.setOption(option);
			}
		}
	}


	var row3leftmapchart = function(){
		var chartId1="row3leftmapchart1";
		var chartId2="row3leftmapchart2";
		var chart1 = echarts.init(document.getElementById(chartId1));
		var chart2 = echarts.init(document.getElementById(chartId2));
		var chartData = [
			{name: '广州市', value: randomNum(-20,20)},
			{name: '佛山市', value: randomNum(-20,20)},
			{name: '肇庆市', value: randomNum(-20,20)},
			{name: '云浮市', value: randomNum(-20,20)},
			{name: '阳江市', value: randomNum(-20,20)},
			{name: '茂名市', value: randomNum(-20,20)},
			{name: '珠海市', value: randomNum(-20,20)},
			{name: '中山市', value: randomNum(-20,20)},
			{name: '江门市', value: randomNum(-20,20)},
			{name: '东莞市', value: randomNum(-20,20)},
			{name: '深圳市', value: randomNum(-20,20)},
			{name: '惠州市', value: randomNum(-20,20)},
			{name: '汕尾市', value: randomNum(-20,20)},
			{name: '清远市', value: randomNum(-20,20)},
			{name: '河源市', value: randomNum(-20,20)},
			{name: '汕头市', value: randomNum(-20,20)},
			{name: '揭阳市', value: randomNum(-20,20)},
			{name: '潮州市', value: randomNum(-20,20)},
			{name: '韶关市', value: randomNum(-20,20)},
			{name: '梅州市', value: randomNum(-20,20)},
			{name: '湛江市', value: randomNum(-20,20)}
		];
		var geoCoordMap = { '清远市': [ '112.9175', '24.3292' ],
		  '韶关市': [ '113.7964', '24.7028' ],
		  '湛江市': [ '110.3577', '20.9894' ],
		  '梅州市': [ '116.1255', '24.1534' ],
		  '河源市': [ '114.917', '23.9722' ],
		  '肇庆市': [ '112.1265', '23.5822' ],
		  '惠州市': [ '114.6204', '23.1647' ],
		  '茂名市': [ '111.0059', '22.0221' ],
		  '江门市': [ '112.6318', '22.1484' ],
		  '阳江市': [ '111.8298', '22.0715' ],
		  '云浮市': [ '111.7859', '22.8516' ],
		  '广州市': [ '113.5107', '23.2196' ],
		  '汕尾市': [ '115.5762', '23.0438' ],
		  '揭阳市': [ '116.1255', '23.313' ],
		  '珠海市': [ '113.7305', '22.1155' ],
		  '佛山市': [ '112.8955', '23.1097' ],
		  '潮州市': [ '116.7847', '23.8293' ],
		  '汕头市': [ '117.1692', '23.3405' ],
		  '深圳市': [ '114.5435', '22.5439' ],
		  '东莞市': [ '113.8953', '22.901' ],
		  '中山市': [ '113.4229', '22.478' ] 
		}
		var option1 = {
			visualMap: {
				type: 'piecewise', 
				min: -20,
				max: 20,
				right: 40,
				top: 'bottom',
				calculable: true,
				inRange: {
					color: ['#c3e6f7', '#5bc2e0','#469dd7','#3b7fc2','#3c479b'],
				},
				textStyle:{
					color:"#ffffff"
				}
			},
			series: [
				{
					top:10,
					type: 'map',
					mapType: 'guangdong',
					label: {
						normal: {
							show: false,
							textStyle: {
								color: '#fff'
							}
						},
						emphasis: {
							show: false,
							textStyle: {
								color: '#fff',
								fontSize: 12
							}
						}
					},
					itemStyle: {
						normal: {
							borderColor: '#389BB7',
							areaColor: 'rgb(36, 138, 68)'
						},
						emphasis: {
							areaColor: '#389BB7',
							borderWidth: 0
						}
					},
					animation: false,
					data:chartData,
				}
			]
		}

		var option2 = {
			geo: {
			  map: 'guangdong',
			  show:false,
			  top:10
			},
			series:[{
					name:"top3",
					type: 'effectScatter',
					coordinateSystem: 'geo',
					zlevel: 10,
					rippleEffect: {
					  brushType: 'stroke',
					  scale: 10,
					  period: 5
					},
					label: {
					  normal: {
						  show: true,
						  position: 'right',
						  formatter: '{b}',
						  textStyle:{
							color:'#E5B210',
							fontSize:16,
							fontWeight:"bold"
						  }
					  }
					},
					itemStyle: {
						normal: {
						  color: '#E5B210'
						}
					},
					symbolSize: function(val) {
					  return val[2];
					},
					data: chartData.sort(function(a,b){
						return b.value - a.value
					}).filter(function(_,i){
						return i < 3;
					}).map(function(dataItem) {
						return {
						  name: dataItem.name,
						  value: geoCoordMap[dataItem.name].concat([dataItem.value])
						};
					})
				}
			]
		}
		

		return {
			init:function(){
				echarts.registerMap('guangdong', guangdong_geoJson_data);//map.js
				chart1.setOption(option1);
				chart2.setOption(option2);
			}
		}
	}

	var row3righttable = function(){
		var $table = $("#row3righttable");
		var options = {};
		var data = [
			[ '广州市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '佛山市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ]  ],
			[ '肇庆市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ]  ],
			[ '云浮市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '阳江市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '茂名市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '珠海市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '中山市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '江门市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(30000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '东莞市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(30000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '深圳市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(30000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '惠州市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(30000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '汕尾市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(30000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '清远市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(30000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '河源市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(30000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '汕头市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(30000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '揭阳市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(30000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '潮州市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(30000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '韶关市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(30000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '梅州市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(30000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ],
			[ '湛江市', [randomNum(30000,300000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ], [ randomNum(30000,60000), randomNum(-2,5,2) ], [ randomNum(10000,60000), randomNum(-2,5,2) ] ] 
		];

		return {
			init:function(){
				$table.kytable(options,data);
			}
		}
	}


	return {
		init: function(){
			row2leftlinechart().init();
			row2rightpiechart().init();
			row2rightcolumnchart().init();
			row3leftmapchart().init();
			row3righttable().init();
		}
	}
}
