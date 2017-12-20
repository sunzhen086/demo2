<template>
	<div class="panel">
		<box-base class="bottomRightBox">
			<div class="content">
				<div class="pieCharts pieLeft">
					<div class="titles">按业态订货户数占比</div>
					<pieChart :chart-data='pieChart[0]'></pieChart>
				</div>
				<div class="pieCharts pieRight">
					<div class="titles">按价类订货户数占比</div>
					<pieChart :chart-data='pieChart[1]'></pieChart>
				</div>
			</div>
		</box-base>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import pieChart from './pieChart.vue';
	
	import echarts from 'echarts';
	
	export default {
		data() {
			return {
				pieChart: [
					{text:'按业态订货户数占比',data:[{name:'便利店',value:4354},{name:'娱乐服务',value:265},{name:'商场',value:26},{name:'超市',value:194},{name:'烟酒商店',value:2808},{name:'食杂店',value:22412},{name:'其他',value:766}]},
					{text:'按规模订货户数占比',data:[{name:'一类烟',value:28088},{name:'二类烟',value:28929},{name:'三类烟',value:30578},{name:'四类烟',value:30243}]}
				]
			}
		},
		components: {
			boxBase,
			pieChart
		},
		methods: {
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped>
	.panel {
		
		.bottomRightBox {
			.content {
				width: inherit;
				height: 2.88rem;
				
				.pieCharts {
					width: 2.6rem;
					height: 2.62rem;
					float: left;
					
					.titles {
						width: inherit;
						margin-top: 0.15rem;
						text-align: center;
					}
				}
			}
		}
	}
</style>