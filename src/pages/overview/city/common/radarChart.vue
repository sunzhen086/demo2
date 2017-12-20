<template>
    <box-base class="leftBox">
    	<div slot="box-title">
			<p class="title">西安市销售整体情况对比</p>
		</div>
		<div slot="box-extend">
			<link-btn @on-click="detailClick"></link-btn>
		</div>
		<div class="content">
			<div ref="radarChart" class="radarChart"></div>
		</div>
    </box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import detailBtn from 'components/detailbutton/detail-button.vue';
	import linkBtn from 'components/detailbutton/link-button.vue'
	import echarts from 'echarts';
	export default{
		data(){
			return {
				itemData:['西安','安康','咸阳','商洛','汉中','宝鸡','杨凌','铜川','榆林','延安','渭南'],
				valueData:[
	               { text: '销量（%）', max: 100},
	               { text: '三类以上（%）', max: 100},
	               { text: '重点品牌（%）', max: 100},
	               { text: '单箱（%）', max: 100},
	               { text: '收入（%）', max: 100}
	            ],
	            itemValue:[
	                {
	                    value : [95, 80, 75, 85, 60, 65],
	                    name : '西安'
	                },
	                {
	                    value : [90, 85, 65, 55, 30, 45],
	                    name : '安康'
	                },
	                {
	                    value : [30, 35, 45, 45, 50, 55],
	                    name : '咸阳'
	                },
	                {
	                    value : [35, 40, 55, 65, 70, 65],
	                    name : '商洛'
	                },
	                {
	                    value : [85, 70, 65, 55, 40, 35],
	                    name : '汉中'
	                },
	                {
	                    value : [15, 30, 55, 75, 90, 65],
	                    name : '宝鸡'
	                },
	                {
	                    value : [25, 40, 75, 65, 70, 65],
	                    name : '杨凌'
	                },
	                {
	                    value : [35, 40, 55, 65, 70, 85],
	                    name : '铜川'
	                },
	                {
	                    value : [55, 60, 75, 85, 80, 65],
	                    name : '榆林'
	                },
	                {
	                    value : [35, 60, 95, 15, 30, 55],
	                    name : '延安'
	                },
	                {
	                    value : [25, 40, 65, 85, 30, 75],
	                    name : '渭南'
	                },
	            ]
			}
		},
		components: {
			boxBase,
			detailBtn,
			linkBtn,
		},
		methods:{
			detailClick:function(){
				
			},
			draw:function(){
				var itemData = [];
				for(var i=0;i<this.itemData.length;i++){
					var tmp ={
						name: this.itemData[i],
						icon:"line",
					};
					itemData.push(tmp);
				}
				var option = {
				    tooltip : {
				        trigger: 'item'
				    },
				    legend: {
				        orient : 'vertical',
				        right : '3%',
				        top:'15%',
				        height : '260',
				        data:itemData,
				        textStyle:{
				        	color:'#fff',
				        	fontSize:14
				        }
				    },
				    textStyle:{
						fontSize:14
					},
				    radar : [
				       {	
				       		center:['44%','53%'],
				           	indicator : this.valueData,
				           	axisLine:{
				           		lineStyle:{
				            		color:'#fff',
				            		opacity:0.3
				            	},
				            	show:false
				           	},
				            splitLine:{
				            	lineStyle:{
				            		color:'#fff',
				            		opacity:0.3
				            	}
				            },
				            splitArea:{
				            	areaStyle:{
				            		color:'none'//rgba(15,42,97,0)
				            	}
				            }
				        }
				    ],
				    calculable : true,
				    series : [
				        {
				            name: '西安市销售整体情况对比',
				            type: 'radar',
				            lineStyle:{
				            	normal:{
				            		width:2
				            	}
				            },
				            itemStyle:{
				            	normal:{
				            		color:function(params){
				            			var list = [
				            				'#f9ff29','#5bff43','#ff2992','#26fcff','#005eff',
				            				'#ff6a6c','#ffa647','#25c4ff','#e450ff','#8208ff',
				            				'#ffaeda',
				            			];
				            			return list[params.dataIndex];
				            		}
				            	}
				            },
				            data : this.itemValue
				        }
				    ]
				};
                let chart = this.chart = echarts.init(this.$refs.radarChart)
				chart.setOption(option);  
				for(var i=3;i<itemData.length;i++){
					chart.dispatchAction({
					    type: 'legendUnSelect',
					    name: itemData[i].name
					});
				}
			}
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
	.leftBox{
		.content{
			.radarChart{
				width: 5.5rem;
				height:3.22rem;
			}
		}
	}
	
</style>