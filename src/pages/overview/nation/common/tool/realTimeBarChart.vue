<template>
	<div class="chart" ref="chart">

	</div>
</template>

<script>
	
	import echarts from 'echarts';
	import bus from './bus.js';
	export default {
		props: {
			chartData: Object //这样可以指定传入的类型，如果类型不对，会警告
		},
		data() {
			return {
				status:'ok'			
			}
		},
		methods: {
			drawLine: function() {
				var that = this;
				var base = +new Date(2017, 7, 11, 0);
				var oneDay = 60000;
				var xLineData = [];
				var yLineData = [];
				var nowDate = new Date();
				for (var i = 0; i < nowDate.getHours()*60+nowDate.getMinutes(); i++) {
				    var now = new Date(base += oneDay);
				    xLineData.push([now.getHours(), now.getMinutes() == 0 ?(now.getMinutes()+"0"):now.getMinutes() ].join(':'));
				    if(i>540 && i<780){
				    	yLineData.push(Math.floor(Math.random() * (10) + 30));
				    }else if(i<440){
				    	yLineData.push(Math.floor(Math.random()*2));
				    }else {
				    	yLineData.push(Math.floor(Math.random() * (5) ));
				    }
				    
				}
				xLineData.unshift(0.0);
				
				var option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						},
						 formatter: function(params) {//展示浮动框的内容
							var str = params[0].name+"<br/>";	
							
				            for (var i = 0, l = params.length; i < l; i++) {
				            	str += "订单数（笔）："+parseFloat(params[i].value).toFixed(2)+"</br>";
				            }
							
							return str;
						}
						
					},
					legend: {
						right: 0,
						hight:20,
						//orient: 'vertical',//图例竖排
						top:30
						
					},
					grid: {//画出的图的大小
						//width:604,
						height:130,
						left: 0,
						right: 40,
						top: 30,
						bottom: 0,
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						boundaryGap: true,
						
						data: xLineData,
						axisLine: {
							
							lineStyle: {
								color: '#fff', //x轴颜色
								opacity: 0.2
							}
						},
						axisLabel: {
							interval:119,  
							//rotate: that.chartData.rotate,
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
					yAxis: [{
						type: 'value',
						//name: that.chartData.data1.name,
						position: 'left',
						splitLine: {
							show: true,
							lineStyle: {
								color: '#fff', //y轴分割线颜色
								opacity: 0.2
							}
						},
						axisLabel: {//纵坐标轴的属性
							textStyle: {
								color: '#fff'
							},
							formatter: function(v){
								return  v.toFixed(0);
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
						}
						
					}],
					series: [{
						name: '',
						barWidth: 5,//柱子宽度
						type: 'bar',
						smooth: true,
						yAxis: 1, //主坐标轴
						color:['#22efdd'],
						data: yLineData
					}]
				};
				let chart = this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart);//初始化
				chart.setOption(option);
				var timer = this.timer = setInterval(function () {
				    var now = new Date(base += oneDay);//*(nowDate.getHours()*60+nowDate.getMinutes())
				    xLineData.splice(1,1);
				    xLineData.push([now.getHours(), now.getMinutes() == 0 ?(now.getMinutes()+"0"):now.getMinutes()].join(':'));
				    yLineData.push(Math.floor(Math.random() * (10) + 10));
				    
					xLineData.unshift(0.0);
					
					    chart.setOption({
					    	xAxis:{
					    		data:xLineData
					    	},
					    	series: [{
							data: yLineData
						}]
					    });
					}, 1000);//开发需要改成和oneDay一致的时间
				
			}
		},
		mounted() {//页面初始化进来调用
			this.drawLine();
		},
		watch:{//数据变化监控
			status:function(){
				this.drawLine();
			}
		},
		beforeDestroy(){//销毁
			
			this.chart.dispose();
			clearInterval(this.timer);
		},
		created(){
			var that =this;
			bus.$on('stopTimmer',function(obj){
				if(obj){
					clearInterval(that.timer);
					//that.chart.dispose();
				}else{
					console.log(">>>")
					try{
						that.drawLine();
					}catch(e){
						that.status='error';
					}
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../../styles/variables.scss';

	.chart {
		//margin-top: 0.3rem;
		//margin-bottom: 0.3rem;
		height: 1.7rem;
	}

</style>