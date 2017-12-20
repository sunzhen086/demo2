<template>
	<box-base  class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">4&nbsp;/</span><span class="title2">行业重点品牌</span>
			
			<span class="reportSpan cma">
			    <el-select v-model="selectValue" placeholder="相关分析" 
					size="small"
					class="left cma mid-item item-select" popper-class="cma-select">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</span>
		</div>
		
		<div class="content">
			<bar-chart :chartData=chartData></bar-chart>
		</div>
	</box-base>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import echarts from 'echarts';
	import barChart from './chartfour.vue';
	
	export default {
		data() {
			return {
				options: [{"label":"行业重点销量明细","value":"01"}],
				chartData:{
					xLineData: ['好猫', '芙蓉王', '利群', '云烟', '白沙', '兰州', '黄鹤楼', '南京', '红塔山', '中华', 
								'娇子', '红河', '玉溪', '泰山', '黄山', '苏烟', '黄金叶','长白山','贵烟','红金龙',
								'中南海','钻石','七匹狼','金圣','金桥','真龙'],

					'qtySoldData': {
						name: '销量',
						type:'bar',
						color: ['rgb(9,88,253)'],
						data: [
							612.43, 582.21, 573.49, 504.21, 421.74,411.98,385.32,346.43, 211.21, 154.49,
							151.23,148.23,140.26,135.69,131.25,124.89,121.77,110.66,105.69,107.89,
							101.26,95.63,92.87,85.23,80.22,60.99
						]
					},
					'tbData': {
						name: '同比增减',
						type:'line',
						color: ['rgb(7,222,155)'],
						data: [
							5.43, 2.21, 4.49, 4.21, 1.74,1.98,5.32,6.43, 1.21, 4.49,
							3.43, 2.21, 2.49, 4.21, 1.74,1.98,3.32,6.43, 6.21, 4.49,
							5.43, 3.21, 4.49, 1.21, 1.74,1.98
						]
					}
				}
			};
		},
		components: {
			boxBase,
			barChart
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		margin-bottom: 0.13rem;
		.title1{
			color: #2edbff;
			font-size: 30px;
		}
		.title2{
			margin-left: 10px ;
			color: #2edbff;
			font-size: 18px;
		}
		.content{
			margin-left: 0.15rem;
			margin-bottom: 0.13rem;
			margin-right: 0.13rem;
		}
		.reportSpan {
			float: right;
			margin-right:0.15rem;
			padding-top:0.02rem;
			color:black;
		}
	}
		
	
</style>