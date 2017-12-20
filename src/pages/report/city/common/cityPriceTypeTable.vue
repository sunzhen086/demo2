<template>
	<div>
		<el-table border ref="table" class="cma-report elTable row-height-35" 
			:data="tableData.tableDatas" highlight-current-row >
			<el-table-column align='center' header-align='center'
				prop="city" label="单位" sortable
				></el-table-column>
			<el-table-column align='center' header-align='center' label="含税销售收入">
				<el-table-column align='center' header-align='center' prop="saleAmt" label="本期"></el-table-column>
				<el-table-column align='center' header-align='center' prop="saleAmtLast" label="同期"></el-table-column>
				<el-table-column align='center' header-align='center' prop="saleAmtRate" label="同比" width=110>
					<template scope="scope">
						<div class="multiContent">
							<multiContent :rate=scope.row.saleAmtRate*1></multiContent>
						</div>
					</template>
				</el-table-column>
			</el-table-column>
			<el-table-column align='center' header-align='center' label="含税单箱销售额">
				<el-table-column align='center' header-align='center' prop="boxPrice" label="本期"></el-table-column>
				<el-table-column align='center' header-align='center' prop="boxPriceLast" label="同期"></el-table-column>
				<el-table-column align='center' header-align='center' prop="boxPriceRate" label="同比" width=110 sortable>
					<template scope="scope">
						<div class="multiContent">
							<multiContent :rate=scope.row.boxPriceRate*1></multiContent>
						</div>
					</template>
				</el-table-column>
			</el-table-column>
			<el-table-column align='center' header-align='center' label="销量">
				<el-table-column align='center' header-align='center' label="合计">
					<el-table-column align='center' header-align='center' prop="saleQtyAll" label="本期"></el-table-column>
					<el-table-column align='center' header-align='center' prop="saleQtyAllLast" label="同期"></el-table-column>
					<el-table-column align='center' header-align='center' prop="saleQtyAllRate" label="同比" width=110 sortable>
						<template scope="scope">
							<div class="multiContent">
								<multiContent :rate=scope.row.saleQtyAllRate*1></multiContent>
							</div>
						</template>
					</el-table-column>
				</el-table-column>
				<el-table-column align='center' header-align='center' label="一类烟">
					<el-table-column align='center' header-align='center' prop="saleQtyOne" label="本期"></el-table-column>
					<el-table-column align='center' header-align='center' prop="saleQtyOneLast" label="同期"></el-table-column>
					<el-table-column align='center' header-align='center' prop="saleQtyOneRate" label="同比" width=110 sortable>
						<template scope="scope">
							<div class="multiContent">
								<multiContent :rate=scope.row.saleQtyOneRate*1></multiContent>
							</div>
						</template>
					</el-table-column>
				</el-table-column>
				<el-table-column align='center' header-align='center' label="二类烟">
					<el-table-column align='center' header-align='center' prop="saleQtyTwo" label="本期"></el-table-column>
					<el-table-column align='center' header-align='center' prop="saleQtyTwoLast" label="同期"></el-table-column>
					<el-table-column align='center' header-align='center' prop="saleQtyTwoRate" label="同比" width=110 sortable>
						<template scope="scope">
							<div class="multiContent">
								<multiContent :rate=scope.row.saleQtyTwoRate*1></multiContent>
							</div>
						</template>
					</el-table-column>
				</el-table-column>
				<el-table-column align='center' header-align='center' label="三类烟">
					<el-table-column align='center' header-align='center' prop="saleQtyThree" label="本期"></el-table-column>
					<el-table-column align='center' header-align='center' prop="saleQtyThreeLast" label="同期"></el-table-column>
					<el-table-column align='center' header-align='center' prop="saleQtyThreeRate" label="同比" width=110 sortable>
						<template scope="scope">
							<div class="multiContent">
								<multiContent :rate=scope.row.saleQtyThreeRate*1></multiContent>
							</div>
						</template>
					</el-table-column>
				</el-table-column>
				<el-table-column align='center' header-align='center' label="四类烟">
					<el-table-column align='center' header-align='center' prop="saleQtyFour" label="本期"></el-table-column>
					<el-table-column align='center' header-align='center' prop="saleQtyFourLast" label="同期"></el-table-column>
					<el-table-column align='center' header-align='center' prop="saleQtyFourRate" label="同比" width=110 sortable>
						<template scope="scope">
							<div class="multiContent">
								<multiContent :rate=scope.row.saleQtyFourRate*1></multiContent>
							</div>
						</template>
					</el-table-column>
				</el-table-column>
				<el-table-column align='center' header-align='center' label="五类烟">
					<el-table-column align='center' header-align='center' prop="saleQtyFive" label="本期"></el-table-column>
					<el-table-column align='center' header-align='center' prop="saleQtyFiveLast" label="同期"></el-table-column>
					<el-table-column align='center' header-align='center' prop="saleQtyFiveRate" label="同比" width=110 sortable>
						<template scope="scope">
							<div class="multiContent">
								<multiContent :rate=scope.row.saleQtyFiveRate*1></multiContent>
							</div>
						</template>
					</el-table-column>
				</el-table-column>
			</el-table-column>
			
		</el-table>
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