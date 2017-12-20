<template>
	<box-base class="table-box">
		<div class="tab-class">
			<tab-base :option=paneOption @tab-click="tabClick" class="tabClass"></tab-base>
		</div>

		<div class="content">
			<div v-if="tableType == 'priceKind'">
				<priceKindTable @table-row-select="priceKindTableRowOnClick"></priceKindTable>
			</div>
			<div v-if="tableType === 'priceCategory'">
				<priceCategoryTable @table-row-select="priceCategoryTableRowOnClick"></priceCategoryTable>
			</div>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';

	import priceKindTable from './priceKindTable.vue';
	import priceCategoryTable from './priceCategoryTable.vue';

	import lineChart from './tool/lineChart.vue';

	export default {
		data() {
				return {
					paneOption: {
						data: [{
							key: 'priceKind',
							text: '价类'
						}, {
							key: 'priceCategory',
							text: '品类'
						}],
						activePane: 'priceKind'
					},
					tableType: "priceKind"
				}

			},
			components: {
				boxBase,
				tabBase,
				priceKindTable,
				priceCategoryTable
			},
			methods: {
				tabClick: function(key) {
					this.tableType = key;
				},
				priceKindTableRowOnClick: function(index) {
					this.$emit("price-table-row-select", "priceKind",index);
				},
				priceCategoryTableRowOnClick:function(index){
					this.$emit("price-table-row-select", "priceCategory",index);
				}
			}

	}
</script>

<style lang="scss" scoped>
	@import "../../../../../styles/variables.scss";
	.table-box {
		width: 4.05rem;
		height: 4rem;
		float: left;
	}
	
	.tab-class {
		height: 0.3rem;
		margin-top: 0.15rem;
	}
	
	.content {
		height: 3.2rem;
		margin-top: 0.15rem;
	}

</style>