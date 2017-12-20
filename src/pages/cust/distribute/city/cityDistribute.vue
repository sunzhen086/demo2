<template>
	<div class="main">
		<div class="topBar">
			<topBar></topBar>
		</div>
		<div class="leftDiv">
			<middleLeft class="margin" @showDetail='showDetail'></middleLeft>
			
			<bottomLeft ></bottomLeft>
		</div>
		<div class="rightDiv" v-if='showDetailFlag'>
			<!--<middleRight class="margin"></middleRight>
			<bottomRight></bottomRight>-->
			<middleLeftDetail></middleLeftDetail>
		</div>
		<div class="rightDiv" v-if='!showDetailFlag'>
			<middleRight class="margin"></middleRight>
			<bottomRight></bottomRight>
		</div>
	</div>
</template>

<script>
	import topBar from './common/topBar.vue';
	import middleLeft from './common/middleLeft.vue';
	import middleRight from './common/middleRight.vue';
	import bottomLeft from './common/bottomLeft.vue';
	import bottomRight from './common/bottomRight.vue';
	import middleLeftDetail from './common/middleLeftDetail.vue';
	
	export default {
		data() {
			return {
				showDetailFlag: false
			}
		},
		components: {
			topBar,
			middleLeft,
			middleRight,
			bottomLeft,
			bottomRight,
			middleLeftDetail
		},
		methods: {
			showDetail: function() {
				this.showDetailFlag = !this.showDetailFlag;
			}
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'cust');
			this.$store.commit('setLeftNavStatus', 'distribute');
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		color: white;
		height: 6.6rem;
		margin-left: 0.14rem;
		.topBar {
			height: 0.65rem;
		}
		
		.leftDiv {
			width: 6.8rem;
			float: left;
		}
		
		.rightDiv {
			width: 5.47rem;
			margin-left: 0.14rem;
			float: left;
		}
		.margin{
			margin-bottom: 0.14rem;
		}
	}
</style>