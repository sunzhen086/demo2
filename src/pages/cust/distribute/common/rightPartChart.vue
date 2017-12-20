<template>
	<div>
		<line-chart></line-chart>
		<bar-chart></bar-chart>
	</div>
</template>

<script>
	import echarts from 'echarts';

	import barChart from './barChart.vue';
	import lineChart from './lineChart.vue';

	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	export default {
		data() {
			return {};
		},
		components: {
			boxBase,
			tabBase,
			barChart,
			lineChart
		},
		methods: {
			tabClick: function(curTab) {

			}
		},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped>

</style>