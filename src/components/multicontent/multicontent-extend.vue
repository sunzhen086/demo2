<template>
	<div class="multicontent">
	  	<template  v-if="rate != 0">
	  		<i class='icon-style fa' :class="[rate > 0 ? 'fa-arrow-up up-color' : 'fa-arrow-down down-color']" ></i>
			<span class="rate-content" :class="[rate > 0 ? 'up-color' : 'down-color']" >
				{{rate}}
				<span v-if="percentFlag > 0">%</span>
			</span>
	  	</template >
		<template  v-else>
			<i class='icon-style fa fa-arrow-right'></i>
		  	<span class="rate-content" >
		  		{{rate}}
		  		<span v-if="percentFlag > 0">%</span>
		  	</span>
		</template >
		
	  	
	</div>
</template>

<script>
	export default {
		props: {
			rate: Number,
			percentFlag:{type:Number, default: 1}
		},
		data() {
			return {
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>

.multicontent {
	
	
	.icon-style {
		align-content: left;
		margin-left: 0.005rem;
	}
	
	.up-color {
		color: #1afb28;
	}
	
	.down-color {
		color: #ff0000;
	}
	
	
	.rate-content {
		border: 0;
		text-align: left;
		padding-left: 0.02rem;
		width:0.65rem; 
		display:inline-block;
	}
	
}






</style>