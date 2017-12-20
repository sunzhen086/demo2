<template>
	<div class="main">
		<box-base class="leftBox">
			<div slot="box-title">
				<p class="title">问题{{warnInfo.seq}}数据分析</p>
			</div>
			
			<div class="content">
				<div class="note">
					<span class="font15">分类：</span>{{warnInfo.warnType}}     <span class="font15" style="padding-left:2em;">级别：</span>{{warnInfo.warnLevel}}<br /> 
					<span class="font15">描述：</span>{{warnInfo.warnDesc}} <br /> 
					<span class="font15">规则：</span>{{warnInfo.warnRule}} 
				</div>
				
				<table-chart v-if="warnInfo.warnType=='客户'"></table-chart>
				<market-table-chart v-if="warnInfo.warnType=='市场'"></market-table-chart>
			</div>
		</box-base>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import tableChart from  './custtable.vue';
	import marketTableChart from  './markettable.vue';

	export default {
		props:{
			warnInfo:Object
		},
		data() {
			return {}
		},
		components: {
			boxBase,
			tableChart,
			marketTableChart
		},
		methods: {
		},
		mounted() {
			this.$store.commit('setTopNavStatus', 'extended');
			this.$store.commit('setLeftNavStatus', 'warncenter');
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		margin-left : 0rem;
		.font15 {
			font-size: 0.15rem;
		}
		.note {
			font-size: 0.14rem;
			line-height: 0.25rem;
			padding-left:2em;
		}
	}
	.leftBox {
		margin-bottom: 0.15rem;
		.content {
			padding-top: 0.1rem;
		}
	}
</style>