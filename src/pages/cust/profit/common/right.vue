<template>
	<div class="rightPanel">
		<rightTop></rightTop>
		<rightBottom></rightBottom>
	</div>
</template>

<script>
	import rightTop from './rightTop.vue';
	import rightBottom from './rightBottom.vue';
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			rightTop,
			rightBottom
		}
	}
</script>

<style lang="scss" scoped>
	.rightPanel {
		width: 7rem;
		height: 6rem;
	}
</style>