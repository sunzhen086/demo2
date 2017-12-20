<template>
	<box-base class="rightBox">
		<div slot="box-title">
			<p class="title">重点品牌销量占比</p>
		</div>
		<div slot="box-extend">
			<link-btn class="topRightMenu" @on-click="showTypeDetail"></link-btn>
		</div>

		<div class="content">
			<fillChart :chart-data="fillChart[0]"></fillChart>
			<fillChart :chart-data="fillChart[1]"></fillChart>
		</div>
	</box-base>
</template>

<script>
	import echarts from 'echarts';
	import fillChart from './fillChart.vue';
	import boxBase from 'components/box/box-base.vue';
	import linkBtn from 'components/detailbutton/link-button.vue';

	export default {
		data() {
				return {
					fillChart: [{
						text: '全国',
						data: [{
							name: '重点品牌',
							value: '0.8368'
						}]
					}, {
						text: '陕西',
						data: [{
							name: '重点品牌',
							value: '0.7381'
						}]
					}]
				}
			},
			components: {
				fillChart,
				boxBase,
				linkBtn
			},
			methods: {
				showTypeDetail:function(){
	    			this.$router.push({ path: '/overview/cityTypeInfo'});
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