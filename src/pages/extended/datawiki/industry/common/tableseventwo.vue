<template>
	<div ref="tableTwo" class="tableChart">
		<el-table class="cma"  :show-header=true :border=true :data="tableData"  style="width: 100%" >
			<el-table-column   label="时间" align="center" :show-overflow-tooltip=true >
				<template scope="scope">
					<div class="muti">
						{{scope.row.date1}}
					</div>
				</template>
			</el-table-column>
			<el-table-column   label="一类" align="center" :show-overflow-tooltip=true >
				<template scope="scope">
					<div class="muti">
						{{scope.row.kind1}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="二类" align="center" :show-overflow-tooltip=true >
				<template scope="scope">
					<div class="muti">
						{{scope.row.kind2}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="三类" align="center" :show-overflow-tooltip=true >
				<template scope="scope">
					<div class="muti">
						{{scope.row.kind3}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="四类" align="center" :show-overflow-tooltip=true >
				<template scope="scope">
					<div class="muti">
						{{scope.row.kind4}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="五类" align="center" :show-overflow-tooltip=true >
					<template scope="scope">
					<div class="muti">
						{{scope.row.kind5}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="调拨均价" align="center" :show-overflow-tooltip=true >
					<template scope="scope">
					<div class="muti">
						{{scope.row.priceTrn}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="销售均价" align="center" :show-overflow-tooltip=true >
					<template scope="scope">
					<div class="muti">
						{{scope.row.soldPrice}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="毛利率" align="center" :show-overflow-tooltip=true >
					<template scope="scope">
					<div class="muti">
						{{scope.row.profitRate}}
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
	.el-table__header tr th{
		background-color: rgb(11,81,193) !important;
	}
		
	
</style>