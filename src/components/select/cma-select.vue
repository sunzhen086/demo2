<template>
  <div class="sx">
	  <el-select v-model="value" placeholder="请选择">
	    <el-option
	      v-for="item in options"
	      :key="item.value"
	      :label="item.label"
	      :value="item.value">
	    </el-option>
	  </el-select>
  </div>
</template>

<script>
export default {
    props: {
    	options: Array
    	
    },
    data() {
      	return {
        	value: ''
      	}
    }
    
  }
</script>

<style lang="scss">
	.sx{
		.el-select{
			.el-input {
				.el-input__icon {
					color: aqua;
				}
			}
		}
	}
	
	.el-select-dropdown {
		background-color: blue
		
	}
</style>