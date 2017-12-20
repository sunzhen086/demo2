<template>
	<div class="bottomDiv">
		<div class="bottomLeft" >
			<bottomLeft @show-table-btn-click="showtable"></bottomLeft>
		</div>
		<div v-if = "!tableShow">
			<div class="bottomCenter">
				<bottomCenter></bottomCenter>
			</div>
			<div class="bottomRight">
				<bottomRight></bottomRight>
			</div>
		</div>
		<div v-if = "tableShow">
			<div class="showTable">
				<showTable></showTable>
			</div>
		</div>
		
	</div>
</template>

<script>
	import bottomLeft from './bottomLeft.vue';
	import bottomCenter from './bottomCenter.vue';
	import bottomRight from './bottomRight.vue';
	import showTable from './showTable.vue';
	
	export default {
		data() {
			return {
				tableShow: false
			}
		},
		components: {
			bottomLeft,
			bottomCenter,
			bottomRight,
			showTable
		},
		methods: {
			showtable: function() {
				this.tableShow = !this.tableShow;
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped>
@import '../../../../styles/variables.scss';

	.bottomDiv {
		height: 4.3rem;
		
		.bottomLeft {
			width: 4.92rem;
			height: 4.25rem;
			margin-left: $box-distince;
			float: left;
		}
		
		.bottomCenter {
			width: 2.41rem;
			height: 4.25rem;
			margin-left: 0.1rem;
			float: left;
		}
		
		.bottomRight {
			width: 4.92rem;
			height: 4.25rem;
			margin-left: 0.1rem;
			float: left;
		}
		
		.showTable {
			width: 7.42rem;
			height: 4.25rem;
			margin-left: 0.1rem;
			float: left;
		}
	}
</style>