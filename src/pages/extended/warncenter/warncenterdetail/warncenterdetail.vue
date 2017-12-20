<template>
	<div class="main cma">
		<div class="left">
			<leftTop @changeTable="changeTable"></leftTop>
			<leftMiddle></leftMiddle>
			<leftBottom></leftBottom>
		</div>
		<div class="right">
			<rightTop :dataName="tId"></rightTop>
			<rightBottom></rightBottom>
		</div>
	</div>
</template>

<script>
	import leftTop from './common/leftTop.vue';
	import leftMiddle from './common/leftMiddle.vue';
	import leftBottom from './common/leftBottom.vue';
	import rightTop from './common/rightTop.vue';
	import rightBottom from './common/rightBottom.vue';

	export default {
		data() {
			return {
				tId:"table1"
			}
		},
		components: {
			leftTop,
			leftMiddle,
			leftBottom,
			rightTop,
			rightBottom
		},
		mounted() {
			this.$store.commit('setTopNavStatus', 'extended');
			this.$store.commit('setLeftNavStatus', 'warncenter');
		},
		methods:{
			changeTable: function(tableId){
				console.log("warncenterdetail -- tableId="+tableId);
				this.tId = tableId;
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.main {
		float:left;
		margin-left: $box-distince;
		font-size: 0.14rem;
		color: white;
		
		.left {
			float:left;
			width: 4rem;
			
		}
		.right {
			float:left;
			margin-left: $box-distince;
			width: 9.12rem;
		}
	}
</style>