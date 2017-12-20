<template>
	<div class="main">
        <div class="rightBox">
            <rightTopBox v-bind:boxData = "boxData.rightTopBoxData"></rightTopBox>
        </div>
        <div class="rightBox">
            <rightBottomBox v-bind:boxData = "boxData.rightBottomBoxData"></rightBottomBox>
        </div>
	</div>
</template>

<script>
	import rightTopBox from './rightTopBox.vue';
	import rightBottomBox from './rightBottomBox.vue';

	export default {
		props: {
			boxData: Object
		},
		data() {
			return {
				
			}
			
		},
		components: {
			rightTopBox,
			rightBottomBox
		},
		methods:{
			
		}
	
	}

</script>

<style lang="scss" scoped>
	.main{
		margin-left: 0rem;
		
		.rightBox{
			
		}
	}
</style>