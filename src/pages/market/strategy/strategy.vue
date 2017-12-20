<template>
	<div class="main cma">
		<top v-bind:curCity='curCity'></top>
		<div class="main-body">
		  	<div class="left-part left">
		  		<leftPart @changeCity='changeCity'></leftPart>
		  	</div>
		  	<div class="right-part left">
		  		<rightone v-bind:curCity='curCity'></rightone>
		  		<righttwo v-bind:curCity='curCity'></righttwo>
		  		<!--<rightthree></rightthree>-->
		  	</div>
		</div>
	</div>
</template>

<script>
	import top from './common/top.vue';
	import leftPart from './common/leftPart.vue';
	import rightone from './common/rightone.vue';
	import righttwo from './common/righttwo.vue';
	import rightthree from './common/rightthree.vue';
	export default {
		data() {
			return {
				curCity: '西安'
			}
			
		},
		components: {
			top,
			leftPart,
			rightone,
			righttwo,
			rightthree
		},
		methods:{
			changeCity: function(value) {
				this.curCity = value;
			}
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'market');
			this.$store.commit('setLeftNavStatus', 'strategy');
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../styles/variables.scss";
	.main{
		.main-body{
			overflow:hidden;
		}
		margin-left:$box-distince;
		font-size: 0.14rem;
		color: white;
		.left{
			float: left;
		}
		.left-part{
			width: 3.8rem;
		}
		.right-part{
			width: 8.5rem;
			margin-left: $box-distince;
		}
	}
</style>