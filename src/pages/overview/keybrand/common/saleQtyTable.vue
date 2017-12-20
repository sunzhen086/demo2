<template>
	<box-base class="sale-rate-table">
		<div slot="box-title">
			<p class="title">各单位重点品牌销售情况</p>
		</div>
		<div class="content">
			<el-table ref="table" class="cma elTable" :data="tableData" :default-sort = "{prop: 'saleQty', order: 'descending'}"  :summary-method="getSummaries"
 show-summary>
				<el-table-column type="index" label="序号" align='center' header-align='center' width='70'></el-table-column>
				<el-table-column prop="organ" label="单位" align='center' header-align='center' width='100'></el-table-column>
				<el-table-column prop="saleQty" label="重点品牌销量(箱)" sortable align='right' header-align='center' ></el-table-column>
				<el-table-column prop="sameIncRate" label="同比(%)" sortable align='right' header-align='center' >
					<template scope="scope">
						<div v-if="scope.row.sameIncRate  > 0" class="green">
							<i class="fa fa-arrow-up"></i>
							<span style="margin-left: 10px">{{ scope.row.sameIncRate }}</span>
						</div>
						<div v-else-if="scope.row.sameIncRate  < 0" class="red">
							<i class="fa fa-arrow-down"></i>
							<span style="margin-left: 5px">{{ scope.row.sameIncRate }}</span>
						</div>
						<div v-else>
							<span style="margin-left: 5px">{{ scope.row.sameIncRate }}</span>
						</div>
					</template>				
				</el-table-column>
				<el-table-column prop="saleRate" label="占总销量比重(%)" sortable align='right' header-align='center' ></el-table-column>
				<el-table-column prop="saleRateInc" label="占比同比" sortable align='right' header-align='center' >
					<template scope="scope">
						<div v-if="scope.row.saleRateInc  > 0" class="green">
							<i class="fa fa-arrow-up"></i>
							<span style="margin-left: 10px">{{ scope.row.saleRateInc }}</span>
						</div>
						<div v-else-if="scope.row.saleRateInc  < 0" class="red">
							<i class="fa fa-arrow-down"></i>
							<span style="margin-left: 5px">{{ scope.row.saleRateInc }}</span>
						</div>
						<div v-else>
							<span style="margin-left: 5px">{{ scope.row.saleRateInc }}</span>
						</div>
					</template>						
				</el-table-column>
			</el-table>
		</div>
	</box-base>
</template>
<script>
	import boxBase from 'components/box/box-base.vue';
	
	export default {
		data() {
			return {
				tableData: [
				{
					organ: '西安',
					saleQty: 130641.98,
					sameIncRate: 3.39,
					saleRate: 76.51,
					saleRateInc:12.13
				},{
					organ: '宝鸡',
					saleQty: 32827.26,
					sameIncRate: 5.95,
					saleRate: 68.34,
					saleRateInc: 5.29
				},{
					organ: '咸阳	',
					saleQty: 46814.64,
					sameIncRate: 5.82,
					saleRate: 64.69,
					saleRateInc: 2.71
				},{
					organ: '铜川	',
					saleQty: 8037.19,
					sameIncRate: 7.01,
					saleRate: 61.14,
					saleRateInc: 2.37
				},{
					organ: '渭南',
					saleQty: 41652.48,
					sameIncRate: 8.36,
					saleRate: 60.86,
					saleRateInc: 1.76
				},{
					organ: '安康',
					saleQty: 18770.23,
					sameIncRate: 2.21,
					saleRate: 60.75,
					saleRateInc: -0.05
				},{
					organ: '榆林',
					saleQty:37871.56,
					sameIncRate:4.31,
					saleRate: 60.35,
					saleRateInc: -0.24
				},{
					organ: '延安',
					saleQty: 22436.71,
					sameIncRate:-6.91,
					saleRate: 60.32,
					saleRateInc:0.93 
				},{
					organ: '汉中',
					saleQty: 28460.55,
					sameIncRate: 8.48,
					saleRate: 59.79,
					saleRateInc: 6.56
				},{
					organ: '杨凌',
					saleQty: 2465.29,
					sameIncRate: 11.91,
					saleRate: 59.56,
					saleRateInc: 5.13
				},{
					organ: '商洛',
					saleQty: 14313.16,
					sameIncRate:4.85,
					saleRate:56.71,
					saleRateInc:7.81
				} ]
			}	
		},
		components: {
			boxBase
		},
		methods: {
		    getSummaries(param) {
		    	var summary = [
		    		"",
					'全省合计',
					384291.11,
					4.31,
					66.19,
					2.69
				];
		    	return summary
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.green {
		color: $green;
	}	
	.red {
		color: $red;
	}
	.sale-rate-table{
		width:100%;
		height:6.1rem;
		.content{
			margin-top:0.25rem;
		}
	}
</style>