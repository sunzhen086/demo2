<template>
	<box-base  class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">2&nbsp;/</span><span class="title2">公司往来</span>
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
				tableData: [
					{item: '2017年6月10日，工业代表拜访陕西烟草销售处，交流新品促销方案。'},
					{item: '2017年3月15日，工业代表拜访陕西烟草专卖处，参加专卖打假成果交流会。'},
					{item: '2017年2月20日，工业代表拜访西安烟草营销中心，商定工商协议执行方案。'}
				]
			}
		},
		components: {
			boxBase,
			tableChart
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
			//width: 10.46rem;
			margin-left: 0.15rem;
			margin-bottom: 0.13rem;
			margin-right: 0.13rem;
		}
	}
		
	
</style>