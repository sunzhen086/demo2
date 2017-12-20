<template>
	<box-base class="leftBox">
		<div slot="box-title">
			<p class="title">问题预警情况明细</p>
		</div>
		<div slot="box-extend">
		</div>

		<div class="content">
			<el-table class="cma-report" height="560" :data="tableData" border @row-click="showDetail" style="cursor:pointer;">
				<el-table-column label="序号" align="center" width="82">
					<template scope="scope">
						<div class="muti">
							{{scope.row.id}}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="级别" align="center" width="85">
					<template scope="scope">
						<div class="muti">
							{{scope.row.level}}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="类型" align="center" width="85">
					<template scope="scope">
						<div class="muti">
							{{scope.row.type}}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="问题描述" align="left" header-align="center" width="185">
					<template scope="scope">
						<div class="muti">
							{{scope.row.desc}}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="对应策略" align="left" header-align="center">
					<template scope="scope">
						<div class="muti">
							{{scope.row.strat}}
						</div>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import tableLink from 'components/tablelink/table-link.vue';

	export default {
		data() {
			return {
				tableData: [{
					"id": 1,
					"level": "一般",
					"type": "客户",
					"desc": "西安市5月份客户流失率超过1.3%",
					"strat": "分析流失客户数据，是否正常注销；调研流失客户，分析实际原因；分析流失影响，是否包括贡献度大的客户"
				}, {
					"id": 2,
					"level": "严重",
					"type": "市场",
					"desc": "西安市有14个规格市场状态 松，零售价格指数低于0.95",
					"strat": ""
				}, {"id": 3,
					"level": "一般",
					"type": "市场",
					"desc": "西安市有11个规格市场状态 稍松，价格指数>=0.95且<0.98;有1个规格市场状态紧，价格指数>1.03",
					"strat": ""}, {}, {}, {}, {}, {}, {}]
			}
		},
		components: {
			boxBase,
			tableLink
		},
		methods:{
			showDetail:function(){
				this.$router.push({ path: '/extended/warncenterdetail'});
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding-top: 0.1rem;
		height: 5.62rem;
	}
</style>