<template>
	<div>
		<el-table border ref="table" class="cma-report elTable" 
			:data="tableData.tableDatas" highlight-current-row >
			<el-table-column align='center' header-align='center' sortable
				:prop="tableData.tableHeader[0].id" :label="tableData.tableHeader[0].name"
				></el-table-column>
			<el-table-column align='center' header-align='center' sortable
				:prop="tableData.tableHeader[1].id" :label="tableData.tableHeader[1].name"
				></el-table-column>
			<el-table-column align='center' header-align='center' 
				:prop="tableData.tableHeader[2].id" :label="tableData.tableHeader[2].name"
				>
				<template scope="scope">
					<number-format format='to-thousand' :strValue='scope.row.column3'></number-format>
				</template>
			</el-table-column>
			<template v-if="tableData.key === 'table4'">
				<el-table-column align='center' header-align='center' sortable
					:prop="tableData.tableHeader[3].id" :label="tableData.tableHeader[3].name"
					>
					<template scope="scope">
						<number-format format='to-thousand' :strValue='scope.row.column4'></number-format>
					</template>
				</el-table-column>
			</template>
			<template v-else>
				<el-table-column align='center' header-align='center'
					:prop="tableData.tableHeader[3].id" :label="tableData.tableHeader[3].name"
					>
					<template scope="scope">
						<number-format format='to-thousand' :strValue='scope.row.column4'></number-format>
					</template>
				</el-table-column>
			</template>
			
			
			<template v-if="tableData.key === 'table4'">
				<el-table-column align='center' header-align='center' sortable
					:prop="tableData.tableHeader[4].id" :label="tableData.tableHeader[4].name"
					>
					<template scope="scope">
						<number-format format='to-thousand' :strValue='scope.row.column5'></number-format>
					</template>
				</el-table-column>
			</template>
			<template v-else>
				<el-table-column align='center' header-align='center' sortable
					:prop="tableData.tableHeader[4].id" :label="tableData.tableHeader[4].name"
					>
					<template scope="scope">
						<div class="multiContent">
							<multiContent :rate=scope.row.column5*1></multiContent>
						</div>
					</template>
				</el-table-column>
			</template>
			
		</el-table>
	</div>
</template>
<script>
	import multiContent from 'components/multicontent/multicontent-extend.vue';
	import numberFormat from 'components/numberFormat/number-format.vue';

	export default {
		props: {
			tableData: Object
		},
		components: {
			multiContent,
			numberFormat
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>
	
</style>