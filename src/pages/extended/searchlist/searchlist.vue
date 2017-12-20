<template>
	<div class="searchListMain">
		<div class="searchListBar">
			<div class="searchListInput">
				<div class="searchListLogo"></div>
				<el-input class="cma" id="searchListELInput"
				  size="large"
				  icon="search"
				  :on-icon-click="handleIconClick">
				</el-input>
			</div>
			<tab-base class="searchListTab" :option=searchOption @tab-click="tabClick"></tab-base>
		</div>
		<div class="searchResultList">
			<router-link to="/extended/datawiki/404" v-if="searchOption.activePane == 'tab1' || searchOption.activePane == 'tab2'">
			<div class="oneResult">
				<div class="oneResultTitle"><span class='textHighlight'>中</span>国烟草总公司西安市烟草专卖局（公司）</div>
				<div class="oneResultContent">西安市烟草专卖局成立于 1987 年元月，内设处室及专业部门 10 个、直属专业公司 3 个；下辖 4 个城区烟草专卖分局（卷烟营销部）；7 个区（县）烟草专卖局（烟草公司）。现有干部职工 1600 名。</div>
				<i class="fa fa-chevron-right rightArrow" aria-hidden="true"></i>
				<div class="oneResultType">信息类型：公司</div>
			</div>
			</router-link>
			<router-link to="/extended/industrywiki" v-if="searchOption.activePane == 'tab1' || searchOption.activePane == 'tab3'">
			<div class="oneResult">
				<div class="oneResultTitle">陕西<span class='textHighlight'>中</span>烟工业有限责任公司</div>
				<div class="oneResultContent">陕西<span class='textHighlight'>中</span>烟工业有限责任公司组建于 2003 年 12 月，隶属于国家烟草专卖局（<span class='textHighlight'>中</span>国烟草总公司）。目前，陕西<span class='textHighlight'>中</span>烟工业有限责任公司拥有宝鸡卷烟厂、延安卷烟厂、汉<span class='textHighlight'>中</span>卷烟厂、旬阳卷烟分厂、澄城卷烟分厂五个卷烟加工企业和一个卷烟材料厂，现有职工 8000 多人，总资产 80 亿元。</div>
				<i class="fa fa-chevron-right rightArrow" aria-hidden="true"></i>
				<div class="oneResultType">信息类型：工业</div>
			</div>
			</router-link>
			<router-link to="/extended/itemwiki" v-if="searchOption.activePane == 'tab1' || searchOption.activePane == 'tab4'">
			<div class="oneResult">
				<div class="oneResultTitle"><span class='textHighlight'>中</span>华（软）</div>
				<div class="oneResultContent">烤烟型、焦油含量 11 mg、烟气烟碱量 1.0 mg、烟气一氧化碳量 11 mg、条形码 6901028075770、批发价 583 元/条。截止到 6 月 28 日年累计销量 12345 箱，同比增长 12.23 %。</div>
				<i class="fa fa-chevron-right rightArrow" aria-hidden="true"></i>
				<div class="oneResultType">信息类型：商品</div>
			</div>
			</router-link>
			<router-link to="/extended/custwiki" v-if="searchOption.activePane == 'tab1' || searchOption.activePane == 'tab5'">
			<div class="oneResult">
				<div class="oneResultTitle">西安市长安区<span class='textHighlight'>中</span>惠商店</div>
				<div class="oneResultContent">负责人：张建学；专卖许可证：123456；经营地址：长安区东大街道东大正街；所属公司：西安市烟草专卖局（公司）</div>
				<i class="fa fa-chevron-right rightArrow" aria-hidden="true"></i>
				<div class="oneResultType">信息类型：客户</div>
			</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import tabBase from 'components/tab/tab-base.vue';
	
	export default {
		data() {
			return {
				searchKeyWords: "中",
				searchOption: {
					data:[
						{
							key: 'tab1',
							text: '全部'
						},
						{
							key: 'tab2',
							text: '公司'
						},
						{
							key: 'tab3',
							text: '工业'
						},
						{
							key: 'tab4',
							text: '商品'
						},
						{
							key: 'tab5',
							text: '客户'
						}
					],
					activePane: 'tab1'
				},
				searchResults: [
					{
						'title': '中国烟草总公司西安市烟草专卖局（公司）',
						'content': '西安市烟草专卖局成立于 1987 年元月，内设处室及专业部门 10 个、直属专业公司 3 个；下辖 4 个城区烟草专卖分局（卷烟营销部）；7 个区（县）烟草专卖局（烟草公司）。现有干部职工 1600 名。',
						'type': '公司'
					},
					{
						'title': '陕西中烟工业有限责任公司',
						'content': '陕西中烟工业有限责任公司组建于 2003 年 12 月，隶属于国家烟草专卖局（中国烟草总公司）。目前，陕西中烟工业有限责任公司拥有宝鸡卷烟厂、延安卷烟厂、汉中卷烟厂、旬阳卷烟分厂、澄城卷烟分厂五个卷烟加工企业和一个卷烟材料厂，现有职工 8000 多人，总资产 80 亿元。',
						'type': '工业'
					},
					{
						'title': '西安市长安区中惠商店',
						'content': '负责人：张建学；专卖许可证：123456；经营地址：长安区东大街道东大正街；所属公司：西安市烟草专卖局（公司）',
						'type': '客户'
					},
					{
						'title': '中华（软）',
						'content': '烤烟型、焦油含量 11 mg、烟气烟碱量 1.0 mg、烟气一氧化碳量11 mg、条形码 6901028075770、批发价 583 元/条。截止到 6 月 28日年累计销量 12345 箱，同比增长 12.23 %。',
						'type': '商品'
					}
				]
			}
		},
		components: {
			tabBase
		},
		methods: {
			initInputValue: function(value) {
				let thisInput = document.getElementById("searchListELInput").getElementsByTagName('input')[0];
				thisInput.value = value;
			},
			tabClick: function(curTab) {
				this.searchOption.activePane = curTab;
				console.log(curTab);
			},
			handleIconClick(event) {
				let thisInput = document.getElementById("searchListELInput").getElementsByTagName('input')[0];
				alert("你要搜索的关键字为：“" + thisInput.value + "”");
				console.log("你要搜索的关键字为：“" + thisInput.value + "”");
		    }
		},
		mounted() {
			this.initInputValue(this.searchKeyWords);
			this.$store.commit('setTopNavStatus', 'extended');
			this.$store.commit('setLeftNavStatus', 'datawiki');
			
		}
	}
