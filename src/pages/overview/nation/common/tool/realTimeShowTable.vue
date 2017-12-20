<template>
	<div class="tableBoxBase">
		<div class="titleBar"></div>
		<el-table class="cma elTable row-height-35" :show-header=showHeader :data="tableData" height="250" style="width: 100%">
			<el-table-column sortable prop="com" label="公司" width="70" align='center' header-align='center'></el-table-column>
			<el-table-column  prop="qytOrder" label="订单笔数" align='center' header-align='center'></el-table-column>
			<el-table-column prop="sucssRate" label="订货完成率（%）" min-width='110' align='center' header-align='center'></el-table-column>
			<el-table-column  prop="qtySum" label="订单量（条）" align='center' header-align='center'></el-table-column>
			<el-table-column prop="avgSum" label="单条值 (元)" width="110" align='center' header-align='center'></el-table-column>
			
			<el-table-column prop="settleRate" label="电子结算率（%）" width="130" align='center' header-align='center'></el-table-column>

		</el-table>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import multiContent from 'components/multicontent/multicontent.vue';
	
	export default {
		data() {
			return {
				showHeader: true,
				tableData: [{
					com: '西安',
					qytOrder: '2,001',
					sucssRate: '98.1',
					qtySum: '6,902',
					avgSum: '124.01',
					settleRate:'96'
				}, {
					com: '宝鸡',
					qytOrder: '1,980',
					sucssRate: '97',
					qtySum: '6,021',
					avgSum: '118.19',
					settleRate:'97'
				}, {
					com: '杨凌',
					qytOrder: '1,688',
					sucssRate: '93',
					qtySum: '6,213',
					avgSum: '108.91',
					settleRate:'90'
				},{
					com: '汉中',
					qytOrder: '1,921',
					sucssRate: '96',
					qtySum: '6,434',
					avgSum: '110.1',
					settleRate:'91'
				},{
					com: '商洛',
					qytOrder: '1000',
					sucssRate: '97',
					qtySum: '8,391',
					avgSum: '103.90',
					settleRate:'92'
				},{
					com: '铜川',
					qytOrder: '1,213',
					sucssRate: '89',
					qtySum: '8,911',
					avgSum: '107.89',
					settleRate:'93'
				},{
					com: '安康',
					qytOrder: '1,888',
					sucssRate: '91',
					qtySum: '7,892',
					avgSum: '108.9',
					settleRate:'95'
				},{
					com: '延安',
					qytOrder: '1,123',
					sucssRate: '96',
					qtySum: '8,912',
					avgSum: '100.81',
					settleRate:'94'
				},{
					com: '咸阳',
					qytOrder: '1,212',
					sucssRate: '93',
					qtySum: '9,871',
					avgSum: '111.21',
					settleRate:'93'
				},{
					com: '榆林',
					qytOrder: '1,191',
					sucssRate: '92',
					qtySum: '8,918',
					avgSum: '110.11',
					settleRate:'92'
				},{
					com: '渭南',
					qytOrder: '2,353',
					sucssRate: '93',
					qtySum: '7,811',
					avgSum: '119.1',
					settleRate:'91'
				}]
			}
		},
		components: {
			boxBase,
			multiContent
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.tablePanel {
		width: 7.42rem;
		.tableBoxBase {
			width: inherit;
			//height: 4.2rem;
			
			.elTable {
				margin-top: -0.1rem;
				margin-left: 0.14rem;
			}
			
			.titleBar {
				width: inherit;
				height: 0.12rem;
			}
			
			.muti {
				margin-left: -0.6rem;
			}
		}
	}
</style>