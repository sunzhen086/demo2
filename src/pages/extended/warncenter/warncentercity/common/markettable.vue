<template>
	<div ref="marketTableChart" class="tableChart">
		<div class="tableTitle">
			5月份第4周各规格零售价格指数
		</div>

		<el-table class="cma " :show-header=true height="482" :data="tableData">
			<el-table-column label="序号" align="center" :show-overflow-tooltip=true width="50">
				<template scope="scope">
					<div class="muti">{{scope.row.seq}}</div>
				</template>
			</el-table-column>

			<el-table-column label="商品编码" header-align="center" align="center" :show-overflow-tooltip=true>
				<template scope="scope">
					<div class="muti" style="cursor: pointer;text-decoration: underline" @click="toWiki(scope.row.itemName)">
						{{scope.row.itemId}}
					</div>
				</template>
			</el-table-column>

			<el-table-column label="商品名称" header-align="center" align="center" :show-overflow-tooltip=true width="150">
				<template scope="scope">
					<div class="muti">
						{{scope.row.itemName}}
					</div>
				</template>
			</el-table-column>

			<el-table-column label="价格指数" header-align="center" align="right" :show-overflow-tooltip=true>
				<template scope="scope">
					<div class="muti">
						{{scope.row.priceIndex}}
					</div>
				</template>
			</el-table-column>

			<el-table-column label="市场零售价" header-align="center" align="right" :show-overflow-tooltip=true>
				<template scope="scope">
					<div class="muti">
						<number-format :format=format :numValue='scope.row.marketPrice'></number-format>
					</div>
				</template>
			</el-table-column>

			<el-table-column label="建议零售价" header-align="center" align="right" :show-overflow-tooltip=true>
				<template scope="scope">
					<div class="muti">
						<number-format :format=format :numValue='scope.row.priceRetail'></number-format>
					</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import numberFormat from 'components/numberFormat/number-format.vue';

	export default {
		data() {
			return {
				format: 'to-thousand',
				tableData: [{
					seq: 1,
					itemId: "42010325",
					itemName: "黄鹤楼（硬攀登）",
					priceIndex: 0.85,
					marketPrice: 853.44,
					priceRetail: 1000
				}, {
					seq: 2,
					itemId: "61010219",
					itemName: "好猫（磨砂猴王）",
					priceIndex: 0.90,
					marketPrice: 99.14,
					priceRetail: 110
				}, {
					seq: 3,
					itemId: "43010106",
					itemName: "白沙（精品二代）",
					priceIndex: 0.91,
					marketPrice: 99.76,
					priceRetail: 110
				}, {
					seq: 4,
					itemId: "31010102",
					itemName: "黄鹤楼（硬攀登）",
					priceIndex: 0.85,
					marketPrice: 853.44,
					priceRetail: 1000
				}, {
					seq: 5,
					itemId: "42010325",
					itemName: "中华（软）",
					priceIndex: 0.92,
					marketPrice: 642.93,
					priceRetail: 700
				}, {
					seq: 6,
					itemId: "61010215",
					itemName: "好猫（吉祥）",
					priceIndex: 0.93,
					marketPrice: 232.97,
					priceRetail: 250
				}, {
					seq: 7,
					itemId: "42010301",
					itemName: "黄鹤楼（软蓝）",
					priceIndex: 0.94,
					marketPrice: 177.92,
					priceRetail: 190
				}, {
					seq: 8,
					itemId: "43020101",
					itemName: "芙蓉王（硬）",
					priceIndex: 0.94,
					marketPrice: 234.53,
					priceRetail: 250
				}, {
					seq: 9,
					itemId: "32010106",
					itemName: "南京（九五）",
					priceIndex: 0.94,
					marketPrice: 940.26,
					priceRetail: 1000
				}, {
					seq: 10,
					itemId: "52240217",
					itemName: "贵烟（国酒香30）",
					priceIndex: 0.94,
					marketPrice: 942.37,
					priceRetail: 1000
				}, {
					seq: 11,
					itemId: "53010105",
					itemName: "云烟（紫）",
					priceIndex: 0.95,
					marketPrice: 94.5,
					priceRetail: 100
				}, {
					seq: 12,
					itemId: "32030404",
					itemName: "苏烟（五星红杉树）",
					priceIndex: 0.95,
					marketPrice: 208.11,
					priceRetail: 220
				}, {
					seq: 13,
					itemId: "31010101",
					itemName: "中华（硬）",
					priceIndex: 0.95,
					marketPrice: 426.45,
					priceRetail: 450
				}, {
					seq: 14,
					itemId: "32030401",
					itemName: "苏烟（软金砂）",
					priceIndex: 0.95,
					marketPrice: 454.94,
					priceRetail: 480
				}, {
					seq: 15,
					itemId: "32010108",
					itemName: "南京（雨花石）",
					priceIndex: 0.95,
					marketPrice: 503.68,
					priceRetail: 530
				}, {
					seq: 16,
					itemId: "32010103",
					itemName: "南京（红）",
					priceIndex: 0.95,
					marketPrice: 114.28,
					priceRetail: 120
				}, {
					seq: 17,
					itemId: "53020507",
					itemName: "玉溪（软）",
					priceIndex: 0.95,
					marketPrice: 219.37,
					priceRetail: 230
				}, {
					seq: 18,
					itemId: "33010602",
					itemName: "利群（新版）",
					priceIndex: 0.95,
					marketPrice: 133.69,
					priceRetail: 140
				}, {
					seq: 19,
					itemId: "44550101",
					itemName: "双喜（软国际）",
					priceIndex: 0.96,
					marketPrice: 62.19,
					priceRetail: 65
				}, {
					seq: 20,
					itemId: "32010107",
					itemName: "南京（十二钗烤烟）",
					priceIndex: 0.96,
					marketPrice: 268.62,
					priceRetail: 280
				}, {
					seq: 21,
					itemId: "53020117",
					itemName: "红塔山（硬经典100）",
					priceIndex: 0.96,
					marketPrice: 96.47,
					priceRetail: 100
				}, {
					seq: 22,
					itemId: "62520106",
					itemName: "兰州（硬珍品）",
					priceIndex: 0.97,
					marketPrice: 173.78,
					priceRetail: 180
				}, {
					seq: 23,
					itemId: "42010316",
					itemName: "黄鹤楼（硬1916）",
					priceIndex: 0.97,
					marketPrice: 965.47,
					priceRetail: 1000
				}, {
					seq: 24,
					itemId: "53090201",
					itemName: "云烟（软大重九）",
					priceIndex: 0.97,
					marketPrice: 953.31,
					priceRetail: 980
				}, {
					seq: 25,
					itemId: "53020116",
					itemName: "红塔山（硬经典）",
					priceIndex: 0.97,
					marketPrice: 73.05,
					priceRetail: 75
				}, {
					seq: 26,
					itemId: "62520101",
					itemName: "兰州（硬精品）",
					priceIndex: 0.98,
					marketPrice: 73.65,
					priceRetail: 75
				}, {
					seq: 27,
					itemId: "61260213",
					itemName: "延安（软）",
					priceIndex: 0.98,
					marketPrice: 54.09,
					priceRetail: 55
				}, {
					seq: 28,
					itemId: "43010109",
					itemName: "白沙（和天下）",
					priceIndex: 0.98,
					marketPrice: 984.81,
					priceRetail: 1000
				}, {
					seq: 29,
					itemId: "61010110",
					itemName: "猴王（金）",
					priceIndex: 0.99,
					marketPrice: 54.42,
					priceRetail: 55

				}, {
					seq: 30,
					itemId: "61010224",
					itemName: "好猫（天赋）",
					priceIndex: 1.06,
					marketPrice: 951.08,
					priceRetail: 900
				}]
			}
		},
		components: {
			numberFormat
		},
		methods: {
			toWiki: function(name) {
				this.$router.push("/extended/itemwiki");
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tableTitle {
		font-size: 0.15rem;
		height: 0.25rem;
		text-align: center;
		line-height: 0.25rem;
		font-weight: 700;
		color: rgb(78, 212, 248);
	}
</style>