<template>
	<box-base  class="main">
	<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">2&nbsp;/</span><span class="title2">销售信息</span>
		</div>
		
		<div class="content">
			<table-chart :tableData=tableData></table-chart>
		</div>
	</box-base>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import tableChart from  './tableChart.vue';
	
	
	export default {
		data() {
			return {
				showHeader: false,
				tableData: [{
					key1: '助记码 ',
					value1: '610122103126',
					key2: '零售户简称',
					value2: '西安市长安区中惠商店',
					key3: '零售户状态',
					value3: '有效'
				},{
					key1: '负责人',
					value1: '张建学',
					key2: '客户档位',
					value2: '12档',
					key3: '企业性质',
					value3: '个体商户'
				},{
					key1: ' 订货周期 ',
					value1: '星期二',
					key2: '订货类型',
					value2: '网上订货',
					key3: '订货电话 ',
					value3: '13156130972'
				},{
					key1: '市场类型',
					value1: '城镇',
					key2: ' 经营业态',
					value2: '烟酒商店',
					key3: '经营规模',
					value3: '中'
				},{
					key1: ' 商圈类型 ',
					value1: '学区',
					key2: '分管市场经理',
					value2: '张丹',
					key3: '分管客户经理',
					value3: '张丹'
				},{
					key1: ' 是否自营店 ',
					value1: '是',
					key2: ' 是否功能店',
					value2: '否',
					key3: '是否销售大户',
					value3: '否'
				}]
			}
		},
		components: {
			boxBase	,
			tableChart
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		width: 9.5rem;
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
	}
		
	
</style>