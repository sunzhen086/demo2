<template>
	<div class="main cma">
		<top></top>
		<div class="main-body">
			<div class="left-part left">
				<left1></left1>
				<left2></left2>
			</div>
			<div class="right-part left">
				<right1></right1>
				<right2></right2>
			</div>
		</div>
	</div>
</template>

<script>
	import top from './common/top.vue';
	import left1 from './common/left1.vue';
	import left2 from './common/left2.vue';
	import right1 from './common/right1.vue';
	import right2 from './common/right2.vue';

	export default {
		data() {
			return {

			}

		},
		components: {
			top,
			left1,
			left2,
			right1,
			right2
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.main{
		height: 6.6rem;
		margin-left:$box-distince;
		font-size: 0.14rem;
		color: white;
		.left{
			float: left;
		}
		.main-body{
			.left-part{
				width: 5.2rem;
			}
			.right-part{
				width: 7.05rem;
				margin-left: $box-distince;
			}
		}
	}
</style>