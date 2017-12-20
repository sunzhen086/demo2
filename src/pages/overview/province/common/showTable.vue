<template>
	<div class="tablePanel">
		<box-base class="tableBoxBase">
			<div class="titleBar"></div>
			<el-table class="cma elTable row-height-30" :show-header=showHeader :data="tableData" height="396" style="width: 96%">
				<el-table-column prop="index" label="序号" width="70" align='center' header-align='center'></el-table-column>
				<el-table-column prop="unit" label="单位" align='center' header-align='center'></el-table-column>
				<el-table-column prop="amount" label="销量" align='center' header-align='center'></el-table-column>
				<el-table-column prop="tb" label="同比+-" align='center' header-align='center'></el-table-column>
				<el-table-column label="同比+-%" align='center' header-align='center'>
					<template scope="scope">
						<div class="muti">
							<multi-content :rate=scope.row.tbP*1 ></multi-content>
						</div>
					</template>
				</el-table-column>
			</el-table>
		</box-base>
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
					index: '',
					unit: '全省总计',
					amount: '1,450,949',
					tb: '-48,431',
					tbP: '-5.74'
				}, {
					index: '1',
					unit: '西安',
					amount: '417,255',
					tb: '-14,903',
					tbP: '-3.45'
				}, {
					index: '2',
					unit: '宝鸡',
					amount: '129,719',
					tb: '-6,128',
					tbP: '-4.51'
				},{
					index: '3',
					unit: '杨凌',
					amount: '9,347',
					tb: '-456',
					tbP: '-4.64'
				},{
					index: '4',
					unit: '汉中',
					amount: '113,988',
					tb: '-5,716',
					tbP: '-4.77'
				},{
					index: '5',
					unit: '商洛',
					amount: '67,701',
					tb: '-3,415',
					tbP: '-4.80'
				},{
					index: '6',
					unit: '铜川',
					amount: '32,120',
					tb: '-1,780',
					tbP: '-5.25'
				},{
					index: '7',
					unit: '安康',
					amount: '80,393',
					tb: '-4,909',
					tbP: '-5.75'
				},{
					index: '8',
					unit: '延安',
					amount: '104,501',
					tb: '-6,699',
					tbP: '-6.02'
				},{
					index: '9',
					unit: '咸阳',
					amount: '177,154',
					tb: '-11,988',
					tbP: '-6.34'
				},{
					index: '10',
					unit: '榆林',
					amount: '143,257',
					tb: '-12,944',
					tbP: '-8.29'
				},{
					index: '11',
					unit: '渭南',
					amount: '175,515',
					tb: '-19,492',
					tbP: '-10.00'
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
		height: 4.24rem;
		
		.tableBoxBase {
			width: inherit;
			height: 4.2rem;
			
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