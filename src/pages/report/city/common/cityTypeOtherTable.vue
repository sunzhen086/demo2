<template>
	<div>
			<el-table border ref="table" class="cma-report elTable row-height-35" 
			:data="tableData.tableDatas" highlight-current-row >
				<el-table-column align='center' header-align='center'
					prop="city" label="单位" sortable
					></el-table-column>
				<el-table-column align='center' header-align='center' label="高价位">
					<el-table-column align='center' header-align='center' prop="gjwQty" label="本期（箱）" width=100>
						<template scope="scope">
							<number-format format='to-thousand' :strValue='scope.row.gjwQty'></number-format>
						</template>
					</el-table-column>
					<el-table-column align='center' header-align='center' prop="gjwQtyLast" label="同期（箱）" width=100>
						<template scope="scope">
							<number-format format='to-thousand' :strValue='scope.row.gjwQtyLast'></number-format>
						</template>
					</el-table-column>
					<el-table-column align='center' header-align='center' prop="gjwQtyRate" label="同比" width=110 sortable>
						<template scope="scope">
							<div class="multiContent">
								<multiContent :rate=scope.row.gjwQtyRate*1></multiContent>
							</div>
						</template>
					</el-table-column>
				</el-table-column>
				<el-table-column align='center' header-align='center' label="高端烟">
					<el-table-column align='center' header-align='center' prop="gdyQty" label="本期（箱）" width=100>
						<template scope="scope">
							<number-format format='to-thousand' :strValue='scope.row.gdyQty'></number-format>
						</template>
					</el-table-column>
					<el-table-column align='center' header-align='center' prop="gdyQtyLast" label="同期（箱）" width=100>
						<template scope="scope">
							<number-format format='to-thousand' :strValue='scope.row.gdyQtyLast'></number-format>
						</template>
					</el-table-column>
					<el-table-column align='center' header-align='center' prop="gdyQtyRate" label="同比" width=110 sortable>
						<template scope="scope">
							<div class="multiContent">
								<multiContent :rate=scope.row.gdyQtyRate*1></multiContent>
							</div>
						</template>
					</el-table-column>
				</el-table-column>
				<el-table-column align='center' header-align='center' label="细支烟">
					<el-table-column align='center' header-align='center' prop="xzyQty" label="本期（箱）" width=100>
						<template scope="scope">
							<number-format format='to-thousand' :strValue='scope.row.xzyQty'></number-format>
						</template>
					</el-table-column>
					<el-table-column align='center' header-align='center' prop="xzyQtyLast" label="同期（箱）" width=100>
						<template scope="scope">
							<number-format format='to-thousand' :strValue='scope.row.xzyQtyLast'></number-format>
						</template>
					</el-table-column>
					<el-table-column align='center' header-align='center' prop="xzyQtyRate" label="同比" width=110 sortable>
						<template scope="scope">
							<div class="multiContent">
								<multiContent :rate=scope.row.xzyQtyRate*1></multiContent>
							</div>
						</template>
					</el-table-column>
				</el-table-column>
				<el-table-column align='center' header-align='center' label="雪茄烟">
					<el-table-column align='center' header-align='center' prop="xjyQty" label="本期（箱）" width=100>
						<template scope="scope">
							<number-format format='to-thousand' :strValue='scope.row.xjyQty'></number-format>
						</template>
					</el-table-column>
					<el-table-column align='center' header-align='center' prop="xjyQtyLast" label="同期（箱）" width=100>
						<template scope="scope">
							<number-format format='to-thousand' :strValue='scope.row.xjyQtyLast'></number-format>
						</template>
					</el-table-column>
					<el-table-column align='center' header-align='center' prop="xjyQtyRate" label="同比" width=110 sortable>
						<template scope="scope">
							<div class="multiContent">
								<multiContent :rate=scope.row.xjyQtyRate*1></multiContent>
							</div>
						</template>
					</el-table-column>
				</el-table-column>
				<el-table-column align='center' header-align='center' label="低焦油烟">
					<el-table-column align='center' header-align='center' prop="djyyQty" label="本期（箱）" width=100>
						<template scope="scope">
							<number-format format='to-thousand' :strValue='scope.row.djyyQty'></number-format>
						</template>
					</el-table-column>
					<el-table-column align='center' header-align='center' prop="djyyQtyLast" label="同期（箱）" width=100>
						<template scope="scope">
							<number-format format='to-thousand' :strValue='scope.row.djyyQtyLast'></number-format>
						</template>
					</el-table-column>
					<el-table-column align='center' header-align='center' prop="djyyQtyRate" label="同比" width=110 sortable>
						<template scope="scope">
							<div class="multiContent">
								<multiContent :rate=scope.row.djyyQtyRate*1></multiContent>
							</div>
						</template>
					</el-table-column>
				</el-table-column>
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