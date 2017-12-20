<template>
	<el-button class="btn-button" type="primary"><i class="fa fa-print btn-color" aria-hidden="true"></i> 打印 </el-button>
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
	.btn-button{
		font-size: 0.15rem;
		background-color: rgba(11, 88, 168, 0.1);
		border-color: #31a5e0;
		.btn-color {
			
			font-size: 0.16rem;
			color:rgba(49,165,224,1);
			//color:#31a5e0;
			&.active,&:hover{
				//color:#0b71c9;
				color: rgba(11, 113, 201, 1);
				cursor:pointer;
			}
	}

}






</style>