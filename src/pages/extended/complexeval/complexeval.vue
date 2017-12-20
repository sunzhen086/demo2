<template>
	<div class="main cma">
		<div class="main-top">
			<div class="title">
				<span class="icon"></span>
				<span class="span">综合评价</span>
			</div>
			<top></top>
		</div>
		<div class="main-body">
		  	<div class="left-part left">
		  		<leftPartOne></leftPartOne>
		  	</div>
		  	<div class="right-part left">
		  		<rightPartOne></rightPartOne>
		  		<rightBar></rightBar>
		  	</div>
		  	<!--<div class="bottom-part left">
		  		<bottomPart></bottomPart>
		  	</div>-->
		</div>
	</div>
</template>

<script>
	import top from './common/top.vue';
	import leftPartOne from './common/leftPartOne.vue';
	import leftPartTwo from './common/leftPartTwo.vue';
	import rightPartOne from './common/rightPartOne.vue';
	import rightPartTwo from './common/rightPartTwo.vue';
	import rightBar from './common/rightBar.vue';
	import bottomPart from './common/bottomPart.vue';
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			top,
			leftPartOne,
			leftPartTwo,
			rightPartOne,
			rightPartTwo,
			rightBar,
			bottomPart
		},
		methods:{
			
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'extended');
			this.$store.commit('setLeftNavStatus', 'complexeval');
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
		padding-right:$box-distince;
		overflow:hidden;
		margin-top: 0.01rem;
		
		.main-top {
			.title{
				float: left;
				overflow: hidden;
				
				.icon{
					float: left;
					width: 0.21rem;
					height: 0.21rem;
					margin-top: 0.22rem;
					background: url('../../../static/img/extended/complexeval/title.png')no-repeat;
				}
						
				.span{
					float: left;
					font-size: 0.18rem;
					color: #01e9f7;
					margin-top: 0.23rem;
					margin-left: 0.05rem;
					margin-right: 0.5rem;
				}
			}
					
		}
		
		
		.main-body{
			float: left;
			overflow:hidden;
			.left-part{
				width: 6.565rem;
				overflow:hidden;
			}
			.right-part{
				width: 6.57rem;
				margin-left: $box-distince;
				overflow:hidden;
			}
			.bottom-part{
				/*width: 12.265rem;*/
				margin-top:$box-distince;
			}
		}
		
		.left{
			float: left;
		}
	}
</style>