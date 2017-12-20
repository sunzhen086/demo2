<template>
	<div class="main cma">
		<top></top>
		<div class="main-body">
		  	<div class="left-part left">
		  		<leftPart @show-table="showTable"></leftPart>
		  	</div>
		  	<div class="right-part left">
		  		<rightPartChart v-if = "!tableShow"></rightPartChart>
		  		<rightPartTable v-if = "tableShow"></rightPartTable>
		  	</div>
		</div>
	</div>
</template>

<script>
	import top from './common/top.vue';
	import leftPart from './common/leftPart.vue';
	import rightPartChart from './common/rightPartChart.vue';
	import rightPartTable from './common/rightPartTable.vue';
	export default {
		data() {
			return {
				tableShow:false
			}
		},
		components: {
			top,
			leftPart,
			rightPartChart,
			rightPartTable
		},
		methods:{
			showTable:function(param){
				this.tableShow = !this.tableShow;
			}
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'cust');
			this.$store.commit('setLeftNavStatus', 'distribute');
		}
	}

</script>

<style lang="scss" scoped>
	@import "../../../styles/variables.scss";
	.main{
		margin-left:$box-distince;
		font-size: 0.14rem;
		color: white;
		height: 100%;
		.left{
			float: left;
		}
		.main-body {
			overflow: hidden;
		}
		.left-part{
			width: 5.2rem;
		}
		.right-part{
			width: 7.07rem;
			margin-left: $box-distince;
		}
	}
</style>