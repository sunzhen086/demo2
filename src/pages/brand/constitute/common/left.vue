<template>
	<div>
		<div>
			<box-base style="margin-bottom: 0.14rem;">
				<div slot="box-title">
					<p class="title">全省在销品牌</p>
				</div>
				<div slot="box-extend">

				</div>

				<div class="content">
					<line-chart :chartData=chartData[0]></line-chart>
				</div>
			</box-base>
		</div>
		<div>
			<box-base>
				<div slot="box-title">
					<p class="title">全省在销规格</p>
				</div>
				<div slot="box-extend">

				</div>

				<div class="content">
					<line-chart :chartData=chartData[1]></line-chart>
				</div>
			</box-base>
		</div>
	</div>

</template>

<script>
	import boxBase from 'components/box/box-base.vue';

	import lineChart from './lineChart.vue';

	export default {
		data() {
			return {
				chartData: [{
					data: [45, 43, 45, 49, 57],
					max: 60,
					min: 30,
					interval: 10
				}, {
					data: [262, 226, 241, 271, 328],
					max: 350,
					min: 200,
					interval: 50
				}]
			}
		},
		components: {
			boxBase,
			lineChart
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 1.95rem;
	}
</style>