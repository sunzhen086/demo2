<template>
	<div>
		<el-table ref="table" class="cma elTable row-height-25 title-can-click" 
			@header-click="headerClick" :data="tableData.tableDatas" highlight-current-row height=152>
			<el-table-column align='center' header-align='center' width='94'
				:prop="tableData.tableHeader[0].id" :label="tableData.tableHeader[0].name"
				></el-table-column>
			<el-table-column align='center' header-align='center' width='148'
				:prop="tableData.tableHeader[1].id" :label="tableData.tableHeader[1].name"
				>
				<template scope="scope">
					<number-format format='to-thousand' :strValue='scope.row.brand1'></number-format>
				</template>
			</el-table-column>
			<el-table-column align='center' header-align='center' width='136'
				:prop="tableData.tableHeader[2].id" :label="tableData.tableHeader[2].name"
				>
				<template scope="scope">
					<number-format format='to-thousand' :strValue='scope.row.brand2'></number-format>
				</template>
			</el-table-column>
			<el-table-column align='center' header-align='center' width='148'
				:prop="tableData.tableHeader[3].id" :label="tableData.tableHeader[3].name"
				>
				<template scope="scope">
					<number-format format='to-thousand' :strValue='scope.row.brand3'></number-format>
				</template>
			</el-table-column>
			<el-table-column align='center' header-align='center' width='150'
				:prop="tableData.tableHeader[4].id" :label="tableData.tableHeader[4].name"
				>
				<template scope="scope">
					<number-format format='to-thousand' :strValue='scope.row.brand4'></number-format>
				</template>
			</el-table-column>
			<el-table-column align='center' header-align='center' width='148'
				:prop="tableData.tableHeader[5].id" :label="tableData.tableHeader[5].name"
				>
				<template scope="scope">
					<number-format format='to-thousand' :strValue='scope.row.brand5'></number-format>
				</template>
			</el-table-column>
			<el-table-column align='center' header-align='center' width='176'
				:prop="tableData.tableHeader[6].id" :label="tableData.tableHeader[6].name"
				>
				<template scope="scope">
					<number-format format='to-thousand' :strValue='scope.row.brand6'></number-format>
				</template>
			</el-table-column>
			<el-table-column align='center' header-align='center' width='136'
				:prop="tableData.tableHeader[7].id" :label="tableData.tableHeader[7].name"
				>
				<template scope="scope">
					<number-format format='to-thousand' :strValue='scope.row.brand7'></number-format>
				</template>
			</el-table-column>
			<el-table-column align='center' header-align='center' width='136'
				:prop="tableData.tableHeader[8].id" :label="tableData.tableHeader[8].name"
				>
				<template scope="scope">
					<number-format format='to-thousand' :strValue='scope.row.brand8'></number-format>
				</template>
			</el-table-column>
			<el-table-column align='center' header-align='center' width='170'
				:prop="tableData.tableHeader[9].id" :label="tableData.tableHeader[9].name"
				>
				<template scope="scope">
					<number-format format='to-thousand' :strValue='scope.row.brand9'></number-format>
				</template>
			</el-table-column>
			<el-table-column align='center' header-align='center' width='150'
				:prop="tableData.tableHeader[10].id" :label="tableData.tableHeader[10].name"
				>
				<template scope="scope">
					<number-format format='to-thousand' :strValue='scope.row.brand10'></number-format>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	import numberFormat from 'components/numberFormat/number-format.vue';
	
	export default {
		props: {
			tableData: Object
		},
		components: {
			numberFormat
		},
		data() {
			return {
				
			}
		},
		methods: {
			headerClick:function(column,event){
				//获取列头的prop，以后会根据这个值跳转到不同的卷烟百科
				console.log("column.property="+column.property);
				this.$router.push({ path: '/extended/itemwiki'})
			}
		}
	}
</script>
<style lang="scss" scoped>
	
</style>