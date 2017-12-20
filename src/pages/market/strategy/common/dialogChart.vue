<template>
	<div class="boxDiv">
		<div class="barDiv">
			<barChart :dialog-title='dialogTitle'></barChart>
		</div>
		<div class="lineDiv">
			<lineChart :dialog-title='dialogTitle'></lineChart>
		</div>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import barChart from './barChart.vue';
	import lineChart from './lineChart.vue';
	export default {
		props:{
			dialogTitle:String
		},
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
		/*margin-top: $box-distince;*/
		.barDiv{
			/*float: left;*/
			overflow: hidden;
			padding-bottom: 0.2rem;
			border:1px solid rgba(36,72,158,0.8);
			box-shadow: 3px 3px 3px #153371;
		}
		.lineDiv{
			/*float: left;*/
			overflow: hidden;
			/*margin-left: $box-distince;*/
			margin-top: 0.2rem;
			padding-bottom: 0.2rem;
			border:1px solid rgba(36,72,158,0.8);
			box-shadow: 3px 3px 3px #153371;
			
		}
	}
</style>