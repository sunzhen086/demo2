<template>
	<box-base class="leftBox">
		<div slot="box-title">
			<p class="title">规则与策略库维护</p>
		</div>
		<div slot="box-extend">
		</div>

		<div class="content">
			<el-table class="cma-report" height="570" :data="tableData" border>
				<el-table-column label="序号" type="index" align="center" width="82"></el-table-column>
				<el-table-column label="分类" align="center" width="85">
					<template scope="scope">
						<div class="muti">
							{{scope.row.type}}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="指标" header-align="center" align="left" width="185">
					<template scope="scope">
						<div class="muti">
							{{scope.row.index}}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="规则" header-align="center" align="left">
					<template scope="scope">
						<div class="muti">
							<wapContent :content=scope.row.rule></wapContent>
						</div>
					</template>
				</el-table-column>
				<el-table-column label="对应策略" header-align="center" align="left">
					<template scope="scope">
						<div class="muti">
							{{scope.row.strat}}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="修改" width="75" align="center">
					<template scope="scope">
						<el-button type="primary" icon="edit" size="small"></el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import bus from './bus.js';
	import wapContent from './wapcontent.vue';
	export default {
		data() {
			return {
				tableData: [{
					"type": "销量",
					"index": "累计销量同比增幅",
					"rule": "全省和全国对比，各地市与全省对比\n严重： 偏差超过10个百分点\n一般： 偏差超过8个百分点\n较轻： 偏差超过5个百分点 ",
					"strat": ""
				}, {
					"type": "销量",
					"index": "累计销量计划完成进度",
					"rule": "全省与全国对比，各地市与全省对比\n严重：偏差超过5个百分点\n一般：偏差超过3个百分点\n较轻：偏差超过2个百分点",
					"strat": ""
				}, {
					"type": "品牌",
					"index": "单规格市场份额和销售增长率",
					"rule": "严重：市场份额<5% 且 同比减少\n" +
						"或者 市场份额>5% 且 同比减少\n" +
						"一般：市场份额<10% 且 同比减少\n" +
						"较轻：市场份额<10% 且 同比增加",
					"strat": "严重：份额小，成长性差-重点关注,关注降速，关注份额;份额大，成长性差-重点调控,把控降速，调整份额"
				}, {
					"type": "品牌",
					"index": "新品复合增长率和上柜率",
					"rule": "严重：复合增长率低于10%\n" +
						"一般：复合增长率低于20%且上柜率<5%\n" +
						"较轻：复合增长率低于20%且上柜率<10%\n" +
						"（计算最近12个月）",
					"strat": "存在严重问题的新品，建议退市；\n存在一般和较轻问题的新品，建议加强品牌宣传和培育活动"
				}, {
					"type": "品牌",
					"index": "单规格去年销量",
					"rule": "严重：低于50箱\n" +
						"一般：低于80箱\n" +
						"较轻：低于100箱\n" +
						"（新品、高价位、外烟、雪茄烟除外）",
					"strat": "存在严重问题的，建议退出市场；\n存在一般问题的，建议和工业协商品牌培育方案"
				}, {
					"type": "品牌",
					"index": "重点品牌中单品牌销量同比增幅",
					"rule": "全省与全国对比，各地市与全省对比\n" +
						"严重：偏差超过5个百分点\n" +
						"一般：偏差超过3个百分点\n" +
						"较轻：偏差超过2个百分点",
					"strat": ""
				}, {
					"type": "销售收入",
					"index": "累计销售收入同比增幅",
					"rule": "全省和全国对比，各地市与全省对比\n" +
						"严重：偏差超过10个百分点\n" +
						"一般：偏差超过8个百分点\n" +
						"较轻：偏差超过5个百分点",
					"strat": ""
				}, {
					"type": "单箱均价",
					"index": "累计单箱均价同比增幅",
					"rule": "全省与全国对比，各地市与全省对比\n" +
						"严重：偏差超过5个百分点\n" +
						"一般：偏差超过3个百分点\n" +
						"较轻：偏差超过2个百分点",
					"strat": "适度控制普三类，四、五类卷烟投放销售"
				}, {
					"type": "市场",
					"index": "零售价格指数",
					"rule": "根据价格指数设置5个区间：松，稍松，平衡，稍紧，紧\n" +
						"严重：松\n" +
						"一般：紧\n" +
						"较轻：稍松",
					"strat": "及时掌握价格变化，精准实施“顺价销、平价控、掉价停”的投放调控"
				}, {
					"type": "市场",
					"index": "月度零售价格指数环比",
					"rule": "严重：环比上升或下降超过5个百分点\n" +
						"一般：环比上升或下降超过3个百分点\n" +
						"较轻：环比上升或下降超过2个百分点",
					"strat": ""
				}, {
					"type": "市场",
					"index": "全省社会库存",
					"rule": "根据社会库存设置5个区间：过大，偏大，适中，偏小，过小\n" +
						"严重：过大\n" +
						"一般：偏大或过小\n" +
						"较轻：偏小",
					"strat": ""
				}, {
					"type": "市场",
					"index": "地市公司紧俏货源投放面",
					"rule": "严重：<20%\n" +
						"一般：<30%\n" +
						"较轻：<50%\n" +
						"投放户数占总户数",
					"strat": ""
				}, {
					"type": "市场",
					"index": "地市公司紧俏货源投放集中度",
					"rule": "严重：>60%\n" +
						"一般：>50%\n" +
						"较轻：>40%\n" +
						"销量前1%的客户销量占比",
					"strat": ""
				}, {
					"type": "客户",
					"index": "周订货户数同比增减",
					"rule": "严重：增减量超过总户数的9%\n" +
						"一般：增减量超过总户数的7%\n" +
						"较轻：增减量超过总户数的5%",
					"strat": ""
				}, {
					"type": "客户",
					"index": "周订货户数环比增减",
					"rule": "严重：超过7%\n" +
						"一般：超过5%\n" +
						"较轻：超过3%",
					"strat": ""
				}, {
					"type": "客户",
					"index": "地市月度客户流失率",
					"rule": "严重：超过3%\n" +
						"一般：超过2%\n" +
						"较轻：超过1%",
					"strat": "分析流失客户数据，是否正常注销；调研流失客户，分析实际原因；分析流失影响，是否包括贡献度大的客户"
				}, {
					"type": "工业",
					"index": "工业累计销量同比增幅",
					"rule": "全省与全国对比，各地市与全省对比\n" +
						"严重：偏差超过5个百分点\n" +
						"一般：偏差超过3个百分点\n" +
						"较轻：偏差超过2个百分点",
					"strat": ""
				}, {
					"type": "工业",
					"index": "工业累计单箱均价同比增幅",
					"rule": "全省与全国对比，各地市与全省对比\n" +
						"严重：偏差超过5个百分点\n" +
						"一般：偏差超过3个百分点\n" +
						"较轻：偏差超过2个百分点",
					"strat": ""
				}]
			}
		},
		components: {
			boxBase,
			wapContent
		},
		methods: {
			filter: function(obj) {
				var _data =  [].concat(this.__data);
				var _new =_data.filter(function(t,i,arr){
					for(var i in obj){
						var value = obj[i];//过滤的的值
						var col = t[i];//表格中的值
						if(col.indexOf(value)==-1){
							return false;
						}
					}
					return true;
				});
				this.tableData=_new;
			}
		},
		created(){
			this.__data = this.tableData
			var _this = this;
			bus.$on('doSearch',function(obj){
				_this.filter(obj)
			})
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../../styles/variables.scss';
	.leftBox {
		margin-right: $box-distince;
		.content {
			padding-top: 0.1rem;
		}
	}
</style>