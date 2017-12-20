<template>
	<el-table class="cma-report row-height-35" :show-header="true" height="400" :data="reportData1">
		<el-table-column label="序号" prop='seq' align="center" width='72'>
		</el-table-column>
		<el-table-column label="商品名称" prop='itemName' align="left" width='210' header-align="center">
		</el-table-column>
		<el-table-column label="销量占比" width='210' align="center">
			<template scope="scope">
				<multi-content-extend :rate=scope.row.salePer*1></multi-content-extend>
			</template>
		</el-table-column>
		<el-table-column label="本期销量" prop='sale' align="right" width="210" header-align="center">
		</el-table-column>
		<el-table-column label="同期销量" prop='saleLast' align="right" width="210" header-align="center">
		</el-table-column>
		<el-table-column label="同比增幅" width='210' align="center">
			<template scope="scope">
				<multi-content-extend :rate=scope.row.inc*1></multi-content-extend>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	import multiContentExtend from 'components/multicontent/multicontent-extend.vue';
	export default {
		props: {
			reportData: Array
		},
		computed: {
			reportData1: function() {
				return [{
						'seq': 1,
						'itemName': '云烟（软大重九）',
						'salePer': '14.02',
						'sale': '498.68',
						'saleLast': '381.30',
						'inc': '30.78'
					},
					{
						'seq': 2,
						'itemName': '黄鹤楼（硬1916）',
						'salePer': '12.40',
						'sale': '441.06',
						'saleLast': '468.192',
						'inc': '-5.79'
					},{
						'seq': 3,
						'itemName': '白沙（和天下）',
						'salePer': '11.99',
						'sale': '426.47',
						'saleLast': '383.06',
						'inc': '11.31'
					},
					{
						'seq': 4,
						'itemName': '黄鹤楼（硬攀登）',
						'salePer': '11.20',
						'sale': '398.27.06',
						'saleLast': '180.82',
						'inc': '120.26'
					},{
						'seq': 5,
						'itemName': '南京（九五）',
						'salePer': '14.02',
						'sale': '498.68',
						'saleLast': '381.30',
						'inc': '30.78'
					},
					{
						'seq': 6,
						'itemName': '黄鹤楼（硬天骄圣地）',
						'salePer': '9.58',
						'sale': '340.65',
						'saleLast': '0.0',
						'inc': '0.0'
					},{
						'seq': 7,
						'itemName': '黄金叶（天叶）',
						'salePer': '7.47',
						'sale': '265.64',
						'saleLast': '192.33',
						'inc': '38.12'
					},
					{
						'seq': 8,
						'itemName': '黄鹤楼（硬平安）',
						'salePer': '7.01',
						'sale': '249.23',
						'saleLast': '173.58',
						'inc': '43.58'
					},{
						'seq': 9,
						'itemName': '白沙（硬细支和天下）',
						'salePer': '2.61',
						'sale': '92.99',
						'saleLast': '26.00',
						'inc': '257.66'
					},
					{
						'seq': 10,
						'itemName': '贵烟（国酒香30）',
						'salePer': '2.44',
						'sale': '86.91',
						'saleLast': '76.08',
						'inc': '14.24'
					},{
						'seq': 11,
						'itemName': '好猫（天赋）',
						'salePer': '2.04',
						'sale': '72.61',
						'saleLast': '105.53',
						'inc': '-31.19'
					},
					{
						'seq': 12,
						'itemName': '黄鹤楼（硬为了谁）',
						'salePer': '1.68',
						'sale': '59.53',
						'saleLast': '86.61',
						'inc': '-30.80'
					},{
						'seq': 13,
						'itemName': '南京（软95）',
						'salePer': '1.31',
						'sale': '46.61',
						'saleLast': '12.11',
						'inc': '282.80'
					},
					{
						'seq': 14,
						'itemName': '白沙（软和天下）',
						'salePer': '0.89',
						'sale': '31.66',
						'saleLast': '8.84',
						'inc': '258.10'
					},{
						'seq': 15,
						'itemName': '苏烟（沉香）',
						'salePer': '0.86',
						'sale': '30.58',
						'saleLast': '39.80',
						'inc': '-23.17'
					},
					{
						'seq': 16,
						'itemName': '黄金叶（天叶细支）',
						'salePer': '0.84',
						'sale': '30.00',
						'saleLast': '0.62',
						'inc': '4738.06'
					},{
						'seq': 17,
						'itemName': '南京（细支九五）',
						'salePer': '0.75',
						'sale': '26.69',
						'saleLast': '5.67',
						'inc': '370.92'
					},
					{
						'seq': 18,
						'itemName': '云烟（9+1大重九）',
						'salePer': '0.53',
						'sale': '19.01',
						'saleLast': '11.80',
						'inc': '61.09'
					},{
						'seq': 19,
						'itemName': '恒大（全开式烟魁）',
						'salePer': '0.31',
						'sale': '9.46',
						'saleLast': '14.86',
						'inc': '-64.82'
					},
					{
						'seq': 20,
						'itemName': '熊猫（硬时代版）',
						'salePer': '0.27',
						'sale': '9.46',
						'saleLast': '14.86',
						'inc': '30.78'
					},{
						'seq': 21,
						'itemName': '天子（重庆20年）',
						'salePer': '0.26',
						'sale': '9.08 ',
						'saleLast': '0.0',
						'inc': '0.0'
					},
					{

						'seq': 22,
						'itemName': '利群（休闲',
						'salePer': '0.23',
						'sale': '8.25',
						'saleLast': '6.28',
						'inc': '31.25'
					},{
						'seq': 23,
						'itemName': '熊猫（硬经典）',
						'salePer': '0.17',
						'sale': '6.22',
						'saleLast': '3.00',
						'inc': '107.20'
					},
					{
						'seq': 24,
						'itemName': '中华（金中支）',
						'salePer': '0.17',
						'sale': '6.20',
						'saleLast': '0.00',
						'inc': '0.00'
					},{
						'seq': 25,
						'itemName': '玉溪（硬庄园16支）',
						'salePer': '0.15',
						'sale': '5.22 ',
						'saleLast': '11.81 ',
						'inc': '-55.84'
					},
					{

						'seq': 26,
						'itemName': '金圣（智圣出山16支装）',
						'salePer': '0.13',
						'sale': '4.80',
						'saleLast': '0.00',
						'inc': '0.00'
					},{
						'seq': 27,
						'itemName': '娇子（宽窄自在）',
						'salePer': '0.11',
						'sale': '3.75',
						'saleLast': '4.87',
						'inc': '-23.10'
					},
					{
						'seq': 28,
						'itemName': '黄山（硬天都）',
						'salePer': '0.08',
						'sale': '2.77',
						'saleLast': '0.00',
						'inc': '0.00'
					},{
						'seq': 29,
						'itemName': '娇子（传奇天子）',
						'salePer': '0.06',
						'sale': '2.30',
						'saleLast': '0.88',
						'inc': '160.63'
					},
					{
						'seq': 30,
						'itemName': '黄山（天都）',
						'salePer': '0.05',
						'sale': '1.84',
						'saleLast': '2.95',
						'inc': '-37.64'
					},{
						'seq': 31,
						'itemName': '好猫（非常）',
						'salePer': '0.03',
						'sale': '1.06',
						'saleLast': '5.69',
						'inc': '-81.31'
					},
					{
						'seq': 32,
						'itemName': '苏烟（铂晶）',
						'salePer': '0.02',
						'sale': '0.56',
						'saleLast': '0.00',
						'inc': '0.00'
					},
					{
						'seq': 33,
						'itemName': '天子（传奇）',
						'salePer': '0.01',
						'sale': '0.30',
						'saleLast': '1.66',
						'inc': '-81.93'
					},
					{
						'seq': 34,
						'itemName': '真龙（巴马天成）',
						'salePer': '0.01',
						'sale': '0.22 ',
						'saleLast': '3.64',
						'inc': '-94.07'
					},
					{
						'seq': 35,
						'itemName': '泰山（拂光）',
						'salePer': '0.00',
						'sale': '0.01',
						'saleLast': '0.51',
						'inc': '-98.43'
					}
				];
			}
		},
		components: {
			multiContentExtend
		}
	}
</script>

<style lang="scss" scoped>

</style>