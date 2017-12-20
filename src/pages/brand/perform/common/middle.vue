<template>
	<box-base  >
		<div class="top-tab">
				<tab-base :option="paneOption" @tab-click="tabClick"></tab-base>
				<link-btn class="topRightMenu" @on-click=""></link-btn>
			</div>
		
		<div class="content" >
			<template v-if="dataType == 'allData1'">
				<middle-Content :allData=allData1></middle-Content>
			</template>
			<template v-if="dataType== 'allData2'">
				<middle-Content :allData=allData2></middle-Content>
			</template>
			<template v-if="dataType == 'allData3'">
				<middle-Content :allData=allData3></middle-Content>
			</template>
			<template v-if="dataType == 'allData4'">
				<middle-Content :allData=allData4></middle-Content>
			</template>
			<template v-if="dataType == 'allData5'">
				<middle-Content :allData=allData5></middle-Content>
			</template>
			
			
		</div>
	</box-base>
</template>


<script>
	
	import echarts from 'echarts';
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import barChart from './barChart.vue';
	import fillChart from './fillChart.vue';
	import middleContent from './middleContent.vue';
	import linkBtn from 'components/detailbutton/link-button.vue';
	
	export default {
		data() {
			return {
				
				paneOption: {
					data:[
						{
							key: 'allData1',
							text: '销量前15品牌'
						},
						{
							key: 'allData2',
							text: '销售收入前15品牌'
						},
						{
							key: 'allData3',
							text: '销量三类以上前15品牌'
						},
						{
							key: 'allData4',
							text: '重点品牌'
						},
						{
							key: 'allData5',
							text: '重点品牌三类以上'
						},
					],
					activePane: 'allData1'
				},
				dataType:"allData1",
				allData1:{
					unit:'箱',
					zxiaoliang:'211479',
					detailName:'同比销量',
					xiaoliang:'5402',
					tbrate:'2.62',
					zlrate:'36.34',
					tqrate:'0.9',
					rankType:'1',//左一图的上升下降
					rankType1:'1',//左二图的上升下降
					chartData1: {
						xLineData: ['芙蓉王','利群','云烟','白沙','黄鹤楼','南京','红塔山','中华','娇子','双喜','泰山','玉溪','黄山','黄金叶','七匹狼','红双喜'],
						'data1': {
							name: '本期（箱）',
							type:'bar',
							color:'#22efbd',
							
							datas: [
								45997.08,32118.01,22790.20,20783.36,17720.06,16302.17,16011.92,13953.09,7968.30,4847.41,3249.65,3184.42,2979.49,2698.07,740.30,135.42

							]
						},
						'data2': {
							name: '同期（箱）',
							type:'bar',
							color:'#005eff',
							datas: [
								45037.29 ,25971.23 ,25400.89 ,22702.88 ,16351.20 ,11527.40 ,17654.82 ,15225.17 ,7257.11 ,6053.49 ,3303.11 ,3054.51 ,3017.04 ,2217.46 ,1038.75 ,263.99 
							]
						},
						'data3': {
							name: '同比',
							type:'line',
							color:'#efb90f',
							datas: [
								2.13,2.36,-10.27,-8.45,8.37,4.14,-9.30,-8.35,9.79,-19.92,-1.61,4.25,-1.24,21.67,-28.73,-48.70
							]	
						}	
					},
					chartData2: {
						xLineData: ['201606', '07', '08', '09', '10','11','12','201701','02','03','04','05'],
						'data1': {
							name: '总销量（箱）',
							type:'line',
							color:'#efb90f',
							areaStyle: {
					            normal: {
					                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					                    offset: 0,
					                    color: 'rgba(239, 185, 15, 0.8)'
					                }, {
					                    offset: 0.8,
					                    color: 'rgba(239, 185, 15, 0.2)'
					                }], false),
					                shadowColor: 'rgba(0, 0, 0, 0.1)',
					                shadowBlur: 10
					            }
						     },
							datas: [
								112553.9068,103768.7999,130833.7329,136446.6694,114765.8913,136882.2727,135169.8003,173601.8807,85675.2996,111266.404,100125.5163,111293.5024
							]
						},
						'data2': {
							name: '前15（箱）',
							type:'line',
							color:'#f94800',
							areaStyle: {
				          		normal: {
					                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					                    offset: 0,
					                    color: 'rgba(249, 72, 0, 0.8)'
					                }, {
					                    offset: 0.8,
					                    color: 'rgba(249, 72, 0, 0.2)'
					                }], false),
					                shadowColor: 'rgba(0, 0, 0, 0.1)',
					                shadowBlur: 10
				            	}
				       	 	},
							datas: [
								43382.0284, 38248.2490, 44695.5868, 47217.7350, 38802.7186, 44376.8026, 44745.2434, 61930.5014, 31247.0016, 38614.1186, 35962.4026, 43724.9006 
							]
						}
					},
			
					fillChart: [{
						text: '',
						data: [{
							name: '',
							value: '0.3634'
						}]
					}]
				},
				allData2:{
					unit:'万元',
					zxiaoliang:'927348',
					detailName:'同比收入',
					xiaoliang:'48961',
					tbrate:'5.57',
					zlrate:'55.46',
					tqrate:'-0.19',
					rankType:'1',
					rankType1:'-1',//左二图的上升下降
					chartData1: {

						xLineData: ['芙蓉王','中华','利群','黄鹤楼','南京','云烟','白沙','红塔山','苏烟','玉溪','黄金叶','双喜','贵烟','黄山','七匹狼','红双喜'],
						'data1': {
							name: '本期（万元）',
							type:'bar',
							color:'#22efbd',
							
							datas: [
								253684.62 ,170496.30 ,104825.80 ,90234.92 ,83319.16 ,64109.10 ,54891.79 ,28874.51 ,20972.04 ,16255.15 ,14463.84 ,8467.37 ,8423.33 ,6593.82 ,1369.07 ,367.05 
							]
						},
						'data2': {
							name: '同期（万元）',
							type:'bar',
							color:'#005eff',
							datas: [
								247791.11 ,184401.74 ,83965.81 ,77275.63 ,58925.14 ,67839.32 ,52744.61 ,32184.74 ,22761.71 ,15728.33 ,10140.67 ,10705.53 ,5805.41 ,5733.54 ,1734.86 ,647.95 
							]
						},
						'data3': {
							name: '同比',
							type:'line',
							color:'#efb90f',
							datas: [
								2.38,-7.54,24.84,16.77,41.4,-5.5,4.07,-10.29,-7.86,3.35,42.63,-20.91,45.09,15,-21.08,-43.35
							]	
						}	
					},
					chartData2: {
						xLineData: ['201606', '07', '08', '09', '10','11','12','201701','02','03','04','05'],
						'data1': {
							name: '总销售收入（万元）',
							type:'line',
							color:'#efb90f',
							areaStyle: {
					            normal: {
					                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					                    offset: 0,
					                    color: 'rgba(239, 185, 15, 0.8)'
					                }, {
					                    offset: 0.8,
					                    color: 'rgba(239, 185, 15, 0.2)'
					                }], false),
					                shadowColor: 'rgba(0, 0, 0, 0.1)',
					                shadowBlur: 10
					            }
						     },
							datas: [
								299251.51 ,263818.99 ,340599.79 ,370821.19 ,299769.14 ,352571.70 ,346826.98 ,541377.76 ,234818.56 ,299023.64 ,282850.15 ,314115.85 
							]
						},
						'data2': {
							name: '前15（万元）',
							type:'line',
							color:'#f94800',
							areaStyle: {
				          		normal: {
					                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					                    offset: 0,
					                    color: 'rgba(249, 72, 0, 0.8)'
					                }, {
					                    offset: 0.8,
					                    color: 'rgba(249, 72, 0, 0.2)'
					                }], false),
					                shadowColor: 'rgba(0, 0, 0, 0.1)',
					                shadowBlur: 10
				            	}
				       	 	},
							datas: [
								164972.52 ,146237.89 ,181574.85 ,203122.52 ,156199.42 ,181596.79 ,190798.79 ,301074.94 ,134439.24 ,160324.04 ,150882.71 ,180626.94 
							]
						}
					},
			
					fillChart: [{
						text: '',
						data: [{
							name: '',
							value: '0.5546'
						}]
					}]
				},
				allData3:{
					unit:'箱',
					zxiaoliang:'198530',
					detailName:'同比销量',
					xiaoliang:'9297',
					tbrate:'4.91',
					zlrate:'93.88',
					tqrate:'2.05',
					rankType:'1',
					rankType1:'1',
					chartData1: {
						xLineData: ['芙蓉王','利群','云烟','黄鹤楼','白沙','南京','红塔山','中华','双喜','玉溪','苏烟','黄金叶','贵烟','黄山','七匹狼','红双喜'],
						'data1': {
							name: '本期（箱）',
							type:'bar',
							color:'#22efbd',
							
							datas: [
								45997.08 ,32118.01 ,22790.20 ,17611.03 ,17048.36 ,16302.17 ,16011.92 ,13953.09 ,4847.41 ,3184.42 ,2885.96 ,2698.07 ,1699.37 ,980.42 ,267.53 ,135.42 
							]
						},
						'data2': {
							name: '同期（箱）',
							type:'bar',
							color:'#005eff',
							datas: [
								45037.29 ,25971.23 ,25400.89 ,16187.14 ,15475.10 ,11527.40 ,17654.82 ,15225.17 ,6053.49 ,3054.51 ,2988.77 ,2217.46 ,1267.09 ,628.29 ,280.56 ,263.99 

							]
						},
						'data3': {
							name: '同比',
							type:'line',
							color:'#efb90f',
							datas: [
								2.13 ,23.67 ,-10.28 ,8.80 ,10.17 ,41.42 ,-9.31 ,-8.36 ,-19.92 ,4.25 ,-3.44 ,21.67 ,34.12 ,56.04 ,-4.64 ,-48.70  

							]	
						}	
					},
					chartData2: {
						xLineData: ['201606', '07', '08', '09', '10','11','12','201701','02','03','04','05'],
						'data1': {
							name: '总销量（箱）',
							type:'line',
							color:'#efb90f',
							areaStyle: {
					            normal: {
					                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					                    offset: 0,
					                    color: 'rgba(239, 185, 15, 0.8)'
					                }, {
					                    offset: 0.8,
					                    color: 'rgba(239, 185, 15, 0.2)'
					                }], false),
					                shadowColor: 'rgba(0, 0, 0, 0.1)',
					                shadowBlur: 10
					            }
						     },
							datas: [
							43382.03  ,38248.25  ,44695.59  ,47217.74  ,38802.72  ,44376.80  ,44745.24  ,61930.50  ,31247.00  ,38614.12  ,35962.40  ,43724.90  

							]
						},
						'data2': {
							name: '前15（箱）',
							type:'line',
							color:'#f94800',
							areaStyle: {
				          		normal: {
					                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					                    offset: 0,
					                    color: 'rgba(249, 72, 0, 0.8)'
					                }, {
					                    offset: 0.8,
					                    color: 'rgba(249, 72, 0, 0.2)'
					                }], false),
					                shadowColor: 'rgba(0, 0, 0, 0.1)',
					                shadowBlur: 10
				            	}
				       	 	},
							datas: [
							38440.05  ,34511.66  ,40596.14  ,43031.77  ,35613.24  ,40722.11  ,41664.01  ,59125.14  ,29213.37  ,35784.63  ,33594.04  ,40813.26  

							]
						}
					},
			
					fillChart: [{
						text: '',
						data: [{
							name: '',
							value: '0.9388'
						}]
					}]
				},
				allData4:{
					unit:'箱',
					zxiaoliang:'447286',
					detailName:'同比销量',
					xiaoliang:'16350' ,
					tbrate:'3.79',
					zlrate:'76.86',
					tqrate:'2.79',
					rankType:'1',
					rankType1:'1',
					chartData1: {
						xLineData: ['好猫','延安','芙蓉王','利群','云烟','白沙','兰州','黄鹤楼','南京','红塔山','中华','娇子','双喜','红河','泰山','玉溪','黄山','苏烟','黄金叶','长白山','贵烟','红金龙','天子','中南海','钻石','七匹狼','龙凤呈祥','金圣','红双喜','金桥','真龙'],
						rotate:45,
						'data1': {
							name: '本期（箱）',
							type:'bar',
							color:'#22efbd',
							datas: [
								143379.96 ,55136.56 ,45997.08 ,32118.01 ,22790.20 ,20783.36 ,19699.00 ,17720.06 ,16302.17 ,16011.92 ,13953.09 ,7968.30 ,4847.41 ,4396.72 ,3249.65 ,3184.42 ,2979.49 ,2885.96 ,2698.07 ,2216.85 ,1699.37 ,1578.56 ,1434.88 ,1422.09 ,857.18 ,740.30 ,471.61 ,384.51 ,135.42 ,123.71 ,120.84 
							]
						},
						'data2': {
							name: '同期（箱）',
							type:'bar',
							color:'#005eff',
							datas: [
								137623.74 ,54548.95 ,45037.29 ,25971.23 ,25400.89 ,22702.88 ,18972.01 ,16351.20 ,11527.40 ,17654.82 ,15225.17 ,7257.11 ,6053.49 ,1620.94 ,3303.11 ,3054.51 ,3017.04 ,2988.77 ,2217.46 ,2353.52 ,1267.09 ,2055.39 ,413.61 ,1616.54 ,772.14 ,1038.75 ,154.54 ,318.51 ,263.99 ,0.00 ,154.88 
							]
						},
						'data3': {
							name: '同比',
							type:'line',
							color:'#efb90f',
							datas: [
								4.18,1.08,2.13,23.67,-10.28,-8.45,3.83,8.37,41.42,-9.31,-8.36,9.8,-19.92,171.25,-1.62,4.25,-1.24,-3.44,21.67,-5.81,34.12,-23.2,246.91,-12.03,11.01,-28.73,205.18,20.72,-48.7,0,-21.98
							]	
						}	
					},
					chartData2: {
						xLineData: ['201606', '07', '08', '09', '10','11','12','201701','02','03','04','05'],
						'data1': {
							name: '总销量（箱）',
							type:'line',
							color:'#efb90f',
							areaStyle: {
					            normal: {
					                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					                    offset: 0,
					                    color: 'rgba(239, 185, 15, 0.8)'
					                }, {
					                    offset: 0.8,
					                    color: 'rgba(239, 185, 15, 0.2)'
					                }], false),
					                shadowColor: 'rgba(0, 0, 0, 0.1)',
					                shadowBlur: 10
					            }
						     },
							datas: [
								112553.91 ,103768.80 ,130833.73 ,136446.67 ,114765.89 ,136882.27 ,135169.80 ,173601.88 ,85675.30 ,111266.40 ,100125.52 ,111293.50 
							]
						},
						'data2': {
							name: '前15（箱）',
							type:'line',
							color:'#f94800',
							areaStyle: {
				          		normal: {
					                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					                    offset: 0,
					                    color: 'rgba(249, 72, 0, 0.8)'
					                }, {
					                    offset: 0.8,
					                    color: 'rgba(249, 72, 0, 0.2)'
					                }], false),
					                shadowColor: 'rgba(0, 0, 0, 0.1)',
					                shadowBlur: 10
				            	}
				       	 	},
							datas: [
								84971.56 ,76239.84 ,97573.15 ,102313.11 ,86757.56 ,98640.29 ,93932.34 ,134720.09 ,63402.11 ,83974.32 ,79169.67 ,86020.53 
							]
						}
					},
			
					fillChart: [{
						text: '',
						data: [{
							name: '',
							value: '0.7686'
						}]
					}]
				},
				allData5:{
					unit:'箱',
					zxiaoliang:'386360',
					detailName:'同比销量',
					xiaoliang:'28342',
					tbrate:'7.92',
					zlrate:'66.39',
					tqrate:'4.85',
					rankType:'1',
					rankType1:'1',
					chartData1: {
						xLineData: ['好猫','芙蓉王','利群','云烟','黄鹤楼','白沙','南京','红塔山','兰州','中华','娇子','延安','双喜','红河','玉溪','泰山','苏烟','黄金叶','长白山','贵烟','天子','中南海','黄山','钻石','龙凤呈祥','金圣','七匹狼','红双喜','金桥','真龙','红金龙'],
						rotate:45,
						'data1': {
							name: '本期（箱）',
							type:'bar',
							color:'#22efbd',
							
							datas: [
								143379.96 ,45997.08 ,32118.01 ,22790.20 ,17611.03 ,17048.36 ,16302.17 ,16011.92 ,15207.22 ,13953.09 ,7968.30 ,6817.63 ,4847.41 ,4396.72 ,3184.42 ,3080.71 ,2885.96 ,2698.07 ,2216.85 ,1699.37 ,1434.88 ,1422.09 ,980.42 ,770.20 ,471.61 ,384.51 ,267.53 ,135.42 ,123.71 ,120.84 ,35.11 
							]
						},
						'data2': {
							name: '同期（箱）',
							type:'bar',
							color:'#005eff',
							datas: [
								137623.74 ,45037.29 ,25971.23 ,25400.89 ,16187.14 ,15475.10 ,11527.40 ,17654.82 ,13154.46 ,15225.17 ,7257.11 ,293.25 ,6053.49 ,1620.94 ,3054.51 ,3299.21 ,2988.77 ,2217.46 ,2353.52 ,1267.09 ,413.61 ,1616.54 ,628.29 ,524.64 ,154.54 ,318.51 ,280.56 ,263.99 ,0.00 ,154.88 ,0.00 
							]
						},
						'data3': {
							name: '同比',
							type:'line',
							color:'#efb90f',
							datas: [
							4.18,2.13,23.67,-10.28,8.8,10.17,41.42,-9.31,15.61,-8.36,9.8,2224.84,-19.92,171.25,4.25,-6.62,-3.44,21.67,-5.81,34.12,246.91,-12.03,56.04,46.81,205.18,20.72,-4.64,-48.7,0,-21.98,0
							]	
						}	
					},
					chartData2: {
						xLineData: ['201606', '07', '08', '09', '10','11','12','201701','02','03','04','05'],
						'data1': {
							name: '总销量（箱）',
							type:'line',
							color:'#efb90f',
							areaStyle: {
					            normal: {
					                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					                    offset: 0,
					                    color: 'rgba(239, 185, 15, 0.8)'
					                }, {
					                    offset: 0.8,
					                    color: 'rgba(239, 185, 15, 0.2)'
					                }], false),
					                shadowColor: 'rgba(0, 0, 0, 0.1)',
					                shadowBlur: 10
					            }
						     },
							datas: [
								112553.91 ,103768.80 ,130833.73 ,136446.67 ,114765.89 ,136882.27 ,135169.80 ,173601.88 ,85675.30 ,111266.40 ,100125.52 ,111293.50 
							]
						},
						'data2': {
							name: '前15（箱）',
							type:'line',
							color:'#f94800',
							areaStyle: {
				          		normal: {
					                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					                    offset: 0,
					                    color: 'rgba(249, 72, 0, 0.8)'
					                }, {
					                    offset: 0.8,
					                    color: 'rgba(249, 72, 0, 0.2)'
					                }], false),
					                shadowColor: 'rgba(0, 0, 0, 0.1)',
					                shadowBlur: 10
				            	}
				       	 	},
							datas: [
								
								73966.31 ,62536.53 ,81039.98 ,85623.61 ,71474.88 ,82876.95 ,75796.78 ,120836.41 ,51623.43 ,69906.09 ,69861.42 ,74133.42 
							]
						}
					},
			
					fillChart: [{
						text: '',
						data: [{
							name: '',
							value: '0.6639'
						}]
					}]
				},
			}
		},
		
		components: {
			boxBase,
			tabBase,
			barChart,
			fillChart,
			middleContent,
			linkBtn
		},
		methods:{
			tabClick:function(key){
				//alert(key);
				this.dataType = key;	
				//alert(this.dataType);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../../../styles/variables.scss';
	.top-tab{
		height:0.28rem;
		.topRightMenu {
				float: right;
			}
		/*.topRightMenu {
			width: 0.33rem;
			height: 0.28rem;
			float: right;
			margin-right: -0.1rem;
			cursor: pointer;
			background-image: url(../../../../static/img/overview/province/tableBtn.png);
		}*/
	}
	.tabClass{
		float: left;
		margin-left: 0.1rem;
	}
	.content{
		//height: 3.55rem;
		overflow:hidden;
		
	}
		
	
</style>