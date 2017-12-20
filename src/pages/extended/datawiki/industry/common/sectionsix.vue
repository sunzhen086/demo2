<template>
	<box-base  class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">6&nbsp;/</span><span class="title2">陕西重点品牌</span>
			
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
	import barChart from './chart.vue';
	
	export default {
		data() {
			return {
				options: [{"label":"陕西重点品牌销量明细","value":"01"}],
				chartData:{
					xLineData: ['延安\n（软）', '兰州\n（软盒黄）', '好猫\n（细支长乐）', '哈德门\n（精品）', '南京\n（炫赫门）',
								'黄鹤楼\n（硬天下名楼）','南京\n（雨花石）','长白山\n（777）','娇子\n（X）','玉溪\n（硬）'],
					'qtySoldData': {
						name: '销量',
						type:'bar',
						color: ['rgb(9,88,253)'],
						data: [
							412.43, 382.21, 353.49, 324.21, 281.74,251.98,215.32,201.43, 181.21,154.49
						]
					},
					'tbData': {
						name: '同比增减',
						type:'line',
						color: ['rgb(7,222,155)'],
						data: [
							2.43, 2.21, 13.49, 4.21, 1.74,1.98,5.32,16.43, 1.21, 14.49
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