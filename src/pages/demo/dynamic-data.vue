<template>
	<div>
		<div class="layout-middle">
			<box-base>
				<p slot="box-title">全国各省{{measureName}}情况</p>
				<tab-box slot="box-extend"></tab-box>	
				<info-box class="layout-info-box"></info-box>
				<map-chart class="layout-map-chart"></map-chart>
			</box-base>
		</div>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import infoBox from './components/infoBox.vue';
	import tabBox from './components/tabBox.vue';
	import mapChart from './components/mapChart.vue';
	export default {
		data(){
			return {
				measureName:"卷烟销售"
			}
		},
		components: {
			mapChart,
			infoBox,
			boxBase,
			tabBox
		}
	}
</script>

<style lang="scss" scoped>
	.layout-middle{
		width:800px;
		margin:20px auto;
		position:relative;
		
		.layout-info-box{
			position:absolute;
			top:0.6rem;
			left:0.5rem;
		}
		.layout-map-chart{
			position:absolute;
			width: 6rem;
			height: 5.4rem;
			top:0.35rem;
			left:0.7rem;
		}
	}
</style>