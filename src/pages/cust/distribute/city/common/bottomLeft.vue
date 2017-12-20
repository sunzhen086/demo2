<template>
	<div class="panel">
		<box-base class="bottomLeftBox">
			<div class="titleBar"></div>
			<div slot="box-title" v-if="paneOption.activePane=='tab1'">按户均订购量统计客户分布</div>
			<div slot="box-title" v-if="paneOption.activePane=='tab2'">按户均订购结构统计客户分布</div>
			<div slot="box-extend">
				<tab-base class="tabBox" :option=paneOption @tab-click="tabClick"></tab-base>
			</div>
			<div class="content" v-if="paneOption.activePane=='tab1'">
				<barLineChart></barLineChart>
			</div>
			<div class="content" v-if="paneOption.activePane=='tab2'">
				<barChart></barChart>
			</div>
		</box-base>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import barLineChart from './barLineChart.vue';
	import barChart from './barChart.vue';
	
	import echarts from 'echarts';
	
	export default {
		data() {
			return {
				paneOption: {
					data:[
						{
							key: 'tab1',
							text: '户均订购量'
						},
						{
							key: 'tab2',
							text: '户均订购结构'
						}
					],
					activePane:'tab1'
				},
				validValue: 137048,
				ordersValue: 136548,
			}
		},
		computed: {
			diffValue: function() {
				return this.validValue - this.ordersValue;
			}
		},
		components: {
			boxBase,
			tabBase,
			barLineChart,
			barChart
		},
		methods: {
			tabClick:function(curTab){
				this.paneOption.activePane = curTab;
				console.log(this.paneOption.activePane);
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped>
@import "../../../../../styles/variables.scss";

	.panel {
		
		.bottomLeftBox {
			
			.titleBar {
				width: inherit;
				height: 0.15rem;
			}
			
			.tabBox {
				margin-top: 0rem;
				margin-right: 0.1rem;
			}
		}
	}
</style>