<template>
	<div class="table-link">
		<el-button type="primary" class="table-link-button" @click="onClick()">
			<slot></slot>
			<i class="fa fa-angle-right" aria-hidden="true"></i>
		</el-button>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			onClick: function () {
				this.$emit('on-click', event);
			}
		}
	}
</script>

<style lang="scss" scoped>

.table-link {
	.table-link-button {
		
		height: 0.25rem;
		padding: 0.03rem;
		border-radius: 0.01rem;
		
		&:hover, &:active {
	        background: rgba(78,212,248,1);
	        border-color: rgba(78,212,248,1);
	        color: black;
	    }
	    
	    i {
	    	margin-right: 0.02rem;
	    }
		
	}
	
	
}






</style>