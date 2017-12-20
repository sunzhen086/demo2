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
import Vue from 'vue'
import Select from 'element-ui'

Vue.use(Select)
export default {
	mixins: [Select],
	props: {
  	options: Array
    	
	},
	data() {
		return {
    	value: ''
    }
  },
  methods: {
  	
      
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