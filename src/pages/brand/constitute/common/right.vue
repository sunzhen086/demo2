<template>
	<div>
		<div>
			<box-base style="margin-bottom: 0.14rem;">
				<div slot="box-title">
					<p class="title">价区分布</p>
				</div>
				<div slot="box-extend">
					<el-popover popper-class="cma" ref="topRightPopover" placement="left-start" width="240" trigger="hover">
						<div v-html="tipContent"></div>
					</el-popover>
					<div id="infoDiv">
						<info-circle v-popover:topRightPopover></info-circle>
					</div>
				</div>

				<div class="content">
					<pie-chart :chartData=pieData></pie-chart>
				</div>
			</box-base>
		</div>
		<div>
			<box-base>
				<div slot="box-title">
					<p class="title">各地市在销规格数</p>
				</div>
				<div slot="box-extend">

				</div>

				<div class="content">
					<bar-chart :chartData=barData></bar-chart>
				</div>
			</box-base>
		</div>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';

	import pieChart from './pieChart.vue';
	import barChart from './barChart.vue';
	import infoCircle from 'components/infocircle/info-circle.vue';

	export default {
		data() {
			return {
				tipContent: '<p>按照条批发价对一类和三类进行细分</p>' +
					'<p>一类-超一类-[600,1000)</p>' +
					'<p>一类-高一类-[500,600)</p>' +
					'<p>一类-中一类-[260,500)</p>' +
					'<p>一类-普一类-260元(不含)以下</p>' +
					'<p>三类-高三类-78元（含）以上</p>' +
					'<p>三类-普三类-78元（不含）以下</p>',
				pieData: [
					[{
						name: '一类',
						value: 168
					}, {
						name: '二类',
						value: 72
					}, {
						name: '三类',
						value: 63
					}, {
						name: '四类',
						value: 19
					}, {
						name: '五类',
						value: 6
					}],
					[{
						name: '超一类',
						value: 40
					}, {
						name: '高一类',
						value: 6
					}, {
						name: '中一类',
						value: 56
					}, {
						name: '普一类',
						value: 66
					}, {
						name: '二类',
						value: 72
					}, {
						name: '高三类',
						value: 41
					}, {
						name: '普三类',
						value: 22
					}, {
						name: '四类',
						value: 19
					}, {
						name: '五类',
						value: 6
					}]
				],
				barData: [{
					name: '2015年',
					data: [271, 224, 168, 162, 164, 156, 162, 158, 151, 129, 110, 108]
				}, {
					name: '2016年',
					data: [328, 265, 218, 207, 205, 199, 199, 196, 181, 163, 160, 130]
				}]
			}
		},
		components: {
			boxBase,
			pieChart,
			barChart,
			infoCircle
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 1.95rem;
	}
	
	#infoDiv {
		float: left;
		margin-top: -0.01rem;
	}
</style>