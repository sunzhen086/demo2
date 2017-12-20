<template>
	<div class="boxDiv">
		<box-base class="barDiv">
			<div class="content">
				<barChart></barChart>
			</div>
		</box-base>
		<box-base class="lineDiv">
			<div class="content">
				<lineChart></lineChart>
			</div>
		</box-base>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import barChart from './barChart.vue';
	import lineChart from './lineChart.vue';
	export default {
		data() {
			return {
				
			}
			
		},
		components: {
			boxBase,
			barChart,
			lineChart
		},
		methods:{
			
		}
	
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.boxDiv{
		margin-top: $box-distince;
		.barDiv{
			float: left;
			overflow: hidden;
			padding-bottom: 0;
		}
		.lineDiv{
			float: left;
			overflow: hidden;
			margin-left: $box-distince;
			padding-bottom: 0;
		}
	}
</style>