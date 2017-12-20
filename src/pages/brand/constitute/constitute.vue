<template>
	<div class="main cma">
		<div class="head">
			<top></top>
		</div>
		<div class="top">
			<topHead></topHead>
		</div>
		<div class="main-body">
			<div class="left-part left">
				<left></left>
			</div>
			<div class="center-part left">
				<middle></middle>
			</div>
			<div class="right-part left">
				<right></right>
			</div>
		</div>
	</div>
</template>

<script>
	import top from './common/top.vue';
	import topHead from './common/head.vue';
	import left from './common/left.vue';
	import middle from './common/middle.vue';
	import right from './common/right.vue';

	export default {
		data() {
			return {

			}

		},
		components: {
			topHead,
			top,
			left,
			middle,
			right
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'brand');
			this.$store.commit('setLeftNavStatus', 'constitute');
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../styles/variables.scss";
	.main {
		padding-left: $box-distince;
		font-size: 0.14rem;
		color: white;
		height: 100%;
		
		.left {
			float: left;
		}
		.top {
			//overflow: hidden;
		}
		.head{
			//overflow: hidden;
		}
		.main-body {
			overflow: hidden;
			.left-part {
				width: 3rem;
			}
			.center-part {
				width: 6.2rem;
				margin-left: $box-distince;
			}
			.right-part {
				width: 2.93rem;
				margin-left: $box-distince;
			}
		}
	}
</style>