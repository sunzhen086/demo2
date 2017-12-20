<template>
	<div class="main cma">
		<top></top>
		<div class="main-body">
		  	<div class="left-part">
		  		<middle></middle>
		  		<bottom></bottom>
		  	</div>
		</div>
	</div>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import top from './common/top.vue';
	import middle from './common/middle.vue';
	import bottom from './common/bottom.vue';
	
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			boxBase,
			top,
			middle,
			bottom
		},
		methods:{
			
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'brand');
			this.$store.commit('setLeftNavStatus', 'perform');
		}
	}

</script>

<style lang="scss" scoped>
	@import "../../../styles/variables.scss";
	.main{
		font-size: 0.14rem;
		color:#fff;
		height: 100%;
		padding-left:$box-distince;
		.left{
			float: left;
		}
		.main-body{
			overflow:hidden;
			
			.left-part{
				/*margin-left: $box-distince;*/
				margin-right: $box-distince;
				/*//width: 3rem;*/
			}
		}
	}
	
</style>