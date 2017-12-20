<template>
	<div class="main cma">
		<top></top>
		<div class="main-body">
		  	<div class="left-part left">
		  		<leftList v-bind:boxData = "boxData"></leftList>
		  	</div>
		  	<div class="middle-part left">
				<middle v-bind:companyData = "companyData"></middle>		  	
		  	</div>
		  	<div class="right-part left">
		  		<rightList :boxData = "rightBoxData"></rightList>
		  	</div>
		</div>
	</div>
	
</template>

<script>
	import top from './common/top.vue';
	import leftList from './common/leftList.vue';
	import middle from './common/middle.vue';
	import rightList from './common/rightList.vue';
	
	export default {
		data() {
			return {
				boxData:[
					{
						title:'价格指数',
						content:'94.49',
						unit: '',//填写单位，没有则为空
						huanBiFlag:'0', //0:表示环比增加,1:表示环比减少
						huanBiData:'0.3',
						chartData:[
							['2016','2017'],//填写标尺
			       			['84.33','83.76','82.95','82.93','84.60','87.16','85.86','87.18','90.12','92.66','92.93','93.02'],
			       			['93.11','92.72','93.63','93.76','94.19','94.49'],
			       			[80,100,10]//填写y轴的起始值、结束值、间隔值
			       		]
					},
					{
						title:'社会库存',
						content:'7.02',
						unit: '万箱',//填写单位，没有则为空
						huanBiFlag:'1', //0:表示环比增加,1:表示环比减少
						huanBiData:'0.35',
						chartData:[
			       			['2016','2017'],//填写标尺
			       			['3.42','3.60','4.36','4.49','4.43','5.91','4.15','5.61','7.01','8.50','10.04','12.28'],
			       			['11.64','8.91','8.42','8.37','7.37','7.02'],
			       			[0,15,5]
			       		]
					},
					{
						title:'社会存销比',
						content:'1.06',
						unit: '',//填写单位，没有则为空
						huanBiFlag:'0', //0:表示环比增加,1:表示环比减少
						huanBiData:'0.36',
						chartData:[
			       			['2016','2017'],//填写标尺
			       			['0.52','0.54','1.26','0.77','0.69','0.75','0.52','0.50','0.78','0.88','0.74','1.00'],
			       			['1.14','0.82','0.99','1.07','0.70','1.06'],
			       			[0,1.5,0.5]
			       		]
					}
				],
				companyData:[
					{
						title:'价格指数',
						unit: '',//填写单位，没有则为空
						leftTopInfo11: '全省价格指数环比略有上升',
						leftTopInfo21: '6',
						leftTopInfo22: '家单位处于稍紧平衡状态',
						mapChartData:[//填写地图中用到的地市数据
							{name: '榆林市', value: 84.33},
							{name: '延安市', value: 83.76},
							{name: '咸阳市', value: 82.95},
							{name: '铜川市', value: 84.60},
							{name: '渭南市', value: 87.16},
							{name: '宝鸡市', value: 85.86},
							{name: '西安市', value: 87.18},
							{name: '商洛市', value: 90.12},
							{name: '汉中市', value: 95.66},
							{name: '安康市', value: 92.93},
							{name: '杨凌示范区', value: 90.93}
			       		],
			       		pieces: [//填写数值的分段格式，用于地图旁边的分段文字说明
							{min: 100},
						    {min: 95, max: 100},
						    {min: 85, max: 95},
						    {min: 80, max: 85},
						    {max: 80},
						],
						color: [//填写分段文字的颜色数组
							'rgb(27,70,172)',
							'rgb(59,84,166)', 
							'rgb(65,143,205)',
							'rgb(86,185,224)',
							'rgb(195,231,247)'
						],
						lineBarChartData:[//填写地图下方图表中用到的地市数据,地市、同期、本期、环比、y轴标尺
							['榆林','延安','咸阳','铜川','渭南','宝鸡','西安','商洛','汉中','安康'],
							[82.23,84.09,85.12,88.94,87.03,86.09,85.93,91.32,93.09,90.95],
							[84.33,83.76,82.95,84.60,87.16,85.86,87.18,90.12,95.66,92.93],
							[2.1,-0.33,-2.17,-4.34,0.13,-0.23,1.25,-1.2,2.57,1.98],
			       			[80,100,5]
			       		]
					},
					{
						title:'社会库存',
						mapChartData:[//填写地图中用到的地市数据
							{name: '榆林市', value: 84.33},
							{name: '延安市', value: 83.76},
							{name: '咸阳市', value: 82.95},
							{name: '铜川市', value: 84.60},
							{name: '渭南市', value: 87.16},
							{name: '宝鸡市', value: 85.86},
							{name: '西安市', value: 87.18},
							{name: '商洛市', value: 90.12},
							{name: '汉中市', value: 95.66},
							{name: '安康市', value: 92.93}
			       		],
			       		pieces: [//填写数值的分段格式，用于地图旁边的分段文字说明
							{min: 100},
						    {min: 95, max: 100},
						    {min: 85, max: 95},
						    {min: 80, max: 85},
						    {max: 80},
						],
						color: [//填写分段文字的颜色数组
							'rgb(27,70,172)',
							'rgb(59,84,166)', 
							'rgb(65,143,205)',
							'rgb(86,185,224)',
							'rgb(195,231,247)'
						],
						lineBarChartData:[//填写地图下方图表中用到的地市数据,地市、同期、本期、环比、y轴标尺
							['榆林','延安','咸阳','铜川','渭南','宝鸡','西安','商洛','汉中','安康'],
							[82.23,84.09,85.12,88.94,87.03,86.09,85.93,91.32,93.09,90.95],
							[84.33,83.76,82.95,84.60,87.16,85.86,87.18,90.12,95.66,92.93],
							[2.1,-0.33,-2.17,-4.34,0.13,-0.23,1.25,-1.2,2.57,1.98],
			       			[80,100,5]
			       		]
					},
					{
						title:'社会存销比',
						unit: '',//填写单位，没有则为空
						mapChartData:[//填写地图中用到的地市数据
							{name: '榆林市', value: 84.33},
							{name: '延安市', value: 83.76},
							{name: '咸阳市', value: 82.95},
							{name: '铜川市', value: 84.60},
							{name: '渭南市', value: 87.16},
							{name: '宝鸡市', value: 85.86},
							{name: '西安市', value: 87.18},
							{name: '商洛市', value: 90.12},
							{name: '汉中市', value: 95.66},
							{name: '安康市', value: 92.93}
			       		],
			       		pieces: [//填写数值的分段格式，用于地图旁边的分段文字说明
							{min: 100},
						    {min: 95, max: 100},
						    {min: 85, max: 95},
						    {min: 80, max: 85},
						    {max: 80},
						],
						color: [//填写分段文字的颜色数组
							'rgb(27,70,172)',
							'rgb(59,84,166)', 
							'rgb(65,143,205)',
							'rgb(86,185,224)',
							'rgb(195,231,247)'
						],
						lineBarChartData:[//填写地图下方图表中用到的地市数据,地市、同期、本期、环比、y轴标尺
							['榆林','延安','咸阳','铜川','渭南','宝鸡','西安','商洛','汉中','安康'],
							[82.23,84.09,85.12,88.94,87.03,86.09,85.93,91.32,93.09,90.95],
							[84.33,83.76,82.95,84.60,87.16,85.86,87.18,90.12,95.66,92.93],
							[2.1,-0.33,-2.17,-4.34,0.13,-0.23,1.25,-1.2,2.57,1.98],
			       			[80,100,5]
			       		]
					}
				],
				rightBoxData:{
					rightTopBoxData:{
						title:'各价类价格指数情况',
						info: '从类别分析，一类烟降幅最大，二类烟降幅稍缓。从主销规格，中华（软）、中华（硬）、好猫（磨砂）、延安（软）、延安（硬红）、兰州（黄盒软）等价格降幅较大；利群（新版）、云烟（紫）、好猫（金延安）、猴王（金）等价格降幅较小。',
						tableHeader: [{name:'价类',id:'brandType'},{name:'价格指数',id:'priceIndex'},{name:'上期',id:'prePriceIndex'},{name:'环比增减',id:'huanBiValue'}],
						tableData:[{
								priceType: '一类',
								priceIndex: '84.33',
								prePriceIndex: '82.23',
								huanBiValue: '2.1',
								lineChartData:[
									'一类烟主销规格价格指数走势图',
									['201607','201608','201609','201610','201611','201612','201701','201702','201703','201704','201705','201706'],
									[97.21,97.17,93.35,94.03,92,95.59,96.9,97.27,98.69,98.4,99.25,97.67],//一类烟数据
									[97.21,97.67,97.02,96.56,97.82,92.19,92.93,91.16,90.04,91.25,98.32,97.17],//中华（软）数据
									[99.48,95.96,94.27,94.26,94.04,93.79,94.51,93.23,90.08,90.05,90.89,90.21],//中华（硬）数据
									[90.92,94.62,99.46,95.25,90.27,91.71,93.69,95.5,92.87,94.89,95.23,97.04],//芙蓉王（硬）数据
					       			[90,100,2]
								]
							}, {
								priceType: '二类',
								priceIndex: '83.76',
								prePriceIndex: '84.09',
								huanBiValue: '-0.33'
							},{
								priceType: '三类',
								priceIndex: '82.95',
								prePriceIndex: '85.12',
								huanBiValue: '-2.17'
							},{
								priceType: '四类',
								priceIndex: '84.60',
								prePriceIndex: '82.95',
								huanBiValue: '-4.34'
							},{
								priceType: '五类',
								priceIndex: '87.16',
								prePriceIndex: '87.03',
								huanBiValue: '0.13'
							}
						]
					},
					rightBottomBoxData:{
						title:'各品类价格指数情况',
						tableHeader: [{name:'品类',id:'brandType'},{name:'价格指数',id:'priceIndex'},{name:'上期',id:'prePriceIndex'},{name:'环比增减',id:'huanBiValue'}],
						tableData:[{
								brandType: '1200元以上',
								priceIndex: '84.33',
								prePriceIndex: '82.23',
								huanBiValue: '2.1'
							}, {
								brandType: '[1000,1200)',
								priceIndex: '83.76',
								prePriceIndex: '84.09',
								huanBiValue: '-0.33'
							},{
								brandType: '[800,1000)',
								priceIndex: '82.95',
								prePriceIndex: '85.12',
								huanBiValue: '-2.17'
							},{
								brandType: '[600,800)',
								priceIndex: '84.60',
								prePriceIndex: '82.95',
								huanBiValue: '-4.34'
							},{
								brandType: '[400,600)',
								priceIndex: '87.16',
								prePriceIndex: '87.03',
								huanBiValue: '0.13'
							},{
								brandType: '[200,400)',
								priceIndex: '87.16',
								prePriceIndex: '87.03',
								huanBiValue: '0.13'
							},{
								brandType: '200元以下',
								priceIndex: '87.16',
								prePriceIndex: '87.03',
								huanBiValue: '0.13'
							}
						]
					}
				}
			}
			
		},
		components: {
			top,
			leftList,
			middle,
			rightList
		},
		methods:{
			
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'market');
			this.$store.commit('setLeftNavStatus', 'status');
		}
	}

</script>

<style lang="scss" scoped>
	@import "../../../styles/variables.scss";

	.main{
		margin-left: $box-distince;
		font-size: 0.14rem;
		color: white;
		height: 100%;
		.left{
			float: left;
		}
		.main-body{
			overflow:hidden;
			
			.left-part{
				width: 3rem;
			}
			.middle-part{
				width: 4.6rem;
				margin-left: $box-distince;
			}
			.right-part{
				width: 4.6rem;
				margin-left: $box-distince;
			}
		}
	}
	
</style>