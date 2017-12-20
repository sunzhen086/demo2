<template>
	<box-base>
		<div class="content">
			<p class="title">周订货户数同期对比分析</p>
			<middleLeftDetailTopLine-chart></middleLeftDetailTopLine-chart>
			<p class="title">周订货量同期对比分析</p>
			<middleLeftDetailMiddleLine-chart></middleLeftDetailMiddleLine-chart>
			<p class="title">周订货单条值同期对比分析</p>
			<middleLeftDetailBottomLine-chart></middleLeftDetailBottomLine-chart>
		</div>
	</box-base>
</template>

<script>
	import middleLeftDetailTopLineChart from './middleLeftDetailTopLineChart';
	import middleLeftDetailMiddleLineChart from './middleLeftDetailMiddleLineChart';
	import middleLeftDetailBottomLineChart from './middleLeftDetailBottomLineChart';
	
	import boxBase from 'components/box/box-base.vue';
	
	export default {
		components: {
			boxBase,
			middleLeftDetailTopLineChart,
			middleLeftDetailMiddleLineChart,
			middleLeftDetailBottomLineChart
		},
	}
</script>

<style lang="scss" scoped>
@import "../../../../../styles/variables.scss";
	.title{
		margin-bottom: 0.1rem;
	}
</style>