<template>
	<ul>
        <li v-for="item in boxData">
        	<div class="main3" v-if="item.title == '社会存销比' ">
                <leftBox v-bind:boxData = "item"></leftBox>
            </div>
            <div class="main" v-else>
                <leftBox v-bind:boxData = "item"></leftBox>
            </div>
        </li>
	</ul>
</template>

<script>
	import leftBox from './leftBox.vue';
	
	export default {
		props: {
			boxData: Array
		},
		data() {
			return {
				
			}
			
		},
		components: {
			leftBox
		},
		methods:{
			
		}
	
	}

</script>

<style lang="scss" scoped>
	.main{
		margin-bottom: 0.1rem;
	}
	.main3{
		margin-bottom: 0rem;
	}
</style>