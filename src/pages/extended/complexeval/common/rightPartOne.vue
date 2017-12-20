<template>
	<box-base class="rightBox">
		<div slot="box-title">
			<p class="title">得分明细</p>
			<div class="extend-class">
				西安市综合得分<span class="orange">95.6</span>
			</div>
		</div>
		<div slot="box-extend">
			<el-popover popper-class="cma" ref="topRightPopover" placement="left-start" width="960" trigger="hover" >
				<tablePart :tableData="dialogTableData"></tablePart>
			</el-popover>
			
			<div class="changeBtn">
				<info-circle v-popover:topRightPopover></info-circle>
			</div>
		</div>
		<div class="content">
			<tablePart :tableData="tableData"></tablePart>
		</div>
		
		
	</box-base>
</template>

<script>
	import $ from 'static/js/jquery-vendor';
	import boxBase from 'components/box/box-base.vue';
	import tablePart from './tablePart.vue';
	import infoCircle from 'components/infocircle/info-circle.vue';
	
	export default {
		data() {
			return {
				tableData:{
					tableNumber:'2',
					data:[
		                {index: '销量同比增长率',score: 19.0,desired:0.095,target:0.10,weight:20},
		                {index: '销量计划达成率',score: 20.0,desired:0.600,target:0.60,weight:20},
		                {index: '单箱均价同比增长率',score: 18.8,desired:0.094,target:0.10,weight:20},
		                {index: '销售收入同比增长率',score: 20.0,desired:0.100,target:0.10,weight:20},
		                {index: '存销比',score: 8.8,desired:0.900,target:0.80,weight:10},
		                {index: '重点品牌销量同比增长率',score: 9.1,desired:0.100,target:0.11,weight:10},
					]
				},
				dialogTableData:{
					tableNumber:'21',
					data:[
		                {index: '销量同比增长率',weight: 20,rule:{value:'全省最大值',rowKey:0,num:0},desc:'得分=销量同比增长率/全省最大值*权重'},
		                {index: '销量计划达成率',weight: 20,rule:{value:'全省最大值',rowKey:1,num:0},desc:'得分=销量计划达成率/全省最大值*权重'},
		                {index: '单箱均价同比增长率',weight: 20,rule:{value:'全省最大值',rowKey:2,num:0},desc:'得分=单箱均价同比增长率/全省最大值*权重'},
		                {index: '销售收入同比增长率',weight: 20,rule:{value:'全省最大值',rowKey:3,num:0},desc:'得分=销售收入同比增长率/全省最大值*权重'},
		                {index: '存销比',weight: 10,rule:{value:'固定值',rowKey:4,num:0.8},desc:'得分=(1-|(存销比-0.8)/0.8|)*权重'},
		                {index: '重点品牌销量同比增长率',weight: 10,rule:{value:'全省最大值',rowKey:5,num:0},desc:'得分=重点品牌销量同比增长率/全省最大值*权重'},
					]
				}
			}
		},
		components: {
			boxBase,
			infoCircle,
			tablePart
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.rightBox {
		.title{
			float:left;
		}
		.extend-class{
			float:left;
			margin-left: 0.8rem;
			span{
				padding:0 0.05rem;
			}
		}
		.rankBtn{
			padding: 0.02rem 0.06rem;
		}
		.changeBtn{
			margin-right: 0.1rem;
		}
		.red {
			color: $red;
		}
		
		.green {
			color: $green;
		}
		
		.orange {
			color: $orange;
		}
		.content{
			margin-top: 0.15rem;
		}
	}
</style>