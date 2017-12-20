<template>
	<div class="popTable">
		<el-table class="cma" :show-header=true :data="popTableData">
			<el-table-column prop="index" label="序号" align='center' header-align='center'></el-table-column>
			<el-table-column prop="com" label="单位" align='center' header-align='center'></el-table-column>
			<el-table-column prop="item" label="商品名称" align='center' header-align='center'></el-table-column>
			<el-table-column prop="onway" label="在途量（万支）" align='center' header-align='center'></el-table-column>
			<el-table-column prop="dayavg" label="日均销量（条）" align='center' header-align='center'></el-table-column>
			<el-table-column prop="predictdays" label="预计可销天数" align='center' header-align='center'></el-table-column>
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