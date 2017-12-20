<template>
	<div >
	  	<i class="fa fa-info-circle info-circle-color"  aria-hidden="true"></i>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>

.info-circle-color {
	font-size: 0.16rem;
	color:rgba(78,212,248,1);
	
	&.active,&:hover{
		
		color: rgba(0, 227, 155, 1);
		cursor:pointer;
	}
}






</style>