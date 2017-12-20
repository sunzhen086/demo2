<template>
	<div class="popTable">
		<el-table class="cma row-height-40" :show-header=true :data="popTableData">
			<el-table-column prop="index" label="序号" align='center' header-align='center'></el-table-column>
			<el-table-column prop="com" label="单位" align='center' header-align='center'></el-table-column>
			<el-table-column prop="sale" label="销量（万箱）" align='center' header-align='center'></el-table-column>
			<el-table-column prop="plan" label="计划（万箱）" align='center' header-align='center'></el-table-column>
			<el-table-column prop="doneRate" label="计划完成率" align='center' header-align='center'></el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		props: {
			popTableData: Array
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.popTable {
		width: 100%;
	}
</style>