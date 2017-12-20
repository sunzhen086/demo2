<template>
	<box-base  class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">1&nbsp;/</span><span class="title2">许可证信息</span>
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
					key1: '零售户名称 ',
					value1: '西安市长安区中惠商店',
					key2: '店面名称',
					value2: '西安市长安区中惠商店',
					key3: '经营地址',
					value3: '长安区东大街道东大正街'
				},{
					key1: '专卖许可证号',
					value1: '610122103126',
					key2: '零售户编码',
					value2: '610122103126',
					key3: '发证机关',
					value3: '长安区烟草专卖局（公司）'
				},{
					key1: ' 许可证发证日期 ',
					value1: '20160101',
					key2: '许可证生效日期',
					value2: '20160101',
					key3: '许可证有效期限',
					value3: '20180101'
				},{
					key1: '企业性质',
					value1: '个体商户',
					key2: '主营范围',
					value2: '卷烟',
					key3: '状态',
					value3: '有效'
				},{
					key1: '市局',
					value1: '西安市烟草专卖局(公司)',
					key2: '县局',
					value2: '长安区烟草专卖局（公司）',
					key3: '',
					value3: ''
				}]
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