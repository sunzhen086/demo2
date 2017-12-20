<template>
	<div>
		<template v-if="tableData.key === 'table3'">
			
		</template>
		<template v-else>
			<el-table border ref="table" class="cma-report elTable row-height-35" 
			:data="tableData.tableDatas" highlight-current-row >
				<el-table-column align='center' header-align='center'
					prop="city" label="单位" sortable
					></el-table-column>
				<el-table-column align='center' header-align='center' label="销量情况">
					<el-table-column align='center' header-align='center' prop="saleQty" label="销量（箱）">
					</el-table-column>
					<el-table-column align='center' header-align='center' prop="saleQtyRate" label="同比" width=110 sortable>
						<template scope="scope">
							<div class="multiContent">
								<multiContent :rate=scope.row.saleQtyRate*1></multiContent>
							</div>
						</template>
					</el-table-column>
					<el-table-column align='center' header-align='center' prop="saleQtyPercent" label="占比" sortable></el-table-column>
				</el-table-column>
				<el-table-column align='center' header-align='center' label="销售收入情况">
					<el-table-column align='center' header-align='center' prop="saleAmt" label="销售收入（万元）">
					</el-table-column>
					<el-table-column align='center' header-align='center' prop="saleAmtRate" label="同比" width=110 sortable>
						<template scope="scope">
							<div class="multiContent">
								<multiContent :rate=scope.row.saleAmtRate*1></multiContent>
							</div>
						</template>
					</el-table-column>
					<el-table-column align='center' header-align='center' prop="saleAmtPercent" label="占比" sortable></el-table-column>
				</el-table-column>
				
			</el-table>
		</template>
	</div>
</template>
<script>
	import multiContent from 'components/multicontent/multicontent-extend.vue';

	export default {
		props: {
			tableData: Object
		},
		components: {
			multiContent
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