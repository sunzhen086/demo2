<template>
	<div class="main cma">
		<top></top>
		<div class="main-body">
			<div class="left-part left">
				<saleQtyRate @table-show-hide="tableShowHide"></saleQtyRate>
			</div>
			<div v-if = "!showTable">		
				<div class="right-part left">
					<saleQtyTrend></saleQtyTrend>
					<brandRank></brandRank>
				</div>
			</div>
			<div v-if = "showTable">
				<div class="showTable">
					<div class="right-part left">
						<saleQtyTable></saleQtyTable>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import top from './common/top.vue';
	import saleQtyRate from './common/saleQtyRate.vue';
	import saleQtyTable from './common/saleQtyTable.vue';
	import saleQtyTrend from './common/saleQtyTrend.vue';
	import brandRank from './common/brandRank.vue';
	
	export default {
		data() {
			return {
				showTable: 0
			}
		},
		components: {
			boxBase,
			top,
			saleQtyRate,
			saleQtyTable,
			saleQtyTrend,
			brandRank
		},
		methods:{
			tableShowHide:function(showTable){
				if(showTable != undefined){
					this.showTable = showTable;
				}
			}
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'overview');
			this.$store.commit('setLeftNavStatus', 'keybrand');
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
		.main-body{
			overflow:hidden;
			.left-part{
				width: 4.9rem;
				float: left;
			}
			.right-part{
				width:7.45rem;
				float:left;
				margin-left:$box-distince;
			}
		}
	}
	
</style>