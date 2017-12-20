<template>
	<box-base>
		<div slot="box-title">
			<p class="title">各地市客户分布</p>
		</div>
		<div slot="box-extend">
		</div>

		<div class="content">
			<el-table class="cma" :show-header=showHeader :data="tableData" border style="width: 100%;border: 0.01rem solid rgba(11,79,193,0.5);">
				<el-table-column label="单位" width="74" align="center">
					<template scope="scope">
						<div class="muti">
							{{scope.row.com }}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="订货户数" align="center" min-width="148">
					<template scope="scope">
						<div class="muti">
							<multi-content :content=scope.row.orderCount :rate=scope.row.orderCountPercent*1 :formatFlag='true'></multi-content>
						</div>
					</template>
				</el-table-column>
				<el-table-column label="流入客户数" align="center" min-width="148">
					<template scope="scope">
						<div class="muti">
							<multi-content :content=scope.row.custIn :rate=scope.row.custInPercent*1></multi-content>
						</div>
					</template>
				</el-table-column>
				<el-table-column label="流出客户数" align="center" min-width="148">
					<template scope="scope">
						<div class="muti">
							<multi-content :content=scope.row.custOut :rate=scope.row.custOutPercent*1></multi-content>
						</div>
					</template>
				</el-table-column>
				<el-table-column label="稳定客户数" align="center" min-width="148">
					<template scope="scope">
						<div class="muti">
							<multi-content :content=scope.row.custStable :rate=scope.row.custStablePercent*1 :formatFlag='true'></multi-content>
						</div>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import multiContent from 'components/multicontent/multicontent.vue';
	export default {
		computed: {},

		data() {
			return {
				showHeader: true,
				tableData: [{
					'com': '全省',
					'orderCount': '129122',
					'orderCountPercent': '-1.31',
					'custIn': '1080',
					'custInPercent': '-29.19',
					'custOut': '1537',
					'custOutPercent': '12.68',
					'custStable': '125494',
					'custStablePercent': '-1.84',
				}, {
					'com': '安康',
					'orderCount': '12411',
					'custIn': '72',
					'custOut': '142',
					'custStable': '11982',
					'orderCountPercent': '-0.97',
					'custInPercent': '-27.27',
					'custOutPercent': '-12.88',
					'custStablePercent': '-0.34'
				}, {
					'com': '宝鸡',
					'orderCount': '10536',
					'custIn': '91',
					'custOut': '154',
					'custStable': '10210',
					'orderCountPercent': '-1.45',
					'custInPercent': '-111.63',
					'custOutPercent': '46.67',
					'custStablePercent': '-2.26'
				}, {
					'com': '汉中',
					'orderCount': '13462',
					'custIn': '122',
					'custOut': '161',
					'custStable': '12957',
					'orderCountPercent': '-0.68',
					'custInPercent': '-84.85',
					'custOutPercent': '3.21',
					'custStablePercent': '-1.97'
				}, {
					'com': '商洛',
					'orderCount': '8750',
					'custIn': '88',
					'custOut': '71',
					'custStable': '8440',
					'orderCountPercent': '0.84',
					'custInPercent': '137.84',
					'custOutPercent': '44.90',
					'custStablePercent': '-1.21'
				}, {
					'com': '铜川',
					'orderCount': '2478',
					'custIn': '30',
					'custOut': '11',
					'custStable': '2383',
					'orderCountPercent': '7.65',
					'custInPercent': '30.43',
					'custOutPercent': '10.00',
					'custStablePercent': '7.05'
				}, {
					'com': '渭南',
					'orderCount': '15411',
					'custIn': '164',
					'custOut': '230',
					'custStable': '14953',
					'orderCountPercent': '-6.49',
					'custInPercent': '164.52',
					'custOutPercent': '-2.31',
					'custStablePercent': '-7.55'
				}, {
					'com': '西安',
					'orderCount': '30825',
					'custIn': '267',
					'custOut': '399',
					'custStable': '30159',
					'orderCountPercent': '1.30',
					'custInPercent': '-14.70',
					'custOutPercent': '27.48',
					'custStablePercent': '1.28'
				}, {
					'com': '咸阳',
					'orderCount': '14969',
					'custIn': '71',
					'custOut': '142',
					'custStable': '14714',
					'orderCountPercent': '-1.55',
					'custInPercent': '1.43',
					'custOutPercent': '2.16',
					'custStablePercent': '-1.95'
				}, {
					'com': '延安',
					'orderCount': '8235',
					'custIn': '75',
					'custOut': '114',
					'custStable': '8131',
					'orderCountPercent': '-3.05',
					'custInPercent': '59.57',
					'custOutPercent': '16.33',
					'custStablePercent': '-3.58'
				}, {
					'com': '杨凌',
					'orderCount': '665',
					'custIn': '2',
					'custOut': '1',
					'custStable': '662',
					'orderCountPercent': '1.06',
					'custInPercent': '0.00',
					'custOutPercent': '0.00',
					'custStablePercent': '1.38'
				}, {
					'com': '榆林',
					'orderCount': '11290',
					'custIn': '98',
					'custOut': '112',
					'custStable': '11290',
					'orderCountPercent': '-3.69',
					'custInPercent': '28.95',
					'custOutPercent': '16.67',
					'custStablePercent': '-4.05'
				}]
			};
		},
		components: {
			boxBase,
			multiContent
		},
		methods: {},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.fa-arrow-up {
		color: $green;
	}
	
	.fa-arrow-down {
		color: $red;
	}
	
	.title {
		padding-right: 0.05rem;
	}
	
	.content {
		margin-left: 0.11rem;
		margin-right: 0.11rem;
		margin-top: 0.13rem;
		height: 5.39rem;
		padding-top: 0.2rem;
		.muti {
			margin-left: -0.1rem;
			margin-right: -0.1rem;
		}
	}
</style>