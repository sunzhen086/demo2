<template>
	<div class="main cma">
		<top></top>
		<div class="main-body">
			<div class="row-part row1">
				<div class="col-part col1">
					<radarChart></radarChart>
				</div>
				<div class="col-part col2">
					<div class="row-part-small small-row1">
						<planPieChart></planPieChart>
					</div>
					<div class="row-part-small small-row2">
						<planBarChart></planBarChart>
					</div>
				</div>
				<div class="col-part col3">
					<div class="row-part-small small-row1">
						<marketStatus></marketStatus>
					</div>
					<div class="row-part-small small-row2">
						<custBarChart></custBarChart>
					</div>
				</div>
			</div>
			<div class="row-part row2">
				<div class="col-part col1">
					<cityLineChart></cityLineChart>
				</div>
				<div class="col-part col2">
					<brandPieChart></brandPieChart>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import top from './common/top.vue';
	import brandPieChart from './common/brandPieChart.vue';
	import cityLineChart from './common/cityLineChart.vue';
	import custBarChart from './common/custBarChart.vue';
	import marketStatus from './common/marketStatus.vue';
	import planBarChart from './common/planBarChart.vue';
	import planPieChart from './common/planPieChart.vue';
	import radarChart from './common/radarChart.vue';
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			top,
			brandPieChart,
			cityLineChart,
			custBarChart,
			marketStatus,
			planBarChart,
			planPieChart,
			radarChart,
		},
		methods:{
			showTable:function(param){
				
			}
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'overview');
			this.$store.commit('setLeftNavStatus', 'city');
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
		.left{
			float: left;
		}
		.main-body{
			overflow:hidden;
			.row-part{
				overflow:hidden;
				.col-part{
					float: left;
				}
			}
			/*.row1{
				.col1{
					width: 6.2rem;
					height: 5.8rem;
				}
				.col2{
					width: 2.8rem;
					height: 5.8rem;
					.row-part-small{
						width: 2.8rem;
						height: 2.8rem;
					}
				}
				.col3{
					width: 3.4rem;
					height: 5.8rem;
					.row-part-small{
						width: 2.8rem;
						height: 2.8rem;
					}
				}
			}
			.row2{
				.col1{
					width: 9rem;
					height: 2.6rem;
				}
				.col2{
					width: 3.4rem;
					height: 2.6rem;
				}
			}*/
		}
	}
</style>