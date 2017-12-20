<template>
	<box-base>
		<div slot="box-title">
			<p class="title">货源属性</p>
		</div>
		<div class="content">
			<div class="pieDiv">
				<pieChart v-bind:curCity="curCity"></pieChart>
			</div>
			<div class="liquidDiv liquid1">
				<liquidChart :chart-data='liquidChartData[curCity][0]'></liquidChart>
					
				<div class="row">投放量：<number-format :format=format :strValue='liquidNote[curCity][0][0]'></number-format>条</div>
				<div class="row">订购量：<number-format :format=format :strValue='liquidNote[curCity][0][1]'></number-format>条</div>
			</div>
			<div class="liquidDiv liquid2">
				<liquidChart :chart-data='liquidChartData[curCity][1]'></liquidChart>
				<div class="row">投放量：<number-format :format=format :strValue='liquidNote[curCity][1][0]'></number-format>条</div>
				<div class="row">订购量：<number-format :format=format :strValue='liquidNote[curCity][1][1]'></number-format>条</div>
			</div>
			<div class="liquidDiv liquid3">
				<liquidChart class="liquidChart" :chart-data='liquidChartData[curCity][2]'></liquidChart>
				<div class="row">投放量：<number-format :format=format :strValue='liquidNote[curCity][2][0]'></number-format>条</div>
				<div class="row">订购量：<number-format :format=format :strValue='liquidNote[curCity][2][1]'></number-format>条</div>
			</div>
			<div class="liquidDiv liquid4">
				<liquidChart :chart-data='liquidChartData[curCity][3]'></liquidChart>
				<div class="row">投放量：<number-format :format=format :strValue='liquidNote[curCity][3][0]'></number-format>条</div>
				<div class="row">订购量：<number-format :format=format :strValue='liquidNote[curCity][3][1]'></number-format>条</div>
			</div>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import pieChart from './pieChart.vue';
	import liquidChart from './liquidChart.vue';
	import numberFormat from 'components/numberFormat/number-format.vue';
	
	export default {
		props: {
			curCity: String
		},
		data() {
			return {
				format:'to-thousand',
				liquidChartData: {
					'西安': [{
						text: '新品货源',
						data: [{
							name: '新品货源',
							value: '0.0040'
						}]
					}, {
						text: '紧俏货源',
						data: [{
							name: '紧俏货源',
							value: '0.3085'
						}]
					}, {
						text: '完全满足',
						data: [{
							name: '完全满足',
							value: '0.0019'
						}]
					}, {
						text: '均衡满足',
						data: [{
							name: '均衡满足',
							value: '0.0706'
						}]
					}],
					'榆林': [{
						text: '新品货源',
						data: [{
							name: '新品货源',
							value: '0.1140'
						}]
					}, {
						text: '紧俏货源',
						data: [{
							name: '紧俏货源',
							value: '0.2485'
						}]
					}, {
						text: '完全满足',
						data: [{
							name: '完全满足',
							value: '0.0159'
						}]
					}, {
						text: '均衡满足',
						data: [{
							name: '均衡满足',
							value: '0.0706'
						}]
					}]
				},
				liquidNote: {
					'西安': [
						['18747813','74801'],
						['118621','36606'],
						['879691704','1638166'],
						['2570247','181538'],
					],
					'榆林': [
						['16584278','53557'],
						['105831','31254'],
						['651652804','1236482'],
						['2050376','125838'],
					]
				}
			}
			
		},
		components: {
			boxBase,
			pieChart,
			liquidChart,
			numberFormat
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		overflow: hidden;
		.pieDiv{
			float: left;
			overflow: hidden;
			height: 1.3rem;
		}
		.liquidDiv{
			float: left;
			overflow: hidden;
			margin-left: 0.20rem;
			padding-bottom: 0.05rem;
			.row{
				font-size: 0.13rem;
				text-align: left;
				margin-top: 0.02rem;
			}
		}
		.liquid1{
			margin-left: 2.45rem;
		}
		.liquid3{
			.liquidChart{
				margin-left: 0.15rem;
			}
		}
	}
</style>