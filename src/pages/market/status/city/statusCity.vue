<template>
	<div class="main cma">
		<top :cityId=cityId></top>
		<div class="main-body">
			<div class="top-part">
				<priceIndex></priceIndex>
		  		<eom></eom>
		  		<eomrate></eomrate>
			</div>
			<div class="bottom-part">
				<priceTable @price-table-row-select="priceTableRowSelect"></priceTable>
				<pricePic :type=type :kind=kind></pricePic>
			</div>
		</div>
	</div>
</template>
<script>
	import top from './common/top.vue';
	import priceIndex from './common/priceIndex.vue';
	import eom from './common/eom.vue';
	import eomrate from './common/eomrate.vue';
	import priceTable from './common/priceTable.vue';
	import pricePic from './common/pricePic.vue';
	
	export default {
		props:{
			cityId:{
				type: String,
      			default: "西安市"
			}
		},
		data(){
			return{
				type:"priceKind",
				kind:"1"
			}
		},
		methods:{
			priceTableRowSelect:function(type,kind){
				this.type = type;
				this.kind = kind;
			}
		},
		components: {
			top,
			priceIndex,
			eom,
			eomrate,
			priceTable,
			pricePic
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'market');
			this.$store.commit('setLeftNavStatus', 'status');
		}	
	}
</script>
<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.main{
		font-size: 0.14rem;
		color:#fff;
		height: 100%;
		padding-left:0.2rem;
		.left{
			float: left;
		}
		.main-body{
			overflow:hidden;
			.top-part{
				width: 100%;
				height:2rem;
			}
			.bottom-part{
				width: 100%;
				height:2rem;
				margin-top:$box-distince;
			}
		}
	}
</style>