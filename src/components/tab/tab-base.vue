<template>
	<ul class="tab">
	  	<li class="tab-pane"  v-for="pane in option.data" v-text="pane.text" :class="{active:pane.key === currentPaneIndex}" @click="setCur(pane.key)">
	  	</li>
	</ul>
</template>

<script>
	export default {
		props:{
			option:Object
		},
		data() {
			return {
				currentPaneIndex:""
			}
		},
		methods:{
			setCur: function (curPane) {
				this.currentPaneIndex = curPane;
				this.$emit('tab-click', curPane, event);
			}	
		},
		mounted() {
			this.currentPaneIndex = this.option.activePane;
		}
	}
</script>

<style lang="scss" scoped>

.tab {
	float:left;
	border: 2px solid rgba(78,212,248,1) ;
	
	.tab-pane{
		float:left;
		padding:0.04rem 0.15rem;
		color:#fff;
		background:rgba(14,46,105,1);
		cursor: pointer;
		
		&.active,&:hover{
			background:rgba(78,212,248,1);
			color: black;
		}
	}
}






</style>