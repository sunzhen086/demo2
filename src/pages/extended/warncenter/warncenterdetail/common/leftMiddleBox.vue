<template>
	<div>
		<box-base class="main">
			<div slot="box-title">
				<p>{{boxData.title}}</p>
			</div>
			<div class="content">
				<pieChart :chartData="boxData.pieChartData"></pieChart>
			</div>
		</box-base>
	</div>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import pieChart from './pieChart.vue';
	
	export default {
		props: {
    		boxData: Object 
		},
		data() {
			return {
				
			}
			
		},
		methods:{
			
		},
		components: {
			boxBase,
			pieChart
		},
	}
</script>

<style lang="scss" scoped>
	@import "../../../../../styles/variables.scss";
	
	.main{
		height: 2.1rem;
		width: 1.93rem;
	}
</style>
