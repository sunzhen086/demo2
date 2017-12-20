<template>
	<box-base class="rightBox">
		<div slot="box-title">
			<p class="title">各价类烟销量占比</p>
		</div>
		<div slot="box-extend">
			<link-btn class="topRightMenu" @on-click="showPriceTypeDetail"></link-btn>
		</div>

		<div class="content">
			<pieChart :chart-data="pieChart[0]"></pieChart>
			<pieChart :chart-data="pieChart[1]"></pieChart>
		</div>
	</box-base>
</template>

<script>
	import echarts from 'echarts';
	import pieChart from './pieChart.vue';
	import boxBase from 'components/box/box-base.vue';
	import linkBtn from 'components/detailbutton/link-button.vue';
	
	export default {
		data() {
				return {
					pieChart: [
						{text:'全国',data:[{name:'一类',value:223460.15/1450949.40},{name:'二类',value:167118.14/1450949.40},{name:'三类',value:506517.66/1450949.40},{name:'四类',value:503325.97/1450949.40},{name:'五类',value:50527.48/1450949.40}]},
						{text:'陕西',data:[{name:'一类',value:1.6},{name:'二类',value:1.2},{name:'三类',value:3},{name:'四类',value:2},{name:'五类',value:1}]}
					]
				}
			},
			components: {
				pieChart,
				boxBase,
				linkBtn
			},
			methods: {
				showPriceTypeDetail:function(){
	    			this.$router.push({ path: '/overview/cityPriceTypeInfo'});
	    		}
			}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.content {
		height: 1.48rem;
	}
	.title {
		padding-right: 0.05rem;
	}
	.rightBox{
		margin-bottom: $box-distince;
	}
	.topRightMenu {
		/*margin-top: -0.04rem;*/
	}
</style>