<template>
	<el-table class="cma-report row-height-35" :show-header="true" height="400" :data="reportData1">
		<el-table-column label="序号" prop='seq' align="center" width='70'>
		</el-table-column>
		<el-table-column label="商品名称" prop='itemName' align="left" width='150' header-align="center">
		</el-table-column>
		<el-table-column label="本期销量" prop='sale' align="right" width="150" header-align="center">
		</el-table-column>
		<el-table-column label="同期销量" prop='saleLast' align="right" width="150" header-align="center">
		</el-table-column>
		<el-table-column label="同比增幅" width='144' align="center">
			<template scope="scope">
				<multi-content-extend :rate=scope.row.salePer*1></multi-content-extend>
			</template>
		</el-table-column>
		<el-table-column label="全国本期销量" prop='saleAll' width='150' align="center">
		</el-table-column>
		<el-table-column label="全国同期销量" prop='saleAllLast' width='150' align="center">
		</el-table-column>
		<el-table-column label="全国同比增幅" width='150' align="center">
			<template scope="scope">
				<multi-content-extend :rate=scope.row.saleAllPer*1></multi-content-extend>
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
						'itemName': '娇子（X）',
						'sale': '3691.064',
						'saleLast': '3287.73',
						'salePer': '12.27',
						'saleAll': '3691.064',
						'saleAllLast': '3287.728',
						'saleAllPer': '12.27'
					},
					{
						'seq': 2,
						'itemName': '娇子（软阳光）',
						'sale': '1875.392',
						'saleLast': '1787.32',
						'salePer': '4.93',
						'saleAll': '1875.392',
						'saleAllLast': '1787.32',
						'saleAllPer': '4.93'
					},{
						'seq': 3,
						'itemName': '娇子（格调细支）',
						'sale': '1265.27',
						'saleLast': '607.50',
						'salePer': '108.28',
						'saleAll': '1265.27',
						'saleAllLast': '607.50',
						'saleAllPer': '108.28'
					},
					{
						'seq': 4,
						'itemName': '天子（金）',
						'sale': '1232.86',
						'saleLast': '341.38',
						'salePer': '261.14',
						'saleAll': '1232.86',
						'saleAllLast': '341.38',
						'saleAllPer': '261.14'
					},{

						'seq': 5,
						'itemName': '娇子（时代阳光）',
						'sale': '3691.064',
						'saleLast': '3287.73',
						'salePer': '12.27',
						'saleAll': '3691.064',
						'saleAllLast': '3287.728',
						'saleAllPer': '12.27'
					},
					{
						'seq': 6,
						'itemName': '龙凤呈祥（花开富贵）',
						'sale': '260.17',
						'saleLast': '0.0',
						'salePer': '0',
						'saleAll': '260.17',
						'saleAllLast': '0.0',
						'saleAllPer': '0'
					},{
						'seq': 7,
						'itemName': '娇子（新概念）',
						'sale': '150.96',
						'saleLast': '216.12',
						'salePer': '-30.15',
						'saleAll': '150.96',
						'saleAllLast': '216.12',
						'saleAllPer': '-30.15'
					},
					{
						'seq': 8,
						'itemName': '龙凤呈祥（百年好合',
						'sale': '120.13',
						'saleLast': '64.57',
						'salePer': '86.06',
						'saleAll': '120.13',
						'saleAllLast': '64.57',
						'saleAllPer': '86.06'
					},{
						'seq': 9,
						'itemName': '天子（千里江山细支）',
						'sale': '110.92',
						'saleLast': '0.00',
						'salePer': '0',
						'saleAll': '110.92',
						'saleAllLast': '0.00',
						'saleAllPer': '0.00'
					},
					{
						'seq': 10,
						'itemName': '长城（醇雅奶香）',
						'sale': '92.74',
						'saleLast': '136.90',
						'salePer': '-32.26',
						'saleAll': '92.74',
						'saleAllLast': '136.90',
						'saleAllPer': '-32.26'
					},{
						'seq': 11,
						'itemName': '娇子（红芙蓉）',
						'sale': '89.87',
						'saleLast': '93.50',
						'salePer': '-3.88',
						'saleAll': '89.87',
						'saleAllLast': '93.50',
						'saleAllPer': '-3.88'
					},
					{
						'seq': 12,
						'itemName': '龙凤呈祥（硬道理）',
						'sale': '71.82',
						'saleLast': '0.00',
						'salePer': '0.00',
						'saleAll': '71.82',
						'saleAllLast': '0.00',
						'saleAllPer': '0.00'
					},{
						'seq': 13,
						'itemName': '工字（红）',
						'sale': '70.24 ',
						'saleLast': '115.44',
						'salePer': '-39.16',
						'saleAll': '70.24',
						'saleAllLast': '115.44',
						'saleAllPer': '-39.16'
					},
					{
						'seq': 14,
						'itemName': '天子（千里江山）',
						'sale': '40.58',
						'saleLast': '0.00',
						'salePer': '0.00',
						'saleAll': '40.58',
						'saleAllLast': '0.00',
						'saleAllPer': '0.00'
					},{
						'seq': 15,
						'itemName': '天子（小天子）',
						'sale': '29.03',
						'saleLast': '57.88',
						'salePer': '-49.84',
						'saleAll': '29.03',
						'saleAllLast': '57.88',
						'saleAllPer': '-49.84'
					},
					{
						'seq': 16,
						'itemName': '娇子（祥云）',
						'sale': '28.37',
						'saleLast': '72.78',
						'salePer': '-61.02',
						'saleAll': '28.37',
						'saleAllLast': '72.78',
						'saleAllPer': '-61.02'
					},{
						'seq': 17,
						'itemName': '娇子（宽窄如意）',
						'sale': '27.37',
						'saleLast': '2.96',
						'salePer': '823.48',
						'saleAll': '27.37',
						'saleAllLast': '2.96',
						'saleAllPer': '823.48'
					},
					{
						'seq': 18,
						'itemName': '龙凤呈祥（硬珍品）',
						'sale': '19.50',
						'saleLast': '89.97',
						'salePer': '-78.33',
						'saleAll': '19.50',
						'saleAllLast': '89.97',
						'saleAllPer': '-78.33'
					},{
						'seq': 19,
						'itemName': '天子（五粮香30年）',
						'sale': '11.27',
						'saleLast': '0.00',
						'salePer': '0.00',
						'saleAll': '11.27',
						'saleAllLast': '0.00',
						'saleAllPer': '0.00'
					},
					{
						'seq': 20,
						'itemName': '长城（醇雅coco）',
						'sale': '10.14',
						'saleLast': '23.24',
						'salePer': '-56.37',
						'saleAll': '10.14',
						'saleAllLast': '23.24',
						'saleAllPer': '-56.37'
					},{
						'seq': 21,
						'itemName': '天子（重庆20年）',
						'sale': '9.08',
						'saleLast': '0.00',
						'salePer': '0.00',
						'saleAll': '9.08',
						'saleAllLast': '0.00',
						'saleAllPer': '0.00'
					},
					{
						'seq': 22,
						'itemName': '狮牌（大S）',
						'sale': '7.75',
						'saleLast': '11.53',
						'salePer': '-32.79',
						'saleAll': '7.75',
						'saleAllLast': '11.53',
						'saleAllPer': '-32.79'
					},{
						'seq': 23,
						'itemName': '娇子（宽窄好运）',
						'sale': '6.24',
						'saleLast': '0.00',
						'salePer': '0.00',
						'saleAll': '6.24',
						'saleAllLast': '0.00',
						'saleAllPer': '0.00'
					},
					{

						'seq': 24,
						'itemName': '长城（传奇）',
						'sale': '6.09',
						'saleLast': '7.44',
						'salePer': '-18.17',
						'saleAll': '6.09',
						'saleAllLast': '7.44',
						'saleAllPer': '-18.17'
					},{
						'seq': 25,
						'itemName': '长城（迷你咖啡）',
						'sale': '5.28 ',
						'saleLast': '7.17 ',
						'salePer': '-26.28',
						'saleAll': '5.28',
						'saleAllLast': '7.17 ',
						'saleAllPer': '-26.28'
					},
					{
						'seq': 26,
						'itemName': '娇子（X龙韵）',
						'sale': '4.61',
						'saleLast': '5.42',
						'salePer': '-23.10',
						'saleAll': '4.17',
						'saleAllLast': '5.42',
						'saleAllPer': '-23.10'
					},{
						'seq': 27,
						'itemName': '工字（1号）',
						'sale': '4.17',
						'saleLast': '5.42',
						'salePer': '-23.10',
						'saleAll': '4.17',
						'saleAllLast': '5.42',
						'saleAllPer': '-23.10'
					},
					{
						'seq': 28,
						'itemName': '娇子（宽窄自在）',
						'sale': '3.75',
						'saleLast': '4.87',
						'salePer': '-23.10',
						'saleAll': '3.75',
						'saleAllLast': '4.87',
						'saleAllPer': '-23.10'
					},{
						'seq': 29,
						'itemName': '长城（子龙）',
						'sale': '2.74',
						'saleLast': '7.13',
						'salePer': '-61.62',
						'saleAll': '2.74',
						'saleAllLast': '7.13',
						'saleAllPer': '-61.62'
					},
					{
						'seq': 30,
						'itemName': '长城（金南极）',
						'sale': '2.71',
						'saleLast': '4.33',
						'salePer': '-37.56',
						'saleAll': '2.71',
						'saleAllLast': '4.33',
						'saleAllPer': '-37.56'
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