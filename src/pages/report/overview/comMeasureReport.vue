<template>
	<div class="main cma">
		<box-base class="middleMap">
			<div slot="box-title">
				<p class="title">2016年1-3月全国省级商业企业相关指标排序表</p>
			</div>
			<div slot="box-extend">
				单位：箱、万元
			</div>
			
			<div class="content">
				<el-table border class="cma-report" :show-header=true :data="tableData" >
					<el-table-column sortable  label="工业公司" align="center" :show-overflow-tooltip=true>
						<template scope="scope">
							<div class="muti">{{scope.row.comName}}</div>
						</template>
					</el-table-column>
					
					<el-table-column  label="排名情况" align="center" :show-overflow-tooltip=true>
						<el-table-column sortable  label="销售收入" align="right" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti">{{scope.row.saleSeq}}</div>
							</template>
						</el-table-column>
						<el-table-column sortable  label="单箱结构" align="right" :show-overflow-tooltip=true>
							<template sortable scope="scope">
								<div class="muti">{{scope.row.singleBoxSeq}}</div>
							</template>
						</el-table-column>
					</el-table-column>
					
					<el-table-column  label="销量本省" align="center" :show-overflow-tooltip=true>
						<el-table-column sortable  label="2016" align="right" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti">{{scope.row.comSale}}</div>
							</template>
						</el-table-column>
						<el-table-column sortable  label="同比%" align="right" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti"><multi-content-extend :rate=scope.row.comSaleTB ></multi-content-extend></div>
							</template>
						</el-table-column>
					</el-table-column>
					
					<el-table-column  label="销量全国" align="center" :show-overflow-tooltip=true>
						<el-table-column sortable  label="2016" align="right" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti">{{scope.row.nationSale}}</div>
							</template>
						</el-table-column>
						<el-table-column sortable  label="同比%" align="right" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti"><multi-content-extend :rate=scope.row.nationSaleTB ></multi-content-extend></div>
							</template>
						</el-table-column>
					</el-table-column>
					
					<el-table-column  label="单箱结构（本省）" align="center" :show-overflow-tooltip=true>
						<el-table-column sortable  label="2016" align="right" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti">{{scope.row.comSingleBox}}</div>
							</template>
						</el-table-column>
						<el-table-column sortable  label="同比%" align="right" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti"><multi-content-extend :rate=scope.row.comSingleBoxTB ></multi-content-extend></div>
							</template>
						</el-table-column>
					</el-table-column>
					
					<el-table-column  label="单箱结构（全国）" align="center" :show-overflow-tooltip=true>
						<el-table-column sortable  label="2016" align="right" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti">{{scope.row.nationSingleBox}}</div>
							</template>
						</el-table-column>
						<el-table-column sortable  label="同比%" align="right" :show-overflow-tooltip=true>
							<template scope="scope">
								<div class="muti"><multi-content-extend :rate=scope.row.nationSingleBoxTB ></multi-content-extend></div>
							</template>
						</el-table-column>
					</el-table-column>
				</el-table>
			</div>
		</box-base>
	</div>
</template>

