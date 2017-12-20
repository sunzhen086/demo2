<template>
	<div ref="tableChart" class="tableChart">
		<el-table class="cma"  :show-header=true :border=true :data="tableData"  style="width: 100%" >
			<el-table-column   label="" align="center" :show-overflow-tooltip=true >
				<template scope="scope">
					<div class="muti">
						{{scope.row.name}}
					</div>
				</template>
			</el-table-column>
			<el-table-column   label="2015销量" align="center" :show-overflow-tooltip=true >
				<template scope="scope">
					<div class="muti">
						{{scope.row.qtySoldLLY}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="2016销量" align="center" :show-overflow-tooltip=true >
				<template scope="scope">
					<div class="muti">
						{{scope.row.qtySolyLastYear}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="2017销量" align="center" :show-overflow-tooltip=true >
				<template scope="scope">
					<div class="muti">
						{{scope.row.qtySOld}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="2017协议量" align="center" :show-overflow-tooltip=true >
				<template scope="scope">
					<div class="muti">
						{{scope.row.qtyAgreement}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="2017合同执行量" align="center" :show-overflow-tooltip=true >
					<template scope="scope">
					<div class="muti">
						{{scope.row.qtyExec}}
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
		
	
</style>