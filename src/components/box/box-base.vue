<template>
	<div class="box">
	  	<div class="box-header">
	  		<div class="box-title">
	  			<slot name="box-title"></slot>
	  		</div>
	  		<div class="box-extend">
	  			<slot name="box-extend"></slot>
	  		</div>
	  	</div>
	  	<div class="box-content">
	    	<slot></slot>
	  	</div>
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

.box {
	
	border-top: 4px solid rgba(35, 85, 156, 1);
	//background: rgba(14, 46, 105, 1);
	background: linear-gradient(to top, #03102a, #05225b);
	padding:0.08rem;
	box-sizing: border-box;
	
	.box-header {
		overflow:hidden;
		
		.box-title {
			margin-left: 0.01rem;
			color: rgba(255, 255, 255, 1);
			font-weight: bold;
			position:relative;
			padding-left:0.1rem;
			float:left;
			
			&:before{
				content:"";
				width: 5px;
				height: 90%;
				background: rgba(78,212,248,1);
				margin-top: 2px;
				position:absolute;
				left:0;
				top:-0.01rem;
			}
		}
		
		.box-extend {
			
			margin-right: 0.01rem;
			float: right;
		}
		
	}
	
	.box-content {
		
		min-height: 1rem;
		border: 0;
	  	color: #FFFFFF;
	}

}






</style>