<script>
	import multiContentExtend from 'components/multicontent/multicontent-extend.vue';
	import boxBase from 'components/box/box-base.vue';

	export default {
		data() {
			return {
				tableData: [{
					comName: "合计",
					saleSeq: "",
					singleBoxSeq: "",
					comSale: 1450949,
					comSaleTB: -5.74,
					nationSale: 46991970,
					nationSaleTB: -5.62,
					comSingleBox: 2.65,
					comSingleBoxTB: -1.71,
					nationSingleBox: 2.92,
					nationSingleBoxTB: 2.09
				},{
					comName: "陕西中烟",
					saleSeq: 1,
					singleBoxSeq: 12,
					comSale: 768896,
					comSaleTB: 0.39,
					nationSale: 1075650,
					nationSaleTB: 5.9,
					comSingleBox: 1.83,
					comSingleBoxTB: 1.55,
					nationSingleBox: 1.71,
					nationSingleBoxTB: 1.97
				},{
					comName: "湖南中烟",
					saleSeq: 2,
					singleBoxSeq: 4,
					comSale: 162345,
					comSaleTB: -24.88,
					nationSale: 4572370,
					nationSaleTB: -7.89,
					comSingleBox: 4.33,
					comSingleBoxTB: 5.82,
					nationSingleBox: 3.52,
					nationSingleBoxTB: 2.9
				},{
					comName: "云南中烟",
					saleSeq: 4,
					singleBoxSeq: 11,
					comSale: 124691,
					comSaleTB: -12.64,
					nationSale: 9623140,
					nationSaleTB: -8.42,
					comSingleBox: 2.25,
					comSingleBoxTB: -1.64,
					nationSingleBox: 2.65,
					nationSingleBoxTB: 0.69
				},{
					comName: "浙江中烟",
					saleSeq: 5,
					singleBoxSeq: 8,
					comSale: 66683,
					comSaleTB: -0.58,
					nationSale: 3325600,
					nationSaleTB: 0.57,
					comSingleBox: 3.23,
					comSingleBoxTB: 1.49,
					nationSingleBox: 3.63,
					nationSingleBoxTB: 3.86
				},{
					comName: "中烟实业",
					saleSeq: 8,
					singleBoxSeq: 7,
					comSale: 61241,
					comSaleTB: -9.95,
					nationSale: 2362020,
					nationSaleTB: -5.94,
					comSingleBox: 3.35,
					comSingleBoxTB: 2.29,
					nationSingleBox: 2.25,
					nationSingleBoxTB: 4.85
				},{
					comName: "上海烟草",
					saleSeq: 3,
					singleBoxSeq: 1,
					comSale: 42388,
					comSaleTB: -19.46,
					nationSale: 2820140,
					nationSaleTB: -4.36,
					comSingleBox: 10.78,
					comSingleBoxTB: 0.61,
					nationSingleBox: 6.29,
					nationSingleBoxTB: -4.3
				},{
					comName: "湖北中烟",
					saleSeq: 7,
					singleBoxSeq: 3,
					comSale: 41114,
					comSaleTB: -0.99,
					nationSale: 2645440,
					nationSaleTB: -7.1,
					comSingleBox: 4.33,
					comSingleBoxTB: -1.52,
					nationSingleBox: 3.8,
					nationSingleBoxTB: 4.89
				},{
					comName: "河南中烟",
					saleSeq: 10,
					singleBoxSeq: 18,
					comSale: 37178,
					comSaleTB: 28.99,
					nationSale: 2709260,
					nationSaleTB: -5.98,
					comSingleBox: 1.36,
					comSingleBoxTB: -17.09,
					nationSingleBox: 2.16,
					nationSingleBoxTB: 3.21
				},{
					comName: "江苏中烟",
					saleSeq: 6,
					singleBoxSeq: 2,
					comSale: 37032,
					comSaleTB: 14.36,
					nationSale: 2716800,
					nationSaleTB: 2.93,
					comSingleBox: 5.45,
					comSingleBoxTB: -1.51,
					nationSingleBox: 3.82,
					nationSingleBoxTB: 1.19
				},{
					comName: "山东中烟",
					saleSeq: 11,
					singleBoxSeq: 19,
					comSale: 27482,
					comSaleTB: -0.39,
					nationSale: 2271200,
					nationSaleTB: -5.45,
					comSingleBox: 1.35,
					comSingleBoxTB: -5.72,
					nationSingleBox: 1.68,
					nationSingleBoxTB: 1.22
				},{
					comName: "川渝中烟",
					saleSeq: 9,
					singleBoxSeq: 9,
					comSale: 21665,
					comSaleTB: 16.65,
					nationSale: 1768950,
					nationSaleTB: -1.27,
					comSingleBox: 2.5,
					comSingleBoxTB: 10.7,
					nationSingleBox: 2.26,
					nationSingleBoxTB: 4.98
				},{
					comName: "贵州中烟",
					saleSeq: 12,
					singleBoxSeq: 17,
					comSale: 20868,
					comSaleTB: -24.21,
					nationSale: 1976730,
					nationSaleTB: -5.09,
					comSingleBox: 1.48,
					comSingleBoxTB: -0.75,
					nationSingleBox: 2.27,
					nationSingleBoxTB: 3
				},{
					comName: "广东中烟",
					saleSeq: 13,
					singleBoxSeq: 15,
					comSale: 15655,
					comSaleTB: -23.43,
					nationSale: 3024830,
					nationSaleTB: -5.22,
					comSingleBox: 1.71,
					comSingleBoxTB: 4.83,
					nationSingleBox: 2.23,
					nationSingleBoxTB: -0.1
				},{
					comName: "安徽中烟",
					saleSeq: 14,
					singleBoxSeq: 14,
					comSale: 9474,
					comSaleTB: -36.92,
					nationSale: 1871070,
					nationSaleTB: -14.63,
					comSingleBox: 1.73,
					comSingleBoxTB: 7.26,
					nationSingleBox: 2.36,
					nationSingleBoxTB: 7.94
				},{
					comName: "福建中烟",
					saleSeq: 15,
					singleBoxSeq: 16,
					comSale: 8253,
					comSaleTB: 3.57,
					nationSale: 1750880,
					nationSaleTB: -9.67,
					comSingleBox: 1.51,
					comSingleBoxTB: -0.23,
					nationSingleBox: 2.27,
					nationSingleBoxTB: 3.28
				},{
					comName: "河北中烟",
					saleSeq: 16,
					singleBoxSeq: 5,
					comSale: 1939,
					comSaleTB: 34.39,
					nationSale: 878820,
					nationSaleTB: -2.24,
					comSingleBox: 4.29,
					comSingleBoxTB: 25.83,
					nationSingleBox: 1.63,
					nationSingleBoxTB: 11.06
				},{
					comName: "进口卷烟",
					saleSeq: 17,
					singleBoxSeq: 10,
					comSale: 1922,
					comSaleTB: -6.83,
					nationSale: 87250,
					nationSaleTB: -1.65,
					comSingleBox: 2.39,
					comSingleBoxTB: 1.99,
					nationSingleBox: 3.3,
					nationSingleBoxTB: 3.99
				},{
					comName: "江西中烟",
					saleSeq: 18,
					singleBoxSeq: 13,
					comSale: 1799,
					comSaleTB: -38.08,
					nationSale: 761330,
					nationSaleTB: -9.32,
					comSingleBox: 1.73,
					comSingleBoxTB: 28.01,
					nationSingleBox: 1.9,
					nationSingleBoxTB: 3.63
				},{
					comName: "广西中烟",
					saleSeq: 19,
					singleBoxSeq: 6,
					comSale: 324,
					comSaleTB: -48.53,
					nationSale: 750490,
					nationSaleTB: 1.28,
					comSingleBox: 3.66,
					comSingleBoxTB: -0.43,
					nationSingleBox: 2.19,
					nationSingleBoxTB: 5.2
				}]
			}
		},
		components: {
			boxBase,
			multiContentExtend
		},
		methods: {
		},
		mounted() {
			this.$store.commit('setTopNavStatus', 'overview');
			this.$store.commit('setLeftNavStatus', 'vend');
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../styles/variables.scss";
	.main{
		font-size: 0.14rem;
		color:#fff;
		height: 100%;
		padding-left:$box-distince;
		padding-top: 0.15rem;
		.content{
			margin-top:0.1rem;
		}
	}
	.middleMap {
		margin-right: 0.15rem;
	}
</style>