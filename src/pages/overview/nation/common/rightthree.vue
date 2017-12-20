<template>
	<box-base>
		<div slot="box-title">
			<p class="title">细支烟销量占比</p>
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
							name: '细支烟',
							value: '0.3'
						}]
					}, {
						text: '陕西',
						data: [{
							name: '细支烟',
							value: '0.27'
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
	    			this.$router.push({ path: '/overview/cityTypeInfo', query:{activePane: 'table3'}});
	    		}
			}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 1.48rem;
	}
	.title {
		padding-right: 0.05rem;
	}
	.topRightMenu {
		/*margin-top: -0.04rem;*/
	}
</style>