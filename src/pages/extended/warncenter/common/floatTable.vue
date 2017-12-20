<template>
	<div class="tableDiv">
		<el-table class="cma" :data="tableData" height="350" style="width:100%;">
			<el-table-column label="序号" align="center" width="82">
				<template scope="scope">
					<div class="muti">
						{{scope.row.index}}
					</div>
				</template>
			</el-table-column>
			<el-table-column label="级别" align="center" width="85">
				<template scope="scope">
					<div class="muti">
						{{scope.row.level}}
					</div>
				</template>
			</el-table-column>
			<el-table-column label="类型" align="center" width="85">
				<template scope="scope">
					<div class="muti">
						{{scope.row.type}}
					</div>
				</template>
			</el-table-column>
			<el-table-column label="问题描述" align="center" width="120">
				<template scope="scope">
					<div class="muti">
						{{scope.row.desc}}
					</div>
				</template>
			</el-table-column>
			<el-table-column label="对应策略" align="center">
				<template scope="scope">
					<div class="muti">
					</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		props: {
			tableData: Array
		},
		data() {
			return {
				showHeader: true,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tableDiv {
		width: 100%;
		height: 100%;
	}
</style>