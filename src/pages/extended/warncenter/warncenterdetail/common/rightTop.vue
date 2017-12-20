<template>
	<div class="page">
		<box-base class="main">
			<div slot="box-title">{{tableTitle[dataName]}}</div>
			<div slot="box-extend">（月度销量和单条值取最近有销量 3 个月的数据计算）</div>
			<div class="content">
				<el-table class="cma row-height-35" :show-header="true" :data="tableData[dataName]" height="385">
					<el-table-column label="序号" prop='index' align="center" width='70'>
					</el-table-column>
					<el-table-column label="客户编码" align="center" header-align="center" width="120">
						<template scope="scope">
							<div class="link" @click="toWiki(scope.row.custCode)">
								{{scope.row.custCode}}
							</div>
						</template>
					</el-table-column>
					<el-table-column label="客户名称" prop='custName' align="center" header-align="center">
					</el-table-column>
					<el-table-column label="月销量" prop='monthSale' align="center" header-align="center" width="90">
					</el-table-column>
					<el-table-column label="单条值" prop='oneValue' align="center" width="100">
					</el-table-column>
					<el-table-column label="市场类型" prop='marketType' align="center" width="70">
					</el-table-column>
					<el-table-column label="经营业态" prop='managementFormat' align="center" width="70">
					</el-table-column>
					<el-table-column label="营销部" prop='department' align="center" width="100">
					</el-table-column>
				</el-table>
			</div>
		</box-base>
	</div>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';

	export default {
		props: {
			dataName: String
		},
		data() {
			return {
				tableTitle: {
					'table1': '5 月份流失客户列表',
					'table2': '5 月份专卖注销客户列表'
				},
				tableData: {
					'table1': [
						{
							'index': '1',
							'custCode': '610122103126',
							'custName': '西安市长安区中惠商店',
							'monthSale': '1,420',
							'oneValue': '189.48',
							'marketType': '城镇',
							'managementFormat': '食杂店',
							'department': '长安区分公司'
						},
						{
							'index': '2',
							'custCode': '610101124762',
							'custName': '陕西客又多商贸有限公司西安纺织城分店',
							'monthSale': '1,344',
							'oneValue': '142.37',
							'marketType': '城镇',
							'managementFormat': '烟酒店',
							'department': '灞桥区营销部'
						},
						{
							'index': '3',
							'custCode': '610101193997',
							'custName': '西安市未央区秦渭百货商店',
							'monthSale': '1,257',
							'oneValue': '170.10',
							'marketType': '城镇',
							'managementFormat': '食杂店',
							'department': '未央区营销部'
						},
						{
							'index': '4',
							'custCode': '610101113923',
							'custName': '佳美综合超市',
							'monthSale': '1,187',
							'oneValue': '113.36',
							'marketType': '城镇',
							'managementFormat': '食杂店',
							'department': '未央区营销部'
						},
						{
							'index': '5',
							'custCode': '610101190137',
							'custName': '三兆爱菊产品经销店',
							'monthSale': '1,167',
							'oneValue': '123.55',
							'marketType': '城镇',
							'managementFormat': '食杂店',
							'department': '雁塔区营销部'
						},
						{
							'index': '6',
							'custCode': '610113227180',
							'custName': '陕西米禾供应链管理股份有限公司西安昆明路店',
							'monthSale': '1,121',
							'oneValue': '200.61',
							'marketType': '城镇',
							'managementFormat': '其他',
							'department': '雁塔区营销部'
						},
						{
							'index': '7',
							'custCode': '610113126439',
							'custName': '西安曲江新区沈家旺百货便利店',
							'monthSale': '1,034',
							'oneValue': '123.18',
							'marketType': '城镇',
							'managementFormat': '便利店',
							'department': '雁塔区营销部'
						},
						{
							'index': '8',
							'custCode': '610101117664',
							'custName': '鑫谷百货商店',
							'monthSale': '922',
							'oneValue': '176.62 ',
							'marketType': '城镇',
							'managementFormat': '烟酒店',
							'department': '未央区营销部'
						},
						{
							'index': '9',
							'custCode': '610113125757',
							'custName': '西安市雁塔区鹏洋烟酒店',
							'monthSale': '828',
							'oneValue': '211.57',
							'marketType': '城镇',
							'managementFormat': '烟酒店',
							'department': '雁塔区营销部'
						},
						{
							'index': '10',
							'custCode': '610126101858',
							'custName': '泾东世佳商行',
							'monthSale': '708',
							'oneValue': '158.40',
							'marketType': '城镇',
							'managementFormat': '烟酒店',
							'department': '高陵区分公司'
						},
						{
							'index': '11',
							'custCode': '610101125490',
							'custName': '西安市大明宫遗址区万家喜百货便利店',
							'monthSale': '680',
							'oneValue': '110.39',
							'marketType': '城镇',
							'managementFormat': '便利店',
							'department': '未央区营销部'
						},
						{
							'index': '12',
							'custCode': '610101194442',
							'custName': '富贵烟酒',
							'monthSale': '606',
							'oneValue': '160.57',
							'marketType': '城镇',
							'managementFormat': '烟酒店',
							'department': '碑林区营销部'
						},
						{
							'index': '13',
							'custCode': '610112125629',
							'custName': '泡泡水果超市',
							'monthSale': '603',
							'oneValue': '157.97',
							'marketType': '城镇',
							'managementFormat': '食杂店',
							'department': '未央区营销部'
						},
						{
							'index': '14',
							'custCode': '610101115307',
							'custName': '驰腾烟酒商行',
							'monthSale': '601',
							'oneValue': '162.69',
							'marketType': '城镇',
							'managementFormat': '烟酒店',
							'department': '雁塔区营销部'
						},
						{
							'index': '15',
							'custCode': '610101198437',
							'custName': '万家福超市',
							'monthSale': '581',
							'oneValue': '114.55',
							'marketType': '城镇',
							'managementFormat': '便利店',
							'department': '未央区营销部'
						}
					],
					'table2': [
						{
							'index': '1',
							'custCode': '610101170280',
							'custName': '天謦园烟酒商店',
							'monthSale': '1,420',
							'oneValue': '189.48',
							'marketType': '城镇',
							'managementFormat': '食杂店',
							'department': '雁塔区'
						},
						{
							'index': '2',
							'custCode': '610101193997',
							'custName': '西安市未央区秦渭百货商店',
							'monthSale': '1,257',
							'oneValue': '170.10',
							'marketType': '城镇',
							'managementFormat': '食杂店',
							'department': '未央区'
						},
						{
							'index': '3',
							'custCode': '610101113923',
							'custName': '佳美综合超市',
							'monthSale': '1,187',
							'oneValue': '113.36',
							'marketType': '城镇',
							'managementFormat': '食杂店',
							'department': '未央区'
						},
						{
							'index': '4',
							'custCode': '610101190137',
							'custName': '三兆爱菊产品经销店',
							'monthSale': '1,167',
							'oneValue': '123.55',
							'marketType': '城镇',
							'managementFormat': '食杂店',
							'department': '雁塔区'
						},
						{
							'index': '5',
							'custCode': '610113227180',
							'custName': '陕西米禾供应链管理股份有限公司西安昆明路店',
							'monthSale': '1,121',
							'oneValue': '200.61',
							'marketType': '城镇',
							'managementFormat': '其他',
							'department': '雁塔区'
						},
						{
							'index': '6',
							'custCode': '610113126439',
							'custName': '西安曲江新区沈家旺百货便利店',
							'monthSale': '1,034',
							'oneValue': '123.18',
							'marketType': '城镇',
							'managementFormat': '便利店',
							'department': '雁塔区'
						},
						{
							'index': '7',
							'custCode': '610101117664',
							'custName': '鑫谷百货商店',
							'monthSale': '922',
							'oneValue': '176.62',
							'marketType': '城镇',
							'managementFormat': '烟酒店',
							'department': '未央区'
						},
						{
							'index': '8',
							'custCode': '610113125757',
							'custName': '西安市雁塔区鹏洋烟酒店',
							'monthSale': '828',
							'oneValue': '211.57',
							'marketType': '城镇',
							'managementFormat': '烟酒店',
							'department': '雁塔区'
						},
						{
							'index': '9',
							'custCode': '610126101858',
							'custName': '泾东世佳商行',
							'monthSale': '708',
							'oneValue': '158.40',
							'marketType': '城镇',
							'managementFormat': '烟酒店',
							'department': '高陵区'
						},
						{
							'index': '10',
							'custCode': '610101125490',
							'custName': '西安市大明宫遗址区万家喜百货便利店',
							'monthSale': '680',
							'oneValue': '110.39',
							'marketType': '城镇',
							'managementFormat': '便利店',
							'department': '未央区'
						},
						{
							'index': '11',
							'custCode': '610112125629',
							'custName': '泡泡水果超市',
							'monthSale': '603',
							'oneValue': '157.97',
							'marketType': '城镇',
							'managementFormat': '食杂店',
							'department': '未央区'
						},
						{
							'index': '12',
							'custCode': '610101115307',
							'custName': '驰腾烟酒商行',
							'monthSale': '601',
							'oneValue': '162.69',
							'marketType': '城镇',
							'managementFormat': '烟酒店',
							'department': '雁塔区'
						},
						{
							'index': '13',
							'custCode': '610101198437',
							'custName': '万家福超市',
							'monthSale': '581',
							'oneValue': '114.55',
							'marketType': '城镇',
							'managementFormat': '便利店',
							'department': '未央区'
						},
						{
							'index': '14',
							'custCode': '610101124229',
							'custName': '兴立客百货便利店',
							'monthSale': '579',
							'oneValue': '97.03',
							'marketType': '城镇',
							'managementFormat': '便利店',
							'department': '未央区'
						},
						{
							'index': '15',
							'custCode': '610113125752',
							'custName': '西安市雁塔区金枫缘烟酒商店',
							'monthSale': '575',
							'oneValue': '189.91',
							'marketType': '城镇',
							'managementFormat': '烟酒店',
							'department': '雁塔区'
						}
					]
				}
			}
		},
		methods:{
			toWiki: function(name) {
				this.$router.push("/extended/custwiki");
			}
		},
		components: {
			boxBase
		},
	}
</script>

<style lang="scss" scoped>
	@import "../../../../../styles/variables.scss";
	
	.main{
		height: 4.34rem;
		margin-top: $box-distince;
		
		.content {
			margin-top: 0.12rem;
			
			.link {
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}
</style>
