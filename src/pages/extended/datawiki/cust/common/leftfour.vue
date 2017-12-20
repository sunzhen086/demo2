<template>
	<box-base  class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">3&nbsp;/</span><span class="title2">终端信息</span>
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
					key1: '店面总面积 ',
					value1: '100平米',
					key2: '卷烟经营面积',
					value2: '30平米',
					key3: '卷烟广告面积',
					value3: '5平方米'
				},{
					key1: '店员数量',
					value1: '2',
					key2: '服务态度',
					value2: '优',
					key3: '平均年龄',
					value3: '36'
				},{
					key1: ' 店面电脑 ',
					value1: '1',
					key2: '扫码设备',
					value2: '有',
					key3: '有无店招',
					value3: '有'
				},{
					key1: '信息采集点',
					value1: '否',
					key2: '店内视频设备',
					value2: '无',
					key3: '终端信息设备',
					value3: '无'
				},{
					key1: '宣传促销配合度',
					value1: '良',
					key2: '品牌推介能力',
					value2: '一般',
					key3: '对烟草日常工作配合度',
					value3: '好'
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
			//width: 10.46rem;
			margin-left: 0.15rem;
			margin-bottom: 0.13rem;
			margin-right: 0.13rem;
			
		}
	}
		
	
</style>