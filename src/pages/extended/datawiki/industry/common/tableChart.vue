<template>
	<div ref="tableChart" class="tableChart">
		<el-table class="cma-extend" :show-header=false :data="tableData"  >
			<el-table-column align="left" :show-overflow-tooltip=true>
				<template scope="scope">
					<div class="muti">
						{{scope.row.item}}
					</div>
				</template>
			</el-table-column>
			</el-table>
	</div>
	
</template>


<script>

	import echarts from 'echarts';
	import boxBase from 'components/box/box-base.vue';
	export default {
		props: {
			tableData: Array //这样可以指定传入的类型，如果类型不对，会警告
		}
	}
</script>

<style lang="scss" scoped>
	.tableChart{
		width: 100%;
		height: 100%;
		.muti{
			font-size: 14px;
			margin-left: -12px;
			margin-right: -12px;
		}
		
	}
		
	
</style>