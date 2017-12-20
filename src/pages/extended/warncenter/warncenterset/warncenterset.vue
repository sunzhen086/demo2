<template>
	<div class="main cma">
		<top></top>
		<div class="main-body">
			<middle></middle>
		</div>
	</div>
</template>

<script>
	import top from './common/top.vue';
	import middle from './common/middle.vue';

	export default {
		data() {
			return {

			}
		},
		components: {
			top,
			middle
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'extended');
			this.$store.commit('setLeftNavStatus', 'warncenter');
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.main {
		margin-left: $box-distince;
		font-size: 0.14rem;
		color: white;
	}
</style>