<template>
	<el-table class="cma row-height-35" :show-header="true" :data="reportData">
		<el-table-column label="商品编码" prop='itemId' align="center" width='90'>
		</el-table-column>
		<el-table-column label="商品名称" align="left" width='130' header-align="center">
			<template scope="scope">
				<div class="link" @click="toWiki(scope.row.itemName)">
					{{scope.row.itemName}}
				</div>
			</template>
		</el-table-column>
		<el-table-column label="本期销量（箱）" prop='sales' align="right" header-align="center">
		</el-table-column>
		<el-table-column label="同期销量（箱）" prop='salesLast' align="right" header-align="center">
		</el-table-column>
		<el-table-column label="价类" width='60' prop='kindName' align="center">
		</el-table-column>
		<el-table-column label="工业公司" prop='vendName' width='90' align="center">
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		props: {
			reportData: Array
		},
		methods: {
			toWiki: function(name) {
				this.$router.push("/extended/itemwiki");
			}
		},
		computed: {}
	}
</script>

<style lang="scss" scoped>
	.link {
		cursor: pointer;
		text-decoration: underline;
	}
</style>