</script>

<style lang="scss">
@import '../../../styles/variables.scss';

	.searchListMain {
		width: 8.5rem;
		height: 7.5rem;
		margin-left: $box-distince;
		
		.searchListBar {
			width: inherit;
			height: 1rem;
			
			.searchListInput {
				width: 6rem;
				padding-top: 0.18rem;
				margin-left: $box-distince;
				
				.searchListLogo {
					width: 0.38rem;
					height: 0.38rem;
					margin-top: 0.02rem;
					background: url(../../../static/img/extended/searchlist/searchListLogo.png) no-repeat;
					background-size: 100%;
					float: left;
				}
				
				#searchListELInput {
					width: 5rem;
					margin-left: $box-distince;
					
					input {
						background: #040E28 !important;
						border: 2px solid #309BFF !important;
						float: left;
					}
				}
			}
			
			.searchListTab {
				margin-top: 0.1rem;
				margin-left: 0.6rem;
				border: none;
				
				li {
					padding: 0;
					margin-left: 0.25rem;
					color: #B8BCC5;
					background: none;
				}
				li:hover {
					color: #2D97FB;
					text-decoration: underline;
					background: none;
				}
				.active {
					color: #2D97FB;
					background: none;
				}
			}
		}
		
		.searchResultList {
			height: 5.6rem;
			color: #FFF;
			
			.oneResult {
				width: inherit;
				height: 1.3rem;
				margin-top: -1px;
				border-top: 1px solid #0b1a40;
				border-bottom: 1px solid #0b1a40;
				padding: 0.15rem;
				position: relative;
				
				.textHighlight {
					color: $orange;
				}
				
				.oneResultTitle {
					height: 0.3rem;
					margin-left: 0.3rem;
					padding-top: 0.05rem;
					font-size: 0.18rem;
					line-height: 0.3rem;
				}
				
				.oneResultContent {
					height: 0.6rem;
					margin: 0.05rem 0.3rem;
					margin-right: 0.55rem;
					font-size: 0.14rem;
					text-indent: 0.28rem;
					line-height: 0.18rem;
				}
				
				.oneResultType {
					height: 0.2rem;
					margin-left: 0.3rem;
					text-indent: 0.28rem;
				}
				
				.rightArrow {
					position: absolute;
					right: 0.2rem;
					top: 0.75rem;
					color: #467BCB;
				}
			}
			.oneResult:hover {
				background-color: #0b1a40;
				cursor: pointer;
			}
		}
	}
</